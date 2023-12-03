import React from "react";
import requiredXP from "../states/levelUpConfig";
import { usePlayerConfig } from "../states/playerConfigContext";
import { Image, View, StyleSheet } from "react-native";
import GameText from "../styles/GameText";
import TouchableScale from "react-native-touchable-scale";

const XPBar = () => {
  const { xp, level } = usePlayerConfig();

  const lvlImage = require("../assets/icons/xp/lvl_container.png");
  const xpImages = [
    require("../assets/icons/xp/0.png"),
    require("../assets/icons/xp/10.png"),
    require("../assets/icons/xp/30.png"),
    require("../assets/icons/xp/50.png"),
    require("../assets/icons/xp/70.png"),
    require("../assets/icons/xp/90.png"),
  ];

  const getCurrentLevelXP = () => requiredXP[level]?.xpRequired || 0;
  const getNextLevelXP = () =>
    requiredXP[level + 1]?.xpRequired ||
    requiredXP[level]?.xpRequired ||
    Infinity;

  const xpPercentage =
    ((xp - getCurrentLevelXP()) / (getNextLevelXP() - getCurrentLevelXP())) *
    100;

  let imageIndex;
  if (xpPercentage < 10) imageIndex = 0;
  else if (xpPercentage < 30) imageIndex = 1;
  else if (xpPercentage < 50) imageIndex = 2;
  else if (xpPercentage < 70) imageIndex = 3;
  else if (xpPercentage < 90) imageIndex = 4;
  else imageIndex = 5;

  const xpBarImage = xpImages[imageIndex];

  return (
    <View style={{ alignItems: "center" }}>
      <TouchableScale style={styles.touchableScale}>
        <Image source={xpBarImage} style={styles.xpBarImage} />
        <View style={styles.textContainer}>
          <Image source={lvlImage} style={styles.backgroundImage} />
          <GameText style={styles.text}>L{level}</GameText>
        </View>
      </TouchableScale>
    </View>
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
