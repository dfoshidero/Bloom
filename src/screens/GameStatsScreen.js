import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";

import TouchableScale from "react-native-touchable-scale";

import menuBackgroundImage from '../assets/backgrounds/misc/menu_bg.png';
import GameText from "../styles/GameText";

import {plants} from "../states/plantsConfig";

// This is a mock function that should ideally fetch the mastery levels from your backend or state management store.
const fetchMasteryLevels = () => {
  if (!plants) {
    return Promise.reject("Plants data is undefined");
  }

  const masteryLevels = Object.values(plants).map((plant) => {
    return {
      id: plant.plantID,
      name: plant.name,
      level: plant.level,
      progress: plant.progress,
      learned: plant.learned,
      type: plant.type,
      colours: plant.colours,
      height: plant.height,
      careInstructions: plant.careInstructions,
      skins: plant.skins,
      //and more
    };
  });

  return Promise.resolve(masteryLevels);
};

const GameStatsScreen = () => {
  const [plantDetailVisible, setPlantDetailVisible] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);

  const handleSelectPlant = (plantID) => {
    const plant = plants[plantID];
    setSelectedPlant(plant);
  };

  const disableSelectPlant = () => {
    setSelectedPlant(null);
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

  const getProperty = (propertyName) => {
    if (selectedPlant) {
      return selectedPlant[propertyName];
    }
    return null;
  };

  const show_plantdetails = () => {
    setPlantDetailVisible(!plantDetailVisible);
  }

  const close_plantdetails = () => {
    if (plantDetailVisible) {
      setPlantDetailVisible(false);
    }
  }
  const [masteryLevels, setMasteryLevels] = useState([]);

  useEffect(() => {
    fetchMasteryLevels().then(setMasteryLevels);
  }, []);


const renderMasteryItem = ({ item }) => (
  <TouchableScale
    style={[
      item.learned
        ? styles.itemContainer_unlocked
        : styles.itemContainer_locked,
      { width: "29.5%", justifyContent: "space-between" }, // Adjust the width to occupy half of the available space
    ]}
    onPress={
      item.learned
        ? () => {
            show_plantdetails();
            handleSelectPlant(item.id);
          }
        : null
    }
  >
    <Modal
      animationType="fade"
      transparent={true}
      visible={plantDetailVisible}
      onPressOut={show_plantdetails}
    >
      <TouchableOpacity
        style={styles.backgroundImage}
        onPress={() => {
          close_plantdetails();
          disableSelectPlant();
        }}
      >
        {/*Contents in the menu*/}

        <View style={styles.plantDetailsContainer}>
          <GameText style={styles.plantName}>{getProperty("name")}</GameText>
          <View style={styles.imageContainer}>
            <Image source={getPlantImagePath()} style={styles.plantImage} />
          </View>
          <View style={styles.plantDetailsTextContainer}>
            <GameText style={styles.plantDetailsItem}>
              Height: {getProperty("height")}
            </GameText>
            <GameText style={styles.plantDetailsItem}>
              Type: {getProperty("type")}
            </GameText>
            <View style={styles.multiItemContainer}>
              {getProperty("colours") ? (
                <>
                  <GameText style={styles.plantDetailsItem}>Colors: </GameText>
                  {getProperty("colours").map((color, index) => (
                    <GameText key={color} style={styles.plantDetailsItem}>
                      {color}
                      {getProperty("colours").length > 1 &&
                      index !== getProperty("colours").length - 1
                        ? ", "
                        : ""}
                    </GameText>
                  ))}
                </>
              ) : null}
            </View>
            {getProperty("careInstructions") ? (
              <>
                <GameText style={styles.plantDetailsItem}>
                  Care Instructions:
                </GameText>
                {Object.entries(getProperty("careInstructions")).map(
                  ([key, instruction]) => (
                    <GameText
                      key={key}
                      style={styles.plantDetailsItem}
                    >{`${key}: ${instruction}`}</GameText>
                  )
                )}
              </>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
    <GameText style={styles.plantName}>{item.name}</GameText>
    {/* Progress can be represented by a simple view or a progress bar component */}
    <View style={styles.progressBarBackground}>
      <GameText style={styles.level}>{item.level}</GameText>
      <View
        style={[styles.progressBarFill, { width: `${item.progress * 100}%` }]}
      />
    </View>
  </TouchableScale>
);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={menuBackgroundImage}
        style={styles.backgroundImage_bg}
      ></ImageBackground>
      <View style={styles.titleContainer}>
        <GameText style={styles.title}>Plant Mastery Levels</GameText>
      </View>
      <View style={styles.masteryContainer}>
        <FlatList
          data={masteryLevels}
          renderItem={renderMasteryItem}
          keyExtractor={(item) => item.id}
          numColumns={3} // Set the number of columns to 3
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    top: "20%",
    width: "75%"
  },
  masteryContainer: {
    top: "20%",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    color: "#fff",
  },
  itemContainer_unlocked: {
    padding: 10,
    margin: 8, // Add margin to create spacing between items
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemContainer_locked: {
    padding: 10,
    margin: 8, // Add margin to create spacing between items
    backgroundColor: "#BFBFBF",
    borderRadius: 5,
    width: "100%",
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
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  imageContainer: {
    left: "0%", //added these few lines to align to the center
    right: "0%", //added these few lines to align to the center
  },
  plantDetailsContainer: {
    alignItems: "center",
    top: "20%", //added these few lines to align to the center
    left: "10%", //added these few lines to align to the center
    right: "10%", //added these few lines to align to the center
    width: "80%", //original 100%
    opacity: 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 30, //80 originally
    paddingBottom: 20, //10 originally
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  plantDetailsTextContainer: {
    top: "1%",
    alignItems: "center",
  },
  plantName: {
    fontSize: 9,
    textAlign: "center",
    marginBottom: "1%"
  },
  level: {
    fontSize: 10,
    color: "#666",
    textAlign: "center",
  },
  progressBarBackground: {
    height: 20,
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginTop: 10,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "green",
    borderRadius: 10,
  },
  plantDetailsItem: {
    marginBottom: 10,
    fontSize: 10,
    textAlign: "center",
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the alpha value to control darkness
  },
  multiItemContainer: {
    alignItems: "center",
    flexDirection: "row",
  },
  backgroundImage_bg: {
    resizeMode: "contained",
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
  progressBarBackground: {
    justifyContent: "flex-end", // Justify the progress bar to the bottom
    height: 20,
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginTop: "25%",
  },
});

export default GameStatsScreen;
