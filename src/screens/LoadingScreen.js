import React, { useState, useEffect, useContext } from "react";
import { View, Dimensions, Text, Image, Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlantDataContext } from "../states/plantsDataContext"; // Update this path
import * as Font from "expo-font";
import { PlayerConfigContext } from "../states/playerConfigContext";
import { CompletedLevelsContext } from "../states/completedLevelsContext";
import { SpeciesProgressContext } from "../states/speciesProgressContext";
import { plants as defaultPlantsConfig } from "../states/plantsConfig";

const loadingImage = require("../assets/backgrounds/misc/loading_screen2.png");
const deviceWidth = Dimensions.deviceWidth

const LoadingScreen = ({ onFinishLoading }) => {
  const { updatePlantData, updatePlantsConfig } = useContext(PlantDataContext);
  const { updatePlayerConfig } = useContext(PlayerConfigContext);
  const { updateCompletedLevels } = useContext(CompletedLevelsContext);
  const { updateSpeciesProgress } = useContext(SpeciesProgressContext);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [fontsLoaded, setFontsLoaded] = useState(false); // New state for font loading status
  const [fadeAnim] = useState(new Animated.Value(1)); // Initial opacity is set to 1

  useEffect(() => {

    // Simulate loading process with a delay
    const delay = async () => {
      setLoadingMessage("Loading plant data...");
      await new Promise((resolve) => setTimeout(resolve, 2500)); // Adjust the delay as needed
      
      // Delay before fading out
      setTimeout(() => {
        // Fade out animation
        Animated.timing(fadeAnim, {
          toValue: 0, // Animate to opacity 0 (fully transparent)
          duration: 500, // Animation duration in milliseconds
          useNativeDriver: true, // Use native driver for better performance
        }).start(() => {
          // Animation complete callback
          onFinishLoading();
        });
      }, 50); // 2 seconds delay
    };

    const loadPlantData = async () => {
      try {
        // Fetch or load your plant data
        const savedPlantsJSON = await AsyncStorage.getItem("savedPlants");
        const savedPlants = savedPlantsJSON ? JSON.parse(savedPlantsJSON) : [];
        updatePlantData(savedPlants);
      } catch (error) {
        console.error("Failed to load plant data:", error);
      }
    };

       const loadPlantsConfig = async () => {
         try {
           const plantsConfigJSON = await AsyncStorage.getItem("plantsConfig");
           if (plantsConfigJSON) {
             const plantsConfig = JSON.parse(plantsConfigJSON);
             updatePlantsConfig(plantsConfig);
           } else {
             updatePlantsConfig(defaultPlantsConfig);
           }
         } catch (error) {
           console.error("Failed to load plantsConfig data:", error);
         }
       };


    const loadFonts = async () => {
      try {
        setLoadingMessage("Loading fonts...");
        await Font.loadAsync({
          "PressStart2P-Regular": require("../assets/fonts/PressStart2P-Regular.ttf"),
          "DotGothic16": require("../assets/fonts/DotGothic16-Regular.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };

    const loadPlayerState = async () => {
      try {
        setLoadingMessage("Loading player data...");
        const playerStateJSON = await AsyncStorage.getItem("playerState");
        const playerState = playerStateJSON ? JSON.parse(playerStateJSON) : {};
        updatePlayerConfig(playerState);
      } catch (error) {
        console.error("Error loading player data:", error);
      }
    };

    const loadCompletedLevels = async () => {
      try {
        // Fetch or load completed levels data
        const completedLevelsJSON = await AsyncStorage.getItem("completedLevels");
        let data = {};
        if (completedLevelsJSON) {
          data = JSON.parse(completedLevelsJSON)
          for (let key in data) {
            updateCompletedLevels(key, data[key]);
          }
        }
      } catch (error) {
        console.error("Failed to load completed levels data:", error);
      }
    };

    const loadSpeciesProgress = async () => {
      try {
        // Fetch or load completed levels data
        const speciesProgressJSON = await AsyncStorage.getItem("speciesProgress");
        if (speciesProgressJSON) {
          data = JSON.parse(speciesProgressJSON);
          for (let key in data) {
            updateSpeciesProgress(key, data[key]);
          }
        }
      } catch (error) {
        console.error("Failed to load species progress data:", error);
      }
    };

    // Load everything
    loadPlantData();
    loadFonts();
    loadPlayerState();
    loadCompletedLevels();
    loadSpeciesProgress();
    loadPlantsConfig();
    delay();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animated.View style={{ opacity: fadeAnim, flex: 1 }}>
        {/* Image to display */}
        <Image
          source={loadingImage}
          resizeMode="contain" // Ensure the image maintains its aspect ratio
          style={{ flex: 1 }}
        />
      </Animated.View>
    </View>
  );
};

export default LoadingScreen;
