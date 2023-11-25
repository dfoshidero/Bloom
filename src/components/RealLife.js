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

const backButtonIcon = require("../assets/icons/back_icon.png");

const windowWidth = Dimensions.get("window").width;
const backButtonSize = windowWidth * 0.25;

const RealLifeScreen = ({ realLifeScreenVisible, closeRealLifeScreen, plantID }) => {
  const [nickname, setNickname] = useState("");
  const [name, setName] = useState("");
  const [plant, setPlant] = useState("");
  const [careInstructions, setCareInstructions] = useState("");
  const [isEditing, setIsEditing] = useState(false);

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

  return (
    <Modal
      visible={realLifeScreenVisible}
      animationType="slide"
      onRequestClose={closeRealLifeScreen}
    >
      <TouchableScale onPress={closeRealLifeScreen}>
        <Image source={backButtonIcon} style={styles.backButtonIcon} />
      </TouchableScale>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.photoButton}
          onPress={() => console.log("Add photo clicked")}
        >
          <GameText style={styles.buttonText}>Click to Add Photo</GameText>
        </TouchableOpacity>
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
});

export default RealLifeScreen;