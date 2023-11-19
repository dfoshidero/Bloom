export const plants = {
  // Plant 1 details
  plant1: {
    plantID: "1",
    name: "Cactus",
    iconPath: require("../assets/plants/cactus/default/cactus_4.png"),
    type: "Succulent",
    colours: ["Green", "Yellow"],
    potID: 1,
    locationID: 1,
    height: 60,
    careIntructions: {
      Water: "Water once every two weeks",
      Sunlight: "Full sunlight",
      Soil: "Well-draining soil",
      Temperature: "Warm temperature",
      Humidity: "Any",
      Fertilising: "Diluted, low-nitrogen fertiliser",
    },
    challenges: {
      Pests: "Spider mites and mealybugs",
      Sunburn: "Excessive sunlight",
    },
    health: 100,
    learned: true,
    difficulty: 0,
    experience: 0,
    level: "Tutorial",
    actions: ["Water", "Fertilise"],
<<<<<<< HEAD
    progress: 1,
=======
    progress: 1,
>>>>>>> 7a8db3a97bc9e0bcaef2557a71e5c8d00c91d943
    skins: [
      {
        name: "default",
        growth: [
          {
            growthStage: 0,
            imagePath: require("../assets/plants/cactus/default/cactus_1.png"),
          },
          {
            growthStage: 0.33,
            imagePath: require("../assets/plants/cactus/default/cactus_2.png"),
          },
          {
            growthStage: 0.66,
            imagePath: require("../assets/plants/cactus/default/cactus_3.png"),
          },
          {
            growthStage: 1.0,
            imagePath: require("../assets/plants/cactus/default/cactus_4.png"),
          },
        ],
        unlockCondition: null,
      },

      {
        name: "floral",
        growth: [
          {
            growthStage: 0,
            imagePath: require("../assets/plants/cactus/floral_1/cactus_1.png"),
          },
          {
            growthStage: 0.33,
            imagePath: require("../assets/plants/cactus/floral_1/cactus_2.png"),
          },
          {
            growthStage: 0.66,
            imagePath: require("../assets/plants/cactus/floral_1/cactus_3.png"),
          },
          {
            growthStage: 1.0,
            imagePath: require("../assets/plants/cactus/floral_1/cactus_4.png"),
          },
        ],
        unlockCondition: null,
      },
    ],
    selectedSkin: "default",
  },

  // Plant 2 details
  plant2: {
    plantID: "2",
    name: "Lucky Bamboo",
    iconPath: require("../assets/plants/lucky_bamboo/lucky_bamboo_4.png"),
    type: "tropical water lily",
    colours: ["Green"],
    potID: 1,
    locationID: 1,
    height: 70,
    careIntructions: {
      Water: "Water once every two weeks",
      Sunlight: "Moderate sunlight",
      Soil: "Well-draining potting mix",
      Temperature: "Warm temperature",
      Humidity: "Moderate to high",
      Fertilising: "Liquid fertiliser",
    },
    challenges: {
      Yellowing: "Yellow leaves caused by over-fertilizating",
      Rottening: "Rotten root if water isn't changed regularly",
    },
    health: 100,
    learned: true,
    difficulty: 1,
    experience: 0,
    level: "Beginner",
    actions: ["Water", "Fertilise"],
<<<<<<< HEAD
    progress: 1.0,
=======
    progress: 1.0,
>>>>>>> 7a8db3a97bc9e0bcaef2557a71e5c8d00c91d943
    skins: [
      {
        name: "default",
        growth: [
          {
            growthStage: 0,
            imagePath: require("../assets/plants/lucky_bamboo/lucky_bamboo_1.png"),
          },
          {
            growthStage: 0.33,
            imagePath: require("../assets/plants/lucky_bamboo/lucky_bamboo_2.png"),
          },
          {
            growthStage: 0.66,
            imagePath: require("../assets/plants/lucky_bamboo/lucky_bamboo_3.png"),
          },
          {
            growthStage: 1.0,
            imagePath: require("../assets/plants/lucky_bamboo/lucky_bamboo_4.png"),
          },
        ],
        unlockCondition: null,
      },
    ],
    selectedSkin: "default",
  },
};

// Example usage
// const imagePath = plants.getGrowthStageImagePath('1', 0.5);
