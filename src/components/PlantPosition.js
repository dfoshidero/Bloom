import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Modal, Text, Animated } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Replace with your icon set

const PlantPosition = ({ style, onAddPlant, onOpenPlantMenu, hasPlant }) => {
  const [selectPlantModalVisible, setSelectPlantModalVisible] = useState(false);

  // functions for when pressing plants and the menu
  const handleAddPlantPress = () => {
    setSelectPlantModalVisible(true);
  };

  const handlePlantMenuPress = () => {
    onOpenPlantMenu();
  };

  const closeModal = () => {
    setSelectPlantModalVisible(false);
  };

  return (
    <View style={[styles.plantPosition, style]}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={hasPlant ? handlePlantMenuPress : handleAddPlantPress}
      >
        <Icon name="plus" size={16} color="#fff" />
      </TouchableOpacity>

      {/* Select Plant Modal */}
      <Modal
        visible={selectPlantModalVisible}
        onRequestClose={closeModal}
        transparent
        animationType="slide"
      >
        <TouchableOpacity style={styles.modalOverlay} onPressOut={closeModal}>
          <View style={styles.modalView}>
            {/* This should be replaced with the logic for selecting a plant */}
            <Text>Select a plant to learn</Text>
            <TouchableOpacity onPress={() => onAddPlant("Plant Name")}>
              <Text>Add Plant</Text>
              {/* Add more plants here */}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* If there is a plant, show it */}
      {hasPlant && (
        <View style={styles.plantImage}>
          {/* Your plant image and other UI elements */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  plantPosition: {
    opacity: 0.8,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    width: 60,
    height: 45,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  addButton: {
    // Add your styles for the add button here
    position: "absolute",
    right: 15, // Adjust as needed to float the button
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    // Add your styles for the modal here
    opacity: 0.8,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  plantImage: {
    // Add your styles for the plant image here
  },
});

export default PlantPosition;
