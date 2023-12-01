// backgroundsConfig.js

const background1Image = require("../assets/backgrounds/1.png");
const background2Image = require("../assets/backgrounds/2.png");
const background3Image = require("../assets/backgrounds/3.png");
const background4Image = require("../assets/backgrounds/4.png");

export const backgrounds = {
  background1: {
    id: 1,
    name: "Background 1",
    image: background1Image,
    levelRequired: 1,
    plantPositions: [
      { id: 101, bottom: "25%", left: "6.5%" },
      { id: 102, bottom: "25%", left: "43%" },
      { id: 103, bottom: "25%", left: "78.5%" },
      { id: 104, bottom: "10%", left: "25%" },
      { id: 105, bottom: "10%", left: "61%" },
    ],
  },
  background2: {
    id: 2,
    name: "Background 2",
    image: background2Image,
    levelRequired: 2,
    plantPositions: [
      { id: 201, bottom: "30.7%", left: "6.5%" },
      { id: 202, bottom: "18%", left: "43%" },
      { id: 203, bottom: "30.7%", left: "78.5%" },
      { id: 204, bottom: "10%", left: "15%" },
      { id: 205, bottom: "10%", left: "71%" },
    ],
  },
  background3: {
    id: 3,
    name: "Background 3",
    image: background3Image,
    levelRequired: 5,
    plantPositions: [
      { id: 301, bottom: "25%", left: "6.5%" },
      { id: 302, bottom: "25%", left: "43%" },
      { id: 303, bottom: "25%", left: "78.5%" },
      { id: 304, bottom: "10%", left: "25%" },
      { id: 305, bottom: "10%", left: "61%" },
    ],
  },
  background4: {
    id: 4,
    name: "Background 4",
    image: background4Image,
    levelRequired: 8,
    plantPositions: [
      { id: 401, bottom: "25%", left: "6.5%" },
      { id: 402, bottom: "25%", left: "43%" },
      { id: 403, bottom: "25%", left: "78.5%" },
      { id: 404, bottom: "10%", left: "25%" },
      { id: 405, bottom: "10%", left: "61%" },
    ],
  },
};
