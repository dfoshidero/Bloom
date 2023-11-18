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
    // Implement the logic to render the plant menu
    // Options: "water plant", "fertilize plant", "Mastery"
  };

  return (
    <View style={[styles.plantPosition, style]}>
      {selectedPlant ? (
        <TouchableOpacity 
        onPress={renderPlantMenu}
        >
          <Image
            source={getPlantImagePath()}
            style={styles.plantImage}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddPlantPress}
        >
          <Icon name="plus" size={16} color="#fff" />
        </TouchableOpacity>
      )}

      {/* Select Plant Modal */}
      <Modal
        visible={selectPlantModalVisible}
        onRequestClose={() => setSelectPlantModalVisible(false)}
        transparent
        animationType="slide"
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPressOut={() => setSelectPlantModalVisible(false)}
        >
          <View style={styles.modalView}>
            <ScrollView horizontal={true} style={styles.scrollViewStyle}>
              {Object.entries(plants).map(([key, plant]) => (
                <TouchableOpacity
                  key={plant.plantID}
                  onPress={() => handleSelectPlant(plant.plantID)}
                >
                  <View style={styles.plantCard}>
                    <Image 
                    source={plant.iconPath}
                    style={{width: 75, height: 75}} 
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
