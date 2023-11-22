import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";
import TouchableScale from "react-native-touchable-scale";
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from "../styles/PlantStyles";
import { plants } from "../states/plantsConfig";
import SelectPlantModal from "./PlantSelectionModal";
import ScaleAnimation from "./ScaleAnimation";
import { getPlantHitBox } from "./PlantHitbox";
import FloatingMenu from "./CircularMenu";

const iconContainer = require("../assets/icon_container.png");
const closeIcon = require("../assets/icons/close_icon.png");
const fertilizeIcon = require("../assets/icons/fertilize_icon.png");
const learnIcon = require("../assets/icons/learn_icon.png");
const waterIcon = require("../assets/icons/water_icon.png");
const linkIcon = require("../assets/icons/link_icon.png");

const Plant = ({ id, style }) => {
  const navigation = useNavigation();
  // New state for PLANT SELECT modal visibility
  const [selectPlantModalVisible, setSelectPlantModalVisible] = useState(false);
  // State for setting selecting plant
  const [selectedPlant, setSelectedPlant] = useState(null);
  // State for managing the visibility of the Floating Menu
  const [floatingMenuVisible, setFloatingMenuVisible] = useState(false);
  // State for scale animation
  const [isActive, setIsActive] = useState(false);

  const handlePressInPlant = () => {
    setIsActive(true);
  };

  const handlePressOutPlant = () => {
    setIsActive(false);
  };

  const handleAddPlantPress = () => {
    setSelectPlantModalVisible(true);
  };

  const handleMenuItemPress = (item) => {
    console.log("Menu item pressed", item);
    setFloatingMenuVisible(false); 
    if (item.id == 1){
      console.log(selectedPlant.plantID)
      navigation.navigate("LevelSelectionScreen", { selectedPlantID: selectedPlant.plantID });
    }
  };

  const handleSelectPlant = async (plantID) => {
    const plant = plants[plantID];
    setSelectedPlant(plant);
    setSelectPlantModalVisible(false);
  
    try {
      // Retrieve the existing saved plants array from AsyncStorage
      const savedPlantsJSON = await AsyncStorage.getItem('savedPlants');
      let savedPlants = [];
      if (savedPlantsJSON) {
        savedPlants = JSON.parse(savedPlantsJSON);
      }
  
      // Add the new plant to the saved plants array
      const newPlantData = {
        plantPositionID: id.toString(),
        plantID: plantID.toString(),
      };
      savedPlants.push(newPlantData);
  
      // Save the updated saved plants array in AsyncStorage
      await AsyncStorage.setItem('savedPlants', JSON.stringify(savedPlants));
      console.log('Plant data saved successfully.');
  
      // Retrieve and print the saved data
      const savedPlantsJSONUpdated = await AsyncStorage.getItem('savedPlants');
      const savedPlantsUpdated = JSON.parse(savedPlantsJSONUpdated);
      console.log('Saved Plants:', savedPlantsUpdated);
    } catch (error) {
      console.log('Error saving plant data:', error);
    }
  };


  const loadSavedPlantData = async () => {
    try {
      const savedPlantsJSON = await AsyncStorage.getItem('savedPlants');
      const savedPlants = JSON.parse(savedPlantsJSON);
  
      if (savedPlants) {
        const savedPlant = savedPlants.find((plant) => plant.plantPositionID === id.toString());
  
        if (savedPlant) {
          const plant = plants[savedPlant.plantID];
          setSelectedPlant(plant);
        }
      }
    } catch (error) {
      console.log('Error loading saved plant data:', error);
    }
  };

  useEffect(() => {
    console.log('ID:', id);
    loadSavedPlantData();
  }, [id]);

  const getPlantImagePath = () => {
    if (selectedPlant) {
      const selectedSkin = selectedPlant.skins.find(
        (skin) => skin.name === selectedPlant.selectedSkin
      );
      if (selectedSkin) {
        // Find the correct growth stage based on progress
        const currentGrowthStage = selectedSkin.growth.find(
          (stage, index, array) => {
            const nextStage = array[index + 1];
            return (
              selectedPlant.progress >= stage.growthStage &&
              (!nextStage || selectedPlant.progress < nextStage.growthStage)
            );
          }
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
                setFloatingMenuVisible(true);
              }}
              onPressIn={handlePressInPlant}
              onPressOut={handlePressOutPlant}
            >
              <View />
            </TouchableOpacity>
          </View>
          <ScaleAnimation isActive={isActive}>
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
        <TouchableScale style={[styles.plusIcon]} onPress={handleAddPlantPress}>
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
      <View style={{ position: "absolute" }}>
        <FloatingMenu
          visible={floatingMenuVisible}
          onPress={handleMenuItemPress}
          menuItems={[
            // Customize menu items based on the calling object (selectedPlant)
            { icon: learnIcon, isImage: true, id: 1 },
            { icon: iconContainer, isImage: true, angle: 300, id: 2 },
            { icon: waterIcon, isImage: true, angle: 240, id: 3 },
            { icon: linkIcon, isImage: true, angle: 0, id: 4 },
            { icon: fertilizeIcon, isImage: true, angle: 180, id: 5 },
            { icon: closeIcon, isImage: true, angle: 90, id: 6 },
          ]}
          centralIconIndex={0}
        />
      </View>
    </View>
  );
};


export default Plant;
