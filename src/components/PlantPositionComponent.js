import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  Text,
  ScrollView,
  Image,
  Animated,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import TouchableScale from "react-native-touchable-scale";

import styles from "../styles/PlantPositionStyles";
import { plants } from "../states/plantsConfig";

const getPlantHitBox = (progress) => {
  let height;
  if (progress >= 1) {
    height = 150; // Hitbox height for progress > 0.75
  } else if (progress >= 0.66) {
    height = 125; // Hitbox height for progress > 0.5
  } else if (progress >= 0.33) {
    height = 100; // Hitbox height for progress > 0.25
  } else {
    height = 80; // Default height
  }

  return {
    width: 70,
    height: height,
    left: 65,
    zIndex: 2,
  };
};

const PlantPosition = ({ style, onOpenPlantMenu }) => {
  const [selectPlantModalVisible, setSelectPlantModalVisible] = useState(false);
  const [plantMenuModalVisible, setPlantMenuModalVisible] = useState(false); // New state for plant menu modal visibility
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [fadeAnim] = useState(new Animated.Value(1)); // Initial value for opacity: 1

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
            style={[
              styles.modalPlantMenuView,
              {
                width: radius * 2,
                height: radius * 2,
                borderRadius: radius,
              },
            ]}
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

  // Define the scale animation value
  const scaleAnim = useState(new Animated.Value(1))[0]; // Initial value for scale: 1

  // Function to scale in with a bounce
  const scaleIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.1, // scale up to 120%
      speed: 14,
      bounciness: 20,
      useNativeDriver: true,
    }).start();
  };

  // Function to scale out to original size
  const scaleOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1, // scale back to 100%
      speed: 14,
      bounciness: 20,
      useNativeDriver: true,
    }).start();
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
                      zIndex: 1,
                    },
              ]}
              onPress={() => {
                console.log("Plant pressed");
              }}
              onPressIn={scaleIn}
              onPressOut={scaleOut}
            >
              <View />
            </TouchableOpacity>
          </View>
          <Animated.Image
            source={getPlantImagePath()}
            style={[
              styles.plantImage,
              { opacity: fadeAnim, transform: [{ scale: scaleAnim }] },
            ]}
            resizeMode="contain"
          />
        </View>
      ) : (
        <TouchableScale
          style={(styles.addButton, styles.plusIcon)}
          onPress={handleAddPlantPress}
        >
          <Icon name="plus" size={16} color="#fff" />
        </TouchableScale>
      )}

      {/* Select Plant Modal */}
      <Modal
        visible={selectPlantModalVisible}
        transparent
        animationType="slide"
      >
        <TouchableScale
          style={styles.modalSelectPlantOverlay}
          onPressOut={() => setSelectPlantModalVisible(false)}
        >
          <View style={styles.modalSelectPlantView}>
            <ScrollView horizontal={true} style={styles.scrollViewStyle}>
              {Object.entries(plants).map(([key, plant]) => (
                <TouchableScale
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
                </TouchableScale>
              ))}
            </ScrollView>
          </View>
        </TouchableScale>
      </Modal>

      {/* Render Plant Interaction Menu */}
      {selectedPlant && renderPlantMenu()}
    </View>
  );
};

export default PlantPosition;
