  import React, { useState, useEffect, useContext } from "react";
  import { View, TouchableOpacity, Image, Animated } from "react-native";
  import { useNavigation } from "@react-navigation/native";

  import Icon from "react-native-vector-icons/FontAwesome";
  import TouchableScale from "react-native-touchable-scale";

  import styles from "../styles/PlantStyles";
  import { plants } from "../states/plantsConfig";
  import SelectPlantModal from "./PlantSelectionModal";
  import SelectFromArchiveModal from "./ArchiveSelectionModal";
  import ScaleAnimation from "./ScaleAnimation";
  import { getPlantHitBox } from "./PlantHitbox";
  import FloatingMenu from "./CircularMenu";
  import { PlantDataContext } from "../states/plantsDataContext";
  import RealLifeScreenComponent from "../components/PlantLinkComponent";


  const iconContainer = require("../assets/icon_container.png");
  const closeIcon = require("../assets/icons/close_icon.png");
  const fertilizeIcon = require("../assets/icons/fertilize_icon.png");
  const archiveIcon = require("../assets/icons/archive_icon.png");
  const learnIcon = require("../assets/icons/learn_icon.png");
  const waterIcon = require("../assets/icons/water_icon.png");
  const linkIcon = require("../assets/icons/link_icon.png");

  const Plant = ({ id, style, isArchived = false }) => {

    const [realLifeScreenVisible, setRealLifeScreenVisible] = useState(false);

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

    const { plantData, updatePlantData } = useContext(PlantDataContext);

    useEffect(() => {
      const savedPlant = plantData.find(
        (p) => (isArchived ? p.archiveID : p.plantPositionID) === id.toString()
      );
      if (savedPlant) {
        const plant = plants[savedPlant.plantID];
        setSelectedPlant(plant);
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
      console.log("Archiving plant", id);

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
      //Reset this plant to empty
      setSelectedPlant(null);
    };

    const handleMenuItemPress = (item) => {
      console.log("Menu item pressed", item);
      setFloatingMenuVisible(false);
      if (item.id == 1) {
        console.log(selectedPlant.plantID);
        navigation.navigate("LevelSelectionScreen", {
          id: id,
          selectedPlantID: selectedPlant.plantID,
        });
      } else if (item.id == 2) {
        //Archive button pressed
        handleArchiveButtonPress();
      }else if (item.id == 4) {
        //Archive button pressed
        handleToggleRealLifeScreen();
      }
    };

    const handleSelectPlant = async (plantID) => {
      const plant = plants[plantID];
      setSelectedPlant(plant);
      setSelectPlantModalVisible(false);

      // Add the new plant to the saved plants array
      const newPlantData = {
        plantPositionID: id.toString(),
        plantID: plantID.toString(),
        archiveID: "null",
        progress: 0,
      };

      // Save the updated saved plants array in AsyncStorage
      updatePlantData([...plantData, newPlantData]);
      console.log("Plant data saved successfully.");
    };

    handleSelectFromArchive = async () => {
      //Hide the species selection modal
      setSelectPlantModalVisible(false);
      //Show the archive selection modal
      setSelectArchiveModalVisible(true);
    };

    handleRemoveFromArchive = async (archiveID, plantID) => {
      setSelectArchiveModalVisible(false);
      setSelectedPlant(plants[plantID]);

      console.log("Archive ID: ", archiveID.toString());
      console.log("Plant data:");
      plantData.forEach(plant => {console.log(plant);});

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
      
      console.log("New plant data:");
      plantData.forEach(plant => {console.log(plant);});
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
        />
      </View>
    );
  };

  export default Plant;
