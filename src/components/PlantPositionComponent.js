import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Text,
  ScrollView,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { plants } from "../states/plantsConfig";

const PlantPosition = ({ style, onAddPlant, onOpenPlantMenu, hasPlant }) => {

  const [isDimmed, setIsDimmed] = useState(false);

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
              <ScrollView horizontal={true} style={styles.scrollViewStyle}>
                {Object.entries(plants).map(([key, plant]) => (
                  <TouchableOpacity
                    key={key}
                    onPress={() => onAddPlant(plant.name)}
                  >
                    <View style={styles.plantCard}>
                      <Text>{plant.name}</Text>
                      {/* Include other plant details or an image here */}
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
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
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end", // Align the modal to the bottom
  },

  modalView: {
    opacity: 0.8,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2, // Shadow for the top side of the modal
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxHeight: "40%", // Adjust this to control the modal height
  },

  // modalView: {
  //   backgroundColor: "white",
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  //   padding: 10,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: -2, // Shadow for the top side of the modal
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  //   maxHeight: "40%", // Adjust this to control the modal height
  // },

  scrollViewStyle: {
    flexDirection: "row", // Ensures horizontal layout
    width: "100%", // Ensure full width within modal
  },

  plantCard: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#eaeaea", // Choose your color
    borderRadius: 10,
    // Add other styling as needed
  },

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

  plantImage: {
    // Add your styles for the plant image here
  },
});

export default PlantPosition;
