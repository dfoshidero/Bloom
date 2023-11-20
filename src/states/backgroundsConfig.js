// backgroundsConfig.js

const background1Image = require("../assets/backgrounds/1.png");
const background2Image = require("../assets/backgrounds/2_edited.png");
const background3Image = require("../assets/backgrounds/3.png");
const background4Image = require("../assets/backgrounds/4.png");

export const backgrounds = {
  background1: {
    name: "Background 1",
    image: background1Image,
    plantPositions: [
      { id: 1, bottom: "25%", left: "6.5%" },
      { id: 2, bottom: "25%", left: "43%" },
      { id: 3, bottom: "25%", left: "78.5%" },
      { id: 4, bottom: "10%", left: "25%" },
      { id: 5, bottom: "10%", left: "61%" },
    ],
  },
  background2: {
    name: "Background 2",
    image: background2Image,
    plantPositions: [
      { id: 1, bottom: "30.7%", left: "6.5%" },
      { id: 2, bottom: "18%", left: "43%" },
      { id: 3, bottom: "30.7%", left: "78.5%" },
      { id: 4, bottom: "10%", left: "15%" },
      { id: 5, bottom: "10%", left: "71%" },
    ],
  },
  background3: {
    name: "Background 3",
    image: background3Image,
    plantPositions: [
      { id: 1, bottom: "25%", left: "6.5%" },
      { id: 2, bottom: "25%", left: "43%" },
      { id: 3, bottom: "25%", left: "78.5%" },
      { id: 4, bottom: "10%", left: "25%" },
      { id: 5, bottom: "10%", left: "61%" },
    ],
  },
  background4: {
    name: "Background 4",
    image: background4Image,
    plantPositions: [
      { id: 1, bottom: "25%", left: "6.5%" },
      { id: 2, bottom: "25%", left: "43%" },
      { id: 3, bottom: "25%", left: "78.5%" },
      { id: 4, bottom: "10%", left: "25%" },
      { id: 5, bottom: "10%", left: "61%" },
    ],
  },
};
