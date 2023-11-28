import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Modal,
  Dimensions,
  Image,
  Alert,
} from "react-native";
import TouchableScale from "react-native-touchable-scale";
import GameText from "../styles/GameText";
import { plants } from "../states/plantsConfig";
import * as ImagePicker from 'expo-image-picker';
import Oracle from "../components/OracleComponent";

const backButtonIcon = require("../assets/icons/back_icon.png");

const windowWidth = Dimensions.get("window").width;
const backButtonSize = windowWidth * 0.25;

const RealLifeScreen = ({ realLifeScreenVisible, closeRealLifeScreen, plantID }) => {
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [plant, setPlant] = useState("");
  const [careInstructions, setCareInstructions] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [photoUri, setPhotoUri] = useState(null);
  const [buttonContent, setButtonContent] = useState(null);
  const [isSelectionModalVisible, setIsSelectionModalVisible] = useState(false);
  const [isNicknameModalVisible, setIsNicknameModalVisible] = useState(false);
  const [nicknameInput, setNicknameInput] = useState("");
  const [Stage, setStage] = useState("");
  const [stageAdvice, setStageAdvice] = useState("");
  const [isHowToModalVisible, setIsHowToModalVisible] = useState(false);

  useEffect(() => {
    // Retrieve plant data from plantsConfig.js based on plantID
    const plantData = plants[plantID];
    if (plantData) {
      const { name: plantName, careInstructions: plantCareInstructions, stageAdvice: stageAdvice } = plantData;
      // Set initial values for name and careInstructions
      setName(plantName);
      setCareInstructions(plantCareInstructions);
      setStageAdvice(stageAdvice);
    }
  }, [plantID]);

  const toggleNicknameModal = () => {
    setIsNicknameModalVisible(!isNicknameModalVisible);
  };

  const toggleHowToModal = () => {
    setIsHowToModalVisible(!isHowToModalVisible);
  };

  const handleSaveNickname = () => {
    setNickname(nicknameInput);
    setStage(Stage);
    toggleNicknameModal();
  };

  const handleEditButtonPress = () => {
    toggleNicknameModal();
  };

  const handleHowToButtonPress = () => {
    toggleHowToModal();
  };

  const showTips = () => {
    Alert.alert(
      "Tips on stage",
      stageAdvice,
      [{
        text: "OK",
        onPress: () => {
          // User canceled, do nothing
        },
        style: "cancel",
      }]
    )
  };

  // Option for users to choose photo from gallery
  const openGallery = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Gallery permission is required to choose photos!');
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      if (result.canceled !== undefined ? result.canceled : true) {
        toggleModal();
        console.log("Gallery camcelled")
        // Handle cancellation or do nothing
        return;
      }
  
      if (!result.canceled) {
        if (result.assets[0].uri) {
          console.log('Selected image URI:', result.assets[0].uri);
          toggleModal();
          setPhotoUri(result.assets[0].uri);
          setButtonContent(<Image source={{ uri: result.assets[0].uri }} style={styles.photoImage} />);
        } else {
          console.warn('Selected image URI is undefined.');
          toggleModal();
        }
      } else {
        console.warn('No image selected.');
        toggleModal();
      }
    } catch (error) {
      console.error('Error selecting image:', error);
      toggleModal();
    }
  };

  //option for users to take a photo
  const openCamera = async () => {
    try {
      // Ask for permission to access the camera
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Camera permission is required to take photos!');
        toggleModal();
        return;
      }
  
      // Launch the camera to capture an image
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      // Check if the result indicates that the user cancelled or not
      if (result.canceled !== undefined ? result.canceled : true) {
        console.log("Camera camcelled")
        // Handle cancellation or do nothing
        toggleModal();
        return;
      }
  
      if (result.assets && result.assets.length > 0) {
        // Access the first asset's URI
        setPhotoUri(result.assets[0].uri);
        toggleModal();
        setButtonContent(<Image source={{ uri: result.assets[0].uri }} style={styles.photoImage} />);
      } else {
        // Handle the case where no assets are available
        console.warn('No assets selected.');
        toggleModal();
      }
      // Change the button content to the image
      // setButtonContent(<Image source={{ uri: result.assets[0].uri }} style={styles.photoImage} />);
    } catch (error) {
      console.error('Error opening camera:', error);
      toggleModal();
    }
  };

  const toggleModal = () => {
    setIsSelectionModalVisible(!isSelectionModalVisible);
  };

  return (
    <Modal
      visible={realLifeScreenVisible}
      animationType="slide"
      onRequestClose={closeRealLifeScreen}
    >
      <TouchableScale onPress={closeRealLifeScreen}>
        <Image source={backButtonIcon} style={styles.backButtonIcon} />
      </TouchableScale>

      <Modal
          visible={isSelectionModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={toggleModal}
        >
          <TouchableOpacity
            style={styles.modalBackground}
            activeOpacity={1}
            onPress={toggleModal}
          >
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                openGallery();
              }}
            >
              <GameText style={styles.modalOptionText}>Gallery</GameText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                openCamera();
              }}
            >
              <GameText style={styles.modalOptionText}>Camera</GameText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalOption}
              onPress={toggleModal}
            >
              <GameText style={styles.modalOptionText}>Cancel</GameText>
            </TouchableOpacity>
          </View>
          </TouchableOpacity>
        </Modal>


        <Modal
          visible={isHowToModalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={toggleHowToModal}
        >
          <TouchableOpacity
            style={styles.modalBackground}
            activeOpacity={1}
            onPress={toggleHowToModal}
          >
            <View style={styles.tipsContainer}>
              <GameText style={styles.label}>Tips:</GameText>
              <GameText style={styles.label}>{stageAdvice}</GameText>
            </View>
          </TouchableOpacity>
        </Modal>

        <Modal visible={isNicknameModalVisible} 
          transparent={true}
          animationType="slide" 
          onRequestClose={toggleNicknameModal}>
          <TouchableOpacity
            style={styles.modalBackground}
            activeOpacity={1}
            onPress={toggleNicknameModal}
          >
          <View style={styles.modalContainer}>
            <View style={styles.inputContainer}>
              <GameText style={styles.label}>Name:</GameText>
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={nicknameInput}
                onChangeText={setNicknameInput}
              />
            </View>
            <View style={styles.inputContainer}>
              <GameText style={styles.label}>Stage:</GameText>
              <TextInput
                style={styles.input}
                placeholder="Stage"
                value={Stage}
                onChangeText={setStage}
              />
            </View>
            <TouchableScale style={styles.modalOption} onPress={handleSaveNickname}>
              <GameText style={styles.modalOptionText}>Save</GameText>
            </TouchableScale>
          </View>
          </TouchableOpacity>
        </Modal>

      <View style={styles.container}>
        <TouchableScale style={styles.oracleContainer}>
          <Oracle />
        </TouchableScale>

      <TouchableScale
        style={styles.photoButton}
        onPress={toggleModal}
      >
        {buttonContent ? (
          buttonContent
        ) : (
          <GameText style={styles.buttonText}>Add Photo</GameText>
        )}
      </TouchableScale>
        <View style={styles.textContainer}>
          <View style={styles.inputContainer}>
            <GameText style={styles.label}>Name:</GameText>
            <GameText style={styles.label}>{nickname}</GameText>
          </View>
          <View style={styles.inputContainer}>
            <GameText style={styles.label}>Plant:</GameText>
            <GameText style={styles.content}>{name}</GameText>
          </View>
          <View style={styles.inputContainer}>
            <GameText style={styles.label}>Stage:</GameText>
            <GameText style={styles.label}>{Stage}</GameText>
          </View>
          <View style={styles.inputContainer}>
            <GameText style={styles.label}>Care Instructions:</GameText>
          </View>
          <View style={styles.careInstructionsContainer}>
            <GameText style={styles.plantDetailsItem}>{Object.entries(careInstructions).map(
                  ([key, instruction]) => (
                    <GameText
                      key={key}
                      style={styles.plantDetailsItem}
                    >{`${key}: ${instruction}\n`}</GameText>
                  )
                )}</GameText>
          </View>
        </View>

        <View style={styles.buttons}>
          <TouchableScale
            style={styles.editButton}
            onPress={handleEditButtonPress}
          >
            <GameText style={styles.buttonText}>Edit</GameText>
          </TouchableScale>
          <TouchableScale
            style={styles.howToButton}
            onPress={handleHowToButtonPress}
          >
            <GameText style={styles.buttonText}>How to</GameText>
          </TouchableScale>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  oracleContainer: {
    position: "absolute",
    top: "-3%",
    left: "82%",
    zIndex: 1,
  },

  modalBackground: {
    flex: 1,
  },

  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    alignSelf: "center", // Center horizontally
    marginTop: "10%", // Adjust the top margin if needed
  },
  backButtonIcon: {
    width: backButtonSize,
    height: backButtonSize,
    top: "35%",
    left: "5%",
  },
  plantDetailsItem: {
    fontSize: 10,
    color: "black",
  },

  careInstructionsContainer: {
    width: "90%",
    height: "30%",
    width: "70%",
  },

  photoButton: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#ccc",
    borderRadius: 5,
    width: "80%",
    height: "40%",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonText: {
    fontSize: 16,
    color: "black",
  },

  textContainer: {
    marginTop: "5%",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "70%",
  },

  labelTouch: {
    marginRight: 10,
  },

  superScript: {
    fontSize: 9,
    lineHeight: 9,
    position: 'relative',
    top: -7,
  },

  label: {
    marginRight: 10,
    fontSize: 12,
  },

  content: {
    fontSize: 12,
  },
  
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    textAlignVertical: "center", // Added to align the text at the top of the input
    marginBottom : 10,
  },

  buttons:{
    flexDirection: "row",
    bottom: "30%",
    width: "100%",
    justifyContent: "center",
  },

  editButton: {
    right: "120%",
  },

  howToButton: {
    left: "120%",
  },

  saveButton: {
    left: "5%"
  },
  photoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },

  modalContainer: {
    alignItems: "center",
    top: "30%", //added these few lines to align to the center
    left: "10%", //added these few lines to align to the center
    right: "10%", //added these few lines to align to the center
    width: "80%",
    opacity: 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 30, //80 originally
    paddingBottom: 20, //10 originally
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  tipsContainer: {
    alignItems: "center",
    top: "10%", //added these few lines to align to the center
    left: "15%", //added these few lines to align to the center
    width: "65%",
    opacity: 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 30, //80 originally
    paddingBottom: 20, //10 originally
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  modalOption: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginBottom: 10,
    borderRadius: 5,
  },
  
  modalOptionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RealLifeScreen;