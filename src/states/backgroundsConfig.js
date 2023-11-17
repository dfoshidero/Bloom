// backgroundsConfig.js
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const background1Image = require("../assets/backgrounds/1.png");
const background2Image = require("../assets/backgrounds/2.png");
const background3Image = require("../assets/backgrounds/3.png");
const background4Image = require("../assets/backgrounds/4.png");
const background5Image = require("../assets/backgrounds/5.png");

export const backgrounds = {
  background1: {
    name: "Background 1",
    image: background1Image,
    plantPositions: [
      { id: 1, top: 100, left: 50 },
      { id: 2, top: 200, left: 150 },
      { id: 3, top: 300, left: 150 },
      { id: 4, top: 400, left: 150 },
      { id: 5, top: 500, left: 150 },
    ],
  },
  background2: {
    name: "Background 2",
    image: background2Image,
    plantPositions: [
      { id: 1, top: 100, left: 50 },
      { id: 2, top: 200, left: 150 },
      { id: 3, top: 300, left: 150 },
      { id: 4, top: 400, left: 150 },
      { id: 5, top: 500, left: 150 },
    ],
  },
  background3: {
    name: "Background 3",
    image: background3Image,
    plantPositions: [
      { id: 1, top: 100, left: 50 },
      { id: 2, top: 200, left: 150 },
      { id: 3, top: 300, left: 150 },
      { id: 4, top: 400, left: 150 },
      { id: 5, top: 500, left: 150 },
    ],
  },
  background4: {
    name: "Background 4",
    image: background4Image,
    plantPositions: [
      { id: 1, top: screenHeight - 250, left: screenWidth / 2 - 180},
      { id: 2, top: screenHeight - 250, left: screenWidth / 2 - 30},
      { id: 3, top: screenHeight - 250, left: screenWidth / 2 + 120},
      { id: 4, top: screenHeight - 150, left: screenWidth / 2 + 45 },
      { id: 5, top: screenHeight - 150, left: screenWidth / 2 - 105 },
    ],
  },
  background5: {
    name: "Background 5",
    image: background5Image,
    plantPositions: [
      { id: 1, top: 100, left: 50 },
      { id: 2, top: 200, left: 150 },
      { id: 3, top: 300, left: 150 },
      { id: 4, top: 400, left: 150 },
      { id: 5, top: 500, left: 150 },
    ],
  },
};
