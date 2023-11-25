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
          <Text style={styles.buttonText}>Click to Add Photo</Text>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={nickname}
              onChangeText={setNickname}
              editable={isEditing}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Plant:</Text>
            <Text style={styles.label}>{name}</Text>
          </View>
          {/*<View style={styles.careInstructionsContainer}>
            <Text style={styles.labelCare}>Care Instructions:</Text>
            <Text style={styles.label}>{careInstructions}</Text>
          </View>*/}
        </View>
        {isEditing ? (
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleSaveButtonPress}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.editButton}
            onPress={handleEditButtonPress}
          >
            <Text style={styles.buttonText}>Edit</Text>
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
  fontWeight: "bold",
  },
  textContainer: {
  marginTop: "20%",
  // Removed alignItems: "center"
  },
  
  inputContainer: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 20,
  width: "70%",
  },
  
  label: {
  marginRight: 10,
  fontWeight: "bold",
  },
  labelCare: {
  marginRight: 10,
  fontWeight: "bold",
  marginBottom: 10,
  },
  input: {
  flex: 1,
  height: 40,
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 5,
  paddingHorizontal: 10,
  textAlignVertical: "top", // Added to align the text at the top of the input
  },
  editButton: {
  position: "absolute",
  bottom: 20,
  left: 20,
  paddingHorizontal: 10,
  paddingVertical: 5,
  backgroundColor: "#ccc",
  borderRadius: 5,
  },
  saveButton: {
  marginBottom: 20,
  padding: 10,
  backgroundColor: "#ccc",
  borderRadius: 5,
  },
  });

export default RealLifeScreen;