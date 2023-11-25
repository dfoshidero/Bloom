import React, { useState, useEffect, useContext } from "react";
import { View, Dimensions, Text, Image, Animated } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlantDataContext } from "../states/plantsDataContext"; // Update this path
import * as Font from "expo-font";

const loadingImage = require("../assets/backgrounds/misc/loading_screen2.png");
const deviceWidth = Dimensions.deviceWidth

const LoadingScreen = ({ onFinishLoading }) => {
  const { updatePlantData } = useContext(PlantDataContext);
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const [fadeAnim] = useState(new Animated.Value(1)); // Initial opacity is set to 1

  useEffect(() => {
    const loadPlantData = async () => {
      try {
        // Simulate loading process with a delay
        setLoadingMessage("Loading plant data...");
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Adjust the delay as needed

        // Fetch or load your plant data
        const savedPlantsJSON = await AsyncStorage.getItem("savedPlants");
        const savedPlants = savedPlantsJSON ? JSON.parse(savedPlantsJSON) : [];
        updatePlantData(savedPlants);

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
        }, 2000); // 2 seconds delay
      } catch (error) {
        console.error("Failed to load plant data:", error);
      }
    };

    const loadFonts = async () => {
      try {
        setLoadingMessage("Loading fonts...");
        await Font.loadAsync({
          "PressStart2P-Regular": require("../assets/fonts/PressStart2P-Regular.ttf"),
        });
      } catch (error) {
        console.error("Error loading fonts:", error);
      }
    };

    // Load both plant data and fonts
    loadPlantData();
    loadFonts();
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
        <Text>{loadingMessage}</Text>
      </Animated.View>
    </View>
  );
};

export default LoadingScreen;
