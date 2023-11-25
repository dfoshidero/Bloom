import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Modal,
} from "react-native";

const RealLifeScreen = ({ realLifeScreenVisible, closeRealLifeScreen }) => {
  const [name, setName] = useState("");
  const [plant, setPlant] = useState("");
  const [careInstructions, setCareInstructions] = useState("");
  const [isEditing, setIsEditing] = useState(false);

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
              value={name}
              onChangeText={setName}
              editable={isEditing}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Plant:</Text>
            <TextInput
              style={styles.input}
              placeholder="Plant"
              value={plant}
              onChangeText={setPlant}
              editable={isEditing}
            />
          </View>
          <View style={styles.careInstructionsContainer}>
            <Text style={styles.label}>Care Instructions:</Text>
            <TextInput
              style={styles.input}
              placeholder="Care Instructions"
              value={careInstructions}
              onChangeText={setCareInstructions}
              editable={isEditing}
              multiline={true}
            />
          </View>
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
    flex: 1,
    alignItems: "center",
  },
  careInstructionsContainer: {
    width: "100%",
    height: "30%",
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
    alignItems: "center",
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
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
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