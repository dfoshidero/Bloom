import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import TouchableScale from "react-native-touchable-scale";

import styles from "../styles/PlantPositionStyles";
import { plants } from "../states/plantsConfig";
import SelectPlantModal from "./PlantSelectionModal";
import ScaleAnimation from "./ScaleAnimation";
import { getPlantHitBox } from "./PlantHitbox";
import FloatingMenu, { handleButtonPress } from "./CircularMenu";

const PlantPosition = ({ style }) => {
  // New state for PLANT SELECT modal visibility
  const [selectPlantModalVisible, setSelectPlantModalVisible] = useState(false);
  // New state for PLANT MENU modal visibility
  const [plantMenuModalVisible, setPlantMenuModalVisible] = useState(false);
  // State for setting selecting plant
  const [selectedPlant, setSelectedPlant] = useState(null);
  // State for managing the visibility of the Floating Menu
  const [floatingMenuVisible, setFloatingMenuVisible] = useState(false);
  // State for scale animation
  const [isActive, setIsActive] = useState(false);

  const handlePressInPlant = () => {
    setIsActive(true);
    setFloatingMenuVisible(true);
    handleButtonPress(setFloatingMenuVisible); // Pass the setFloatingMenuVisible function
};

  const handlePressOutPlant = () => {
    setIsActive(false);
  };

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

  return (
    <View style={[styles.plantPosition, style]}>
      {selectedPlant ? (
        <View style={[{ justifyContent: "flex-end" }, { top: 5 }]}>
          <View style={styles.touchPlantImageContainer}>
            <TouchableOpacity
              style={[
                selectedPlant
                  ? getPlantHitBox(selectedPlant.progress)
                  : {
                    width: 70,
                    height: 100,
                    left: 65,
                    top: 80,
                  },
              ]}
              onPress={() => {
                console.log("Plant pressed.");
              }}
              onPressIn = { handlePressInPlant }
              onPressOut = { handlePressOutPlant }
            >
              <View />
            </TouchableOpacity>
          </View>
          <ScaleAnimation
            isActive={isActive}
          >
            <View pointerEvents="none">
              <Image
                source={getPlantImagePath()}
                style={[styles.plantImage]}
                resizeMode="contain"
              />
            </View>
          </ScaleAnimation>
        </View>
      ) : (
        <TouchableScale
          style={[styles.plusIcon,]}
          onPress={handleAddPlantPress}
        >
          <Icon name="plus" size={16} color="#fff" />
        </TouchableScale>
      )}

      {/* Select Plant Modal */}
      <SelectPlantModal
        visible={selectPlantModalVisible}
        onClose={() => setSelectPlantModalVisible(false)}
        handleSelectPlant={handleSelectPlant}
      />

      {/* Render Plant Interaction Menu */}
      {/* FloatingButton component */}
      {floatingMenuVisible && (
        <FloatingMenu
          onPress={() => {
            // Handle the menu interaction here
            console.log("FloatingButton pressed");
            // Set the visibility of the FloatingButton back to false
            setFloatingMenuVisible(false);
          }}
          menuItems={[
            // Customize menu items based on the calling object (selectedPlant)
            { icon: "cloud-upload", right: 20, isImage: false },
            { icon: "print", right: 0, isImage: false },
            { icon: "share-alt", right: -20, isImage: false },
          ]}
        />
      )}
    </View>
  );
};

export default PlantPosition;
