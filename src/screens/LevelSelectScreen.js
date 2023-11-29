import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import ViewPager from "react-native-pager-view";
import TouchableScale from "react-native-touchable-scale";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import GameText from "../styles/GameText";
import LevelsConfig from "../states/levelsConfig";
import { usePlayerConfig } from "../states/playerConfigContext";

import Oracle from "../components/OracleComponent";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const textSizeBig = RFValue(12);
const textSizeSmall = RFValue(10);

const backgroundImage = require("../assets/backgrounds/misc/level_select.png");
const upIcon = require("../assets/icons/up_icon.png");
const downIcon = require("../assets/icons/down_icon.png");
const levelCompleteIcon = require("../assets/icons/level_icon_complete.png");
const levelLockedIcon = require("../assets/icons/level_icon_locked.png");
const levelUnlocekdIcon = require("../assets/icons/level_icon_unlocked.png");

const LevelSelectionScreen = ({ navigation, route }) => {
  const { hearts, xp, level } = usePlayerConfig();

  const [scrollIndicatorTopOpacity] = useState(new Animated.Value(0.8));
  const [scrollIndicatorBottomOpacity] = useState(new Animated.Value(0.8));

  const viewPagerRef = useRef(null);

   const [swipeTextOpacity, setSwipeTextOpacity] = useState(1);

   useEffect(() => {
     let blinkInterval;
     let blinkCount = 0;

     const startBlinking = () => {
       blinkInterval = setInterval(() => {
         setSwipeTextOpacity((prevOpacity) => (prevOpacity === 0 ? 1 : 0));
         blinkCount++;

         if (blinkCount >= 10) {
           clearInterval(blinkInterval); // Stop blinking after three cycles
         }
       }, 200);
     };

     startBlinking();

     return () => {
       clearInterval(blinkInterval);
       setSwipeTextOpacity(0.8); // Ensure the text is visible after blinking
     };
   }, []);

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
      toValue: 0.8,
      duration: 0,
      useNativeDriver: true,
    }).start();

    Animated.timing(scrollIndicatorBottomOpacity, {
      toValue: 0.8,
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

  // Calculate the index of the latest unlocked level
  const latestUnlockedLevelIndex = Math.max(0, plantLevels.completedLevels.length);

  const { playerConfig } = usePlayerConfig();

const handlePress = (item) => {
  if (hearts > 0) {
    if (plantLevels.completedLevels.includes(item - 1) || item === 1) {
      Alert.alert(
        "Are you ready?",
        "The quiz will begin once you press start.",
        [
          {
            text: "Cancel",
            onPress: () => {
              // User canceled, do nothing
            },
            style: "cancel",
          },
          {
            text: "Start",
            onPress: () => {
              // User confirmed, navigate to the quiz screen
              navigation.navigate("QuizScreen", {
                id: id,
                plant: selectedPlantID,
                level: `level${item}`,
              });
            },
          },
        ],
        { cancelable: false }
      );
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

  const renderPage = (item) => {

     let iconSource;

  if (plantLevels.completedLevels.includes(item)) {
    // If the level is completed
    iconSource = levelCompleteIcon;
  } else if (item <= plantLevels.completedLevels.length + 1) {
    // If the level is unlocked but not completed
    iconSource = levelUnlocekdIcon;
  } else {
    // If the level is locked
    iconSource = levelLockedIcon;
  }
  return (
    <TouchableScale
      onPress={() => handlePress(item)}
      style={[
        styles.levelContainer
      ]}
    >
      <Image source={iconSource} style={{width: "120%", height: "120%"}}></Image>
        <GameText style={styles.levelText}>Level {item}</GameText>
    </TouchableScale>
  );
    };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <Oracle style={styles.oracle} />
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
        initialPage={latestUnlockedLevelIndex}
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
        <GameText
          style={{
            fontSize: textSizeBig,
            color: "#d19c0a",
            textShadowColor: "#000000",
            textShadowRadius: 1,
            textShadowOffset: { width: -2, height: 2 },
            shadowColor: "#000000",
            opacity: swipeTextOpacity,
          }}
        >
          Swipe To Choose Level
        </GameText>
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
  oracle: {
    left: deviceWidth / 2 - 25 - deviceWidth * 0.1,
    top: deviceHeight / 2 - 25 - deviceHeight * 0.075,
    zIndex: 1,
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
  levelText: {
    position: "absolute",
    top: "8%",
    fontSize: textSizeSmall,
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
