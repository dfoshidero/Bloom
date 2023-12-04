import React, { useState, useEffect, useContext } from "react";
import { View, TouchableOpacity, Image, Alert, Animated } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";
import TouchableScale from "react-native-touchable-scale";

import styles from "../styles/PlantStyles";
import SelectPlantModal from "./PlantSelectionModal";
import SelectFromArchiveModal from "./ArchiveSelectionModal";
import ScaleAnimation from "./ScaleAnimation";
import { getPlantHitBox } from "./PlantHitbox";
import FloatingMenu from "./CircularMenu";
import { usePlantContext } from "../states/plantsDataContext";
import { usePlayerConfig } from "../states/playerConfigContext";
import { useProgressContext } from "../states/speciesProgressContext";
import RealLifeScreenComponent from "../components/PlantLinkComponent";
import GameText from "../styles/GameText";
import { RFValue } from "react-native-responsive-fontsize";

import AsyncStorage from '@react-native-async-storage/async-storage';


const iconContainer = require("../assets/icon_container.png");
const closeIcon = require("../assets/icons/close_icon.png");
const fertilizeIcon = require("../assets/icons/fertilize_icon.png");
const archiveIcon = require("../assets/icons/archive_icon.png");
const learnIcon = require("../assets/icons/learn_icon.png");
const waterIcon = require("../assets/icons/water_icon.png");
const linkIcon = require("../assets/icons/link_icon.png");
const deleteIcon = require("../assets/icons/delete_icon.png");

const Plant = ({ id, style, currentBackgroundID, isArchived = false }) => {
  const [realLifeScreenVisible, setRealLifeScreenVisible] = useState(false);
  const { addXP } = usePlayerConfig();

  //function for testing link to real life modal should be deleted later
  const handleToggleRealLifeScreen = () => {
    setRealLifeScreenVisible(!realLifeScreenVisible);
  };

  const navigation = useNavigation();
  // New state for PLANT SELECT modal visibility
  const [selectPlantModalVisible, setSelectPlantModalVisible] = useState(false);
  // State for archive selection modal visibility
  const [selectArchiveModalVisible, setSelectArchiveModalVisible] =
    useState(false);
  // State for setting selecting plant
  const [selectedPlant, setSelectedPlant] = useState(null);
  // State for managing the visibility of the Floating Menu
  const [floatingMenuVisible, setFloatingMenuVisible] = useState(false);
  // State for scale animation
  const [isActive, setIsActive] = useState(false);

  const { plantData, updatePlantData, plantsConfig } = usePlantContext();
  const { speciesProgress, updateSpeciesProgress } = useProgressContext();

  const [fertilizeCooldown, setFertilizeCooldown] = useState(false);
  const [xpGained, setXpGained] = useState(0);
  const [xpAnimation, setXpAnimation] = useState(new Animated.Value(0));

  //linked plant photo
  const [buttonContent, setButtonContent] = useState(null);

  //plant timer
  const [timer, setTimer] = useState("");
  const [countdown, setCountdown] = useState(0);
  const [watered, setWatered] = useState("");
  const [linked, setLinked] = useState(0);

  //water animation
  const [isWaterButtonPressed, setWaterButtonPressed] = useState(false);

  const startCountdown = () => {
    let seconds;
    seconds = timer * 3600;
    setCountdown(seconds);
    setLinked(1);
  };

  const handleWaterButtonPress = () => {
    setWaterButtonPressed(true);
    startCountdown();

    Animated.timing(xpAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      // Reset animation
      setXpAnimation(new Animated.Value(0));
    });
  
    setTimeout(() => {
      setWaterButtonPressed(false);
    }, 1000); // Adjust the timeout duration as needed
  };

  const formatCountdownTime = () => {
    const days = Math.floor(countdown / (3600 * 24));
    const hours = Math.floor((countdown % (3600 * 24)) / 3600);
    const minutes = Math.floor((countdown % 3600) / 60);
    const seconds = countdown % 60;

    if (days > 0) {
      return `${days} days`;
    } else {
      return `${hours}h ${minutes}m ${seconds}s`;
    }
  };

  const countdownTime = formatCountdownTime();

  useEffect(() => {
    const savedPlant = plantData.find(
      (p) => (isArchived ? p.archiveID : p.plantPositionID) === id.toString()
    );
    if (savedPlant) {
      const plant = plantsConfig[savedPlant.plantID];
      setSelectedPlant(plant);
    } else {
      setSelectedPlant(null);
    }
  }, [id, plantData]);

  const handlePressInPlant = () => {
    setIsActive(true);
  };

  const handlePressOutPlant = () => {
    setIsActive(false);
  };

  const handleAddPlantPress = () => {
    setSelectPlantModalVisible(true);
  };

  //Archive a plant
  const handleArchiveButtonPress = async () => {
    //Make a unique archiveID
    newArchiveID = 0;
    while (
      plantData.find((plant) => plant.archiveID === newArchiveID.toString())
    ) {
      newArchiveID++;
    }

    //Find this plant and edit its positionID and archiveID
    let modifiedPlantData = plantData;
    for (let i = 0; i < plantData.length; i++) {
      if (plantData[i].plantPositionID === id.toString()) {
        modifiedPlantData[i].plantPositionID = "null";
        modifiedPlantData[i].archiveID = newArchiveID.toString();
      }
    }

    //Save the changes
    updatePlantData(modifiedPlantData);
    //Empty this plant component
    setSelectedPlant(null);
  };

  const handleMenuItemPress = (item) => {
    setFloatingMenuVisible(false);
    if (item.id == 1) {
      navigation.navigate("LevelSelectionScreen", {
        id: id,
        selectedPlantID: selectedPlant.plantID,
      });
    } else if (item.id == 2) {
      handleArchiveButtonPress();
    } else if (item.id == 3) {
      handleWaterButtonPress();
    } else if (item.id == 4) {
      handleToggleRealLifeScreen();
    } else if (item.id == 5) {
      handleFertilizeButtonPress();
    } else if (item.id == 7) {
      handleDeleteButtonPress();
    }
  };

  const handleSelectPlant = async (plantID) => {
    const plant = plantsConfig[plantID];
    setSelectedPlant(plant);
    setSelectPlantModalVisible(false);

    // Add the new plant to the saved plant array
    const newPlantData = {
      plantPositionID: id.toString(),
      plantID: plantID.toString(),
      archiveID: "null",
      progress: 0,
      backgroundID: currentBackgroundID,
    };

    // Save the updated saved plant array in AsyncStorage
    updatePlantData([...plantData, newPlantData]);
  };

  handleSelectFromArchive = async () => {
    //Hide the species selection modal
    setSelectPlantModalVisible(false);
    //Show the archive selection modal
    setSelectArchiveModalVisible(true);
  };

  handleRemoveFromArchive = async (archiveID, plantID) => {
    setSelectArchiveModalVisible(false);
    setSelectedPlant(plantsConfig[plantID]);

    //Find this plant and edit its positionID and archiveID
    let modifiedPlantData = plantData;
    for (let i = 0; i < plantData.length; i++) {
      if (plantData[i].archiveID === archiveID.toString()) {
        modifiedPlantData[i].plantPositionID = id.toString();
        modifiedPlantData[i].archiveID = "null";
      }
    }

    //Save the changes
    updatePlantData(modifiedPlantData);
  };

  const handleDeleteButtonPress = async () => {
    Alert.alert(
      "Delete Plant",
      "Are you sure? This plant will be lost forever.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: async () => {
            const updatedPlantData = plantData.filter(
              (plant) => plant.archiveID !== id.toString()
            );

            // Update the plantData state
            await updatePlantData(updatedPlantData);

            // Optionally, navigate away or update the UI to reflect the deletion
          },
        },
      ],
      { cancelable: false }
    );
  };

  useEffect(() => {
    const checkFertilizeCooldown = async () => {
      const cooldownKey = `@fertilizeCooldownEnd-${id}`; // Unique key for each plant

      try {
        const cooldownEndString = await AsyncStorage.getItem(cooldownKey);
        if (cooldownEndString !== null) {
          const cooldownEnd = parseInt(cooldownEndString, 10);
          const currentTime = new Date().getTime();
          if (currentTime < cooldownEnd) {
            setFertilizeCooldown(true);
            setTimeout(() => {
              setFertilizeCooldown(false);
              AsyncStorage.removeItem(cooldownKey);
            }, cooldownEnd - currentTime);
          }
        }
      } catch (error) {
        console.error("AsyncStorage error: ", error.message);
      }
    };

    checkFertilizeCooldown();
  }, [id]); // Add id as a dependency

  const handleFertilizeButtonPress = async () => {
    if (!fertilizeCooldown) {
      addXP(5); // Adding 5 XP
      setXpGained(5);

      // Start XP Animation
      Animated.timing(xpAnimation, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }).start(() => {
        // Reset animation
        setXpAnimation(new Animated.Value(0));
        setXpGained(0); // Reset XP gained to hide the text
      });
      // Set the fertilize cooldown to true for 12 hours
      setFertilizeCooldown(true);

      // Save the current time to AsyncStorage

      const cooldownEnd = new Date().getTime() + 12 * 60 * 60 * 1000; // 12 hours in milliseconds
      const cooldownKey = `@fertilizeCooldownEnd-${id}`; // Unique key for each plant

      try {
        await AsyncStorage.setItem(cooldownKey, cooldownEnd.toString());
        setFertilizeCooldown(true);

        setTimeout(() => {
          setFertilizeCooldown(false);
          AsyncStorage.removeItem(cooldownKey);
        }, 12 * 60 * 60 * 1000);
      } catch (error) {
        console.error("AsyncStorage error: ", error.message);
      }
    }
  };

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
              speciesProgress[selectedPlant.plantID] >= stage.growthStage &&
              (!nextStage ||
                speciesProgress[selectedPlant.plantID] < nextStage.growthStage)
            );
          }
        );
        return currentGrowthStage ? currentGrowthStage.imagePath : null;
      }
    }
    return null;
  };

  let menuItemsList = [
    { icon: learnIcon, isImage: true, id: 1 },
    { icon: waterIcon, isImage: true, angle: 240, id: 3 },
    { icon: linkIcon, isImage: true, angle: 0, id: 4 },
    { icon: fertilizeIcon, isImage: true, angle: 180, id: 5 },
    { icon: closeIcon, isImage: true, angle: 90, id: 6 },
  ];
  //Only add the archive button if the plant isn't already in the archive
  if (!isArchived) {
    menuItemsList.push({ icon: archiveIcon, isImage: true, angle: 300, id: 2 });
  }
  if (isArchived) {
    menuItemsList.push({ icon: deleteIcon, isImage: true, angle: 300, id: 7 });
  }

  return (
    <View style={[styles.plantPosition, style]}>
      {selectedPlant ? (
        <View style={[{ justifyContent: "flex-end" }, { top: 5 }]}>
          <View style={styles.touchPlantImageContainer}>
            <TouchableOpacity
              style={[
                selectedPlant
                  ? getPlantHitBox(speciesProgress[selectedPlant.plantID])
                  : {
                      width: 70,
                      height: 100,
                      left: 65,
                      top: 80,
                    },
              ]}
              onPress={() => {
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
          {/* Fertilize Icon */}
          {!fertilizeCooldown && (
            <TouchableOpacity
              style={styles.fertilizeIconStyle}
              onPress={handleFertilizeButtonPress}
            >
              <Image
                source={fertilizeIcon}
                style={{
                  width: 30,
                  height: 30,
                  position: "absolute",
                  left: "15%",
                  bottom: "20%",
                }} // Adjust size as needed
              />
            </TouchableOpacity>
          )}
          {linked === 1 && (
            <View style={buttonContent !== null ? styles.time : styles.timeNoPic}>
              <GameText style={styles.label}>Water:</GameText>
              <GameText style={styles.timeText}>{countdownTime}</GameText>
              {buttonContent !== null && (
                <View style={styles.bubble}>
                  <View style={styles.buttonContentWrapper}>
                    {buttonContent}
                  </View>
                </View>
              )}
            </View>
          )}
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
        handleSelectFromArchive={handleSelectFromArchive}
      />

      {/* Select from archive modal */}
      <SelectFromArchiveModal
        visible={selectArchiveModalVisible}
        onClose={() => setSelectArchiveModalVisible(false)}
        handleSelectPlant={handleSelectPlant}
        handleRemoveFromArchive={handleRemoveFromArchive}
      />

      {/* Render Plant Interaction Menu */}
      {/* FloatingButton component */}
      <View style={{ position: "absolute" }}>
        <FloatingMenu
          visible={floatingMenuVisible}
          onPress={handleMenuItemPress}
          // Customize menu items based on the calling object (selectedPlant)
          menuItems={menuItemsList}
          centralIconIndex={0}
        />
      </View>
      <RealLifeScreenComponent
        realLifeScreenVisible={realLifeScreenVisible}
        closeRealLifeScreen={() => setRealLifeScreenVisible(false)}
        plantID={selectedPlant?.plantID}
        timer={timer} // Pass the timer variable as a prop
        countdown={countdown} // Pass the countdown variable as a prop
        watered={watered} // Pass the watered variable as a prop
        setTimer={setTimer} // Pass the setTimer function as a prop
        setCountdown={setCountdown} // Pass the setCountdown function as a prop
        setWatered={setWatered} // Pass the setWatered function as a prop
        linked={linked}
        setLinked={setLinked}
        buttonContent={buttonContent}
        setButtonContent={setButtonContent}
      />
      {xpGained > 0 && (
        <Animated.View
          style={{
            opacity: xpAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
            transform: [
              {
                translateY: xpAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -50], // Adjust the slide-up distance as needed
                }),
              },
            ],
          }}
        >
          <GameText
            style={{
              color: "green",
              fontSize: RFValue(24),
              position: "absolute",
            }}
          >
            +5XP
          </GameText>
        </Animated.View>
      )}

    {isWaterButtonPressed && (
      <Animated.View
        style={{
          opacity: xpAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
          transform: [
            {
              translateY: xpAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, -50], // Adjust the slide-up distance as needed
              }),
            },
          ],
          position: "absolute",
          bottom: "-90%", // Position the view at the bottom of the container
          alignItems: "center", // Center the text horizontally
          justifyContent: "center", // Center the text vertically
        }}
      >
        <GameText
          style={{
            color: "blue",
            fontSize: RFValue(10),
            position: "absolute", // Remove the absolute positioning
            flexDirection: "row", // Remove the flexDirection property
            flexWrap: "wrap", // Remove the flexWrap property
          }}
        >
          Watered!
        </GameText>
      </Animated.View>
    )}
    </View>
  );
};

export default Plant;