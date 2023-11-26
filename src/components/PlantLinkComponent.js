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
} from "react-native";
import TouchableScale from "react-native-touchable-scale";
import GameText from "../styles/GameText";
import { plants } from "../states/plantsConfig";
import * as ImagePicker from 'expo-image-picker';

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

  useEffect(() => {
    // Retrieve plant data from plantsConfig.js based on plantID
    const plantData = plants[plantID];
    if (plantData) {
      const { name: plantName, careInstructions: plantCareInstructions } = plantData;
      // Set initial values for name and careInstructions
      setName(plantName);
      setCareInstructions(plantCareInstructions);
    }
  }, [plantID]);

  const handleEditButtonPress = () => {
    setIsEditing(true);
  };

  const handleSaveButtonPress = () => {
    setIsEditing(false);
    Keyboard.dismiss();
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
  
      if (!result.canceled) {
        if (result.assets[0].uri) {
          console.log('Selected image URI:', result.assets[0].uri);
          setPhotoUri(result.assets[0].uri);
          setButtonContent(<Image source={{ uri: result.assets[0].uri }} style={styles.photoImage} />);
        } else {
          console.warn('Selected image URI is undefined.');
        }
      } else {
        console.warn('No image selected.');
      }
    } catch (error) {
      console.error('Error selecting image:', error);
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
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                openGallery();
                toggleModal();
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
        </Modal>

      <View style={styles.container}>
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
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={nickname}
              onChangeText={setNickname}
              editable={isEditing}
            />
          </View>
          <View style={styles.inputContainer}>
            <GameText style={styles.label}>Plant:</GameText>
            <GameText style={styles.content}>{name}</GameText>
          </View>
          <View style={styles.careInstructionsContainer}>
            <GameText style={styles.labelCare}>Care Instructions:</GameText>
            <GameText style={styles.content}>{Object.entries(careInstructions).map(
                  ([key, instruction]) => (
                    <GameText
                      key={key}
                      style={styles.plantDetailsItem}
                    >{`${key}: ${instruction}`}</GameText>
                  )
                )}</GameText>
          </View>
        </View>
        {isEditing ? (
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSaveButtonPress}
          >
            <GameText style={styles.buttonText}>Save</GameText>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.editButton}
            onPress={handleEditButtonPress}
          >
            <GameText style={styles.buttonText}>Edit</GameText>
          </TouchableOpacity>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
    fontSize: 12,
    color: "black",
  },

  careInstructionsContainer: {
    width: "100%",
    height: "30%",
    marginBottom: 20,
    width: "70%",
  },

  photoButton: {
    top: "10%",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#ccc",
    borderRadius: 5,
    width: "80%",
    height: "30%",
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
    marginTop: "20%",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: "70%",
  },

  label: {
    marginRight: 10,
    fontSize: 12,
  },

  content: {
    marginRight: 10,
    fontSize: 12,
  },
  labelCare: {
    marginRight: 10,
    marginBottom: 10,
    fontSize: 12,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 12,
    textAlignVertical: "center", // Added to align the text at the top of the input
  },
  editButton: {
    left: "5%",
    bottom: "10%",
  },
  saveButton: {
    left: "5%",
    bottom: "10%",
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
    width: "80%", //original 100%
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