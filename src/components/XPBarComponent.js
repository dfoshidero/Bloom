import React, { useEffect, useState } from "react";
import requiredXP from "../states/levelUpConfig";
import { usePlayerConfig } from "../states/playerConfigContext";
import { Image, View, StyleSheet, Animated } from "react-native";
import GameText from "../styles/GameText";
import TouchableScale from "react-native-touchable-scale";

const XPBar = ({ animateLevelUp }) => {
  const { xp, level } = usePlayerConfig();
  const [currentImage, setCurrentImage] = useState(0);
  const [displayLevel, setDisplayLevel] = useState(level);

  const lvlImage = require("../assets/icons/xp/lvl_container.png");
  const xpImages = [
    require("../assets/icons/xp/0.png"),
    require("../assets/icons/xp/10.png"),
    require("../assets/icons/xp/30.png"),
    require("../assets/icons/xp/50.png"),
    require("../assets/icons/xp/70.png"),
    require("../assets/icons/xp/90.png"),
  ];

  useEffect(() => {
    if (animateLevelUp) {
      setDisplayLevel(level - 1);
      setCurrentImage(0); // Initialize the current image to the first one in the array
      let loopCount = 0;
      const maxLoops = 28; // Number of loops before stopping
      let delay = 25; // Initial delay time

      const animate = () => {
        setCurrentImage((prevImage) => {
          const nextImage = (prevImage + 1) % xpImages.length;

          // Check if it's time to stop the animation
          if (loopCount >= maxLoops && nextImage === 0) {
            setDisplayLevel(level); // Update the level at the end of the animation
            return xpImages.length - 1; // Ensure it ends on the last image
          }

          if (loopCount === maxLoops) {
            setDisplayLevel(level);
          }

          return nextImage;
        });

        loopCount += 1;

        // Gradually increase the delay
        if (loopCount < maxLoops) {
          delay *= 1.1; // Increase delay by 10% each loop
        }

        if (loopCount <= maxLoops) {
          setTimeout(animate, delay);
        }
      };

      animate();

      // Clean up function
      return () => clearTimeout(animate);
    } else {
      // For non-animated, set the current image based on XP percentage
      setCurrentImage(getImageIndex());
    }
  }, [animateLevelUp, level, xpImages.length, xp]);

  const getCurrentLevelXP = () => requiredXP[level]?.xpRequired || 0;
  const getNextLevelXP = () =>
    requiredXP[level + 1]?.xpRequired ||
    requiredXP[level]?.xpRequired ||
    Infinity;

  const xpPercentage =
    ((xp - getCurrentLevelXP()) / (getNextLevelXP() - getCurrentLevelXP())) *
    100;

  const getImageIndex = () => {
    if (xpPercentage < 10) return 0;
    else if (xpPercentage < 30) return 1;
    else if (xpPercentage < 50) return 2;
    else if (xpPercentage < 70) return 3;
    else if (xpPercentage < 90) return 4;
    else return 5;
  };

  return (
    <TouchableScale
      style={styles.touchableScale}
      onPressIn={() => {
        // Logic for onPressIn
      }}
    >
      {animateLevelUp ? (
        <>
          <Animated.Image
            source={xpImages[currentImage]}
            style={[
              styles.xpBarImageAnimated
            ]}
          />
          <View style={styles.textContainer}>
            <Image source={lvlImage} style={styles.backgroundImage} />
            <GameText style={styles.text}>L{displayLevel}</GameText>
          </View>
        </>
      ) : (
        <>
          <Image source={xpImages[currentImage]} style={styles.xpBarImage} />
          <View style={styles.textContainer}>
            <Image source={lvlImage} style={styles.backgroundImage} />
            <GameText style={styles.text}>L{level}</GameText>
          </View>
        </>
      )}
    </TouchableScale>
  );
};

const styles = StyleSheet.create({
  touchableScale: {
    width: 250, // Adjust as needed
    height: 250, // Adjust as needed
    alignItems: "center",
    justifyContent: "center",
  },
  xpBarImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  xpBarImageAnimated: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    shadowColor: "green", // Color of the glow
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1, // Opacity of the glow
    shadowRadius: 10, // Radius of the glow
  },
  textContainer: {
    position: "absolute",
    bottom: -0,
    width: 32, // Width of the circular border
    height: 32, // Height of the circular border
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 12,
    color: "green",
    top: 3.5,
    left: 1,
    textShadowColor: "darkgreen",
    textShadowRadius: 1,
    textShadowOffset: { width: -1, height: 1 },
  },
  backgroundImage: {
    position: "absolute",
    width: 55,
    height: 55,
    borderRadius: 10,
  },
});

export default XPBar;
