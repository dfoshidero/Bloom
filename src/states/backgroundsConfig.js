// backgroundsConfig.js
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const background1Image = require("../assets/backgrounds/1.png");
const background2Image = require("../assets/backgrounds/2_edited.png");
const background3Image = require("../assets/backgrounds/3.png");
const background4Image = require("../assets/backgrounds/4.png");

export const backgrounds = {
  background1: {
    name: "Background 1",
    image: background1Image,
    plantPositions: [
      { id: 1, bottom: 200, left: screenWidth / 2 - 180 },
      { id: 2, bottom: 200, left: screenWidth / 2 - 30 },
      { id: 3, bottom: 200, left: screenWidth / 2 + 120 },
      { id: 4, bottom: 100, left: screenWidth / 2 + 45 },
      { id: 5, bottom: 100, left: screenWidth / 2 - 105 },
    ],
  },
  background2: {
    name: "Background 2",
    image: background2Image,
    plantPositions: [
      { id: 1, bottom: 265, left: screenWidth / 2 - 180 },
      { id: 2, bottom: 150, left: screenWidth / 2 - 30 },
      { id: 3, bottom: 265, left: screenWidth / 2 + 120 },
      { id: 4, bottom: 80, left: screenWidth / 2 + 90 },
      { id: 5, bottom: 80, left: screenWidth / 2 - 150 },
    ],
  },
  background3: {
    name: "Background 3",
    image: background3Image,
    plantPositions: [
      { id: 1, bottom: 200, left: screenWidth / 2 - 180 },
      { id: 2, bottom: 200, left: screenWidth / 2 - 30 },
      { id: 3, bottom: 200, left: screenWidth / 2 + 120 },
      { id: 4, bottom: 100, left: screenWidth / 2 + 45 },
      { id: 5, bottom: 100, left: screenWidth / 2 - 105 },
    ],
  },
  background4: {
    name: "Background 4",
    image: background4Image,
    plantPositions: [
      { id: 1, bottom: 200, left: screenWidth / 2 - 180 },
      { id: 2, bottom: 200, left: screenWidth / 2 - 30 },
      { id: 3, bottom: 200, left: screenWidth / 2 + 120 },
      { id: 4, bottom: 100, left: screenWidth / 2 + 45 },
      { id: 5, bottom: 100, left: screenWidth / 2 - 105 },
    ],
  },
};
