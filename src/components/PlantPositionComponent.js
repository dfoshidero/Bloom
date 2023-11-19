import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  Text,
  ScrollView,
  Image,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "../styles/PlantPositionStyles";
import { plants } from "../states/plantsConfig";

const PlantPosition = ({ style, onOpenPlantMenu }) => {
  const [selectPlantModalVisible, setSelectPlantModalVisible] = useState(false);
  const [plantMenuModalVisible, setPlantMenuModalVisible] = useState(false); // New state for plant menu modal visibility
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleAddPlantPress = () => {
    setSelectPlantModalVisible(true);
  };

  const handleSelectPlant = (plantID) => {
    const plant = plants[`plant${plantID}`];
    setSelectedPlant(plant);
    setSelectPlantModalVisible(false);
  };

  const getPlantImagePath = () => {
    if (selectedPlant) {
      const selectedSkin = selectedPlant.skins.find(
        (skin) => skin.name === selectedPlant.selectedSkin
      );
      if (selectedSkin) {
        // Find the correct growth stage based on progress
        const currentGrowthStage = selectedSkin.growth.find(
          (stage) => selectedPlant.progress <= stage.growthStage
        );
        return currentGrowthStage ? currentGrowthStage.imagePath : null;
      }
    }
    return null;
  };

  const renderPlantMenu = () => {
    // Creation of circular menu.
    // Adjust these values as needed
    const radius = 100; // Radius of the circle
    const numberOfItems = 5; // Number of items in the circle

    // Calculate positions for each item
    const positions = Array.from({ length: numberOfItems }, (_, index) => {
      const angle = ((2 * Math.PI) / numberOfItems) * index; // Angle in radians
      const x = radius * Math.cos(angle); // X position
      const y = radius * Math.sin(angle); // Y position
      return { left: x + radius, top: y + radius }; // Adjust positions based on the radius
    });


    // Basic implementation of the plant menu
    return (
      <Modal visible={plantMenuModalVisible} transparent animationType="slide">
        <TouchableOpacity
          style={styles.modalPlantMenuOverlay}
          onPressOut={() => setPlantMenuModalVisible(false)}
        >
          <View
            style={
              ([styles.modalPlantMenuView,
              {
                width: radius * 2,
                height: radius * 2,
                borderRadius: radius,
              }])
            }
          >
            {positions.map((position, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  {
                    position: "absolute",
                    left: position.left,
                    top: position.top,
                  },
                  styles.menuItemStyle,
                ]}
                onPress={() => console.log("Menu Item", index)}
              >
                <Text>Item {index + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View style={[styles.plantPosition, style]}>
      {selectedPlant ? (
        <TouchableOpacity
          onPress={() => setPlantMenuModalVisible(true)} // Open the plant menu modal
        >
          <Image source={getPlantImagePath()} style={styles.plantImage} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={(styles.addButton, styles.plusIcon)}
          onPress={handleAddPlantPress}
        >
          <Icon name="plus" size={16} color="#fff" />
        </TouchableOpacity>
      )}

      {/* Select Plant Modal */}
      <Modal
        visible={selectPlantModalVisible}
        transparent
        animationType="slide"
      >
        <TouchableOpacity
          style={styles.modalSelectPlantOverlay}
          onPressOut={() => setSelectPlantModalVisible(false)}
        >
          <View style={styles.modalSelectPlantView}>
            <ScrollView horizontal={true} style={styles.scrollViewStyle}>
              {Object.entries(plants).map(([key, plant]) => (
                <TouchableOpacity
                  key={plant.plantID}
                  onPress={() => handleSelectPlant(plant.plantID)}
                >
                  <View style={styles.plantCard}>
                    <Image
                      source={plant.iconPath}
                      style={{ width: 75, height: 75 }}
                    />
                    <Text>{plant.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Render Plant Interaction Menu */}
      {selectedPlant && renderPlantMenu()}
    </View>
  );
};

export default PlantPosition;
