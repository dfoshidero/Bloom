export const plants = {
  //list of plants that is avaliable whithin the whole game
  plant1: {
    plantID: "1",
    name: "Cactus",
    icon: "path_to_plant_icon",
    type: "Succulent",
    colours: ["Green", "Yellow"],
    potID: 1,
    locationID: 1,
    height: 60,
    careIntructions: {
      //instructions of how to take care the plant
      water: "Water once every two weeks",
      sunlight: "Full sunlight",
      soil: "Well-draining soil",
      temperature: "Warm temperature",
      humidity: "Any",
      fertilising: "Dilluted, low-nitrogen fertiliser",
    },
    challenges: {
      Pests: "Spider mites and mealybugs",
      Sunbrun: "Excessive sunlight",
    },
    health: 100,
    learned: true,
    difficulty: 0,
    experience: 0,
    level: "Tutorial",
    actions: ["Water", "Fertilise"],
    progress: 1,
    //Skins and growth images for each plant
    skins: [
      {
        name: "default",
        growth: [
          { growthStage: 1, imagePath: "path_to_image" },
          { growthStage: 2, imagePath: "path_to_image" },
          { growthStage: 3, imagePath: "path_to_image" },
          { growthStage: 4, imagePath: "path_to_image" },
        ],
        unlockCondition: null,
      },
    ],
  },

  plant2: {
    plantID: "2",
    name: "Lucky Bamboo",
    icon: "path_to_plant_icon",
    type: "tropical water lily",
    colours: ["Green"],
    potID: 1,
    locationID: 1,
    height: 70,
    careIntructions: {
      water: "Water once every two weeks",
      sunlight: "Moderate sunlight",
      soil: "Well-draining potting mix",
      temperature: "Warm temperature",
      humidity: "Moderate to high",
      fertilising: "Liquid fertiliser",
    },
    challenges: {
      Yellowing: "Yellow leaves caused by over-fertilizating",
      Rottening: "Rooten root if water isn't changed regularly",
    },
    health: 100,
    learned: false,
    difficulty: 1,
    experience: 0,
    level: "Beginner",
    actions: ["Water", "Fertilise"],
    progress: 0,
    skins: [
      {
        name: "default",
        growth: [
          { growthStage: 1, imagePath: "path_to_image" },
          { growthStage: 2, imagePath: "path_to_image" },
          { growthStage: 3, imagePath: "path_to_image" },
          { growthStage: 4, imagePath: "path_to_image" },
        ],
        unlockCondition: null,
      },
    ],
  },
};
