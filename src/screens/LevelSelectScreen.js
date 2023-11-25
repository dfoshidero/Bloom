import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
  Image,
  Animated,
} from "react-native";
import ViewPager from "react-native-pager-view";
import TouchableScale from "react-native-touchable-scale";

import GameText from "../styles/GameText";
import LevelsConfig from "../states/levelsConfig";
import { usePlayerConfig } from "../states/playerConfigContext";

const backgroundImage = require("../assets/backgrounds/misc/level_select.png");
const upIcon = require("../assets/icons/up_icon.png");
const downIcon = require("../assets/icons/down_icon.png");

const LevelSelectionScreen = ({ navigation, route }) => {
  const [scrollIndicatorTopOpacity] = useState(new Animated.Value(1));
  const [scrollIndicatorBottomOpacity] = useState(new Animated.Value(1));

  const viewPagerRef = useRef(null);

  const fadeOutScrollIndicators = () => {
    Animated.timing(scrollIndicatorTopOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(scrollIndicatorBottomOpacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const resetScrollIndicators = () => {
    Animated.timing(scrollIndicatorTopOpacity, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();

    Animated.timing(scrollIndicatorBottomOpacity, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const delay = 2500;
    const timer = setTimeout(() => {
      fadeOutScrollIndicators();
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const { id, selectedPlantID } = route.params;
  const plantLevels = LevelsConfig[selectedPlantID];

  const { playerConfig } = usePlayerConfig();

  const handlePress = (item) => {
    if (playerConfig.hearts > 0) {
      if (plantLevels.completedLevels.includes(item - 1) || item === 1) {
        navigation.navigate("QuizScreen", {
          id: id,
          plant: selectedPlantID,
          level: `level${item}`,
        });
      } else {
        Alert.alert("Level Locked", "Complete the previous level to unlock.");
      }
    } else {
      Alert.alert("No Hearts Left", "You need more hearts to start a quiz!");
    }
  };

  const handlePageScroll = (e) => {
    resetScrollIndicators();

    // Additional logic can be added here if needed

    const fadeOutDelay = 1500;
    setTimeout(() => {
      fadeOutScrollIndicators();
    }, fadeOutDelay);
  };

  const renderPage = (item) => (
    <TouchableScale
      onPress={() => handlePress(item)}
      style={[
        styles.levelContainer,
        styles.lockedLevel,
        item === 1 ? styles.incompleteLevel : null,
        plantLevels.completedLevels.includes(item)
          ? styles.completedLevel
          : null,
        item === plantLevels.completedLevels.length + 1
          ? styles.incompleteLevel
          : null,
      ]}
    >
      <GameText style={styles.levelText}>Level {item}</GameText>
      <View style={styles.iconContainer}>
        {plantLevels.completedLevels.includes(item) && (
          <View style={styles.completedIcon} />
        )}
      </View>
    </TouchableScale>
  );

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <Animated.View
        style={[
          styles.scrollIndicator,
          styles.scrollIndicatorTop,
          { opacity: scrollIndicatorTopOpacity },
        ]}
      >
        <Image source={upIcon} style={{ width: 80, height: 80 }} />
      </Animated.View>
      <ViewPager
        style={styles.viewPager}
        orientation="vertical"
        onPageScroll={handlePageScroll}
        ref={viewPagerRef}
      >
        {Array.from({ length: plantLevels.totalLevels }, (_, i) => i + 1).map(
          (item) => (
            <View key={`level${item}`} style={styles.page}>
              {renderPage(item)}
            </View>
          )
        )}
      </ViewPager>
      <Animated.View
        style={[
          styles.scrollIndicator,
          styles.scrollIndicatorBottom,
          { opacity: scrollIndicatorBottomOpacity },
        ]}
      >
        <Image source={downIcon} style={{ width: 80, height: 80 }} />
      </Animated.View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  scrollIndicator: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollIndicatorTop: {
    top: "32%",
  },
  scrollIndicatorBottom: {
    bottom: "35%",
  },
  backgroundImage: {
    resizeMode: "cover",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  viewPager: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  levelContainer: {
    borderRadius: 15,
    width: "20%",
    aspectRatio: 1, // Ensure it's a square
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 20,
  },
  completedLevel: {
    backgroundColor: "#d4edda",
    opacity: 0.9,
  },
  incompleteLevel: {
    backgroundColor: "#f8d7da",
    opacity: 0.9,
  },
  lockedLevel: {
    backgroundColor: "#808080",
    opacity: 0.9,
  },
  levelText: {
    fontSize: 12,
    textAlign: "center",
    color: "#333",
  },
  iconContainer: {
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  completedIcon: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "green",
  },
});

export default LevelSelectionScreen;
