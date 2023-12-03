import React from "react";
import requiredXP from "../states/levelUpConfig";
import { usePlayerConfig } from "../states/playerConfigContext";
import { Image } from "react-native";

const XPBar = () => {
  const { xp, level } = usePlayerConfig();

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
    <Image
      source={xpBarImage}
      style={{
        width: 250,
        height: 250,
        resizeMode: "contain",
        position: "absolute",
      }}
    />
  );
};

export default XPBar;
