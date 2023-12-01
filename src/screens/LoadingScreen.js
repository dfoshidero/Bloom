import React, { useState, useEffect, useContext } from "react";
import { View, Dimensions, Text, Image, Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlantDataContext } from "../states/plantsDataContext"; // Update this path
import * as Font from "expo-font";
import { PlayerConfigContext } from "../states/playerConfigContext";

const loadingImage = require("../assets/backgrounds/misc/loading_screen2.png");
const deviceWidth = Dimensions.deviceWidth

const LoadingScreen = ({ onFinishLoading }) => {
  const { updatePlantData } = useContext(PlantDataContext);
  const { updatePlayerConfig } = useContext(PlayerConfigContext);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [fadeAnim] = useState(new Animated.Value(1)); // Initial opacity is set to 1

  useEffect(() => {

    // Simulate loading process with a delay
    const delay = async () => {
      setLoadingMessage("Loading plant data...");
      await new Promise((resolve) => setTimeout(resolve, 300)); // Adjust the delay as needed
      
      // Delay before fading out
      setTimeout(() => {
        // Fade out animation
        Animated.timing(fadeAnim, {
          toValue: 0, // Animate to opacity 0 (fully transparent)
          duration: 200, // Animation duration in milliseconds
          useNativeDriver: true, // Use native driver for better performance
        }).start(() => {
          // Animation complete callback
          onFinishLoading();
        });
      }, 50); // 2 seconds delay
    }

    const loadPlantData = async () => {
      try {
        // Fetch or load your plant data
        const savedPlantsJSON = await AsyncStorage.getItem("savedPlants");
        const savedPlants = savedPlantsJSON ? JSON.parse(savedPlantsJSON) : [];
        console.log("I am the loading screen and I have retrieved plant data",savedPlants);
        updatePlantData(savedPlants);
      } catch (error) {
        console.error("Failed to load plant data:", error);
      }
    };

    const loadFonts = async () => {
      try {
        setLoadingMessage("Loading fonts...");
        await Font.loadAsync({
          "PressStart2P-Regular": require("../assets/fonts/PressStart2P-Regular.ttf"),
          "DotGothic16": require("../assets/fonts/DotGothic16-Regular.ttf"),
        });
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

    // Load plant data, fonts and player state
    loadPlantData();
    loadFonts();
    loadPlayerState();
    delay();
  }, []);

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
