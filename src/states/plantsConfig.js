export const plants = {
  // Plant 1 details
  1: {
    plantID: 1,
    name: "Cactus",
    iconPath: require("../assets/plants/cactus/default/cactus_4.png"),
    type: "Succulent",
    colours: ["Green", "Yellow"],
    potID: 1,
    locationID: 1,
    height: 60,
    careInstructions: {
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
    progress: 0,
    quantity: 0,
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
  2: {
    plantID: 2,
    name: "Lucky Bamboo",
    iconPath: require("../assets/plants/lucky_bamboo/lucky_bamboo_4.png"),
    type: "tropical water lily",
    colours: ["Green"],
    potID: 1,
    locationID: 1,
    height: 70,
    careInstructions: {
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
    progress: 0,
    quantity: 0,
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
  3: {
    plantID: 3,
    name: "Snake Plant",
    iconPath: require("../assets/plants/snake_plant/snake_plant_4.png"),
    type: "tropical flower plant",
    colours: ["Green", "Yellow"],
    potID: 1,
    locationID: 1,
    height: 75,
    careInstructions: {
      Water: "Water sparingly, allow soil to dry out completely",
      Sunlight: "Low to bright, indirect light",
      Soil: "Well-draining potting mix",
      Temperature: "Warm temperature, avoid cold drafts",
      Humidity: "Low to moderate",
      Fertilising:
        "Can be fertilised during the growing season with a diluted, balanced fertiliser",
    },
    challenges: {
      Overwatering: "Can lead to root rot",
      Sunburn: "Can scorch leaves if too intense",
    },
    health: 100,
    learned: true,
    difficulty: 1,
    experience: 0,
    level: "Beginner",
    actions: ["Water", "Fertilise"],
    progress: 0,
    quantity: 0,
    skins: [
      {
        name: "default",
        growth: [
          {
            growthStage: 0,
            imagePath: require("../assets/plants/snake_plant/snake_plant_1.png"),
          },
          {
            growthStage: 0.33,
            imagePath: require("../assets/plants/snake_plant/snake_plant_2.png"),
          },
          {
            growthStage: 0.66,
            imagePath: require("../assets/plants/snake_plant/snake_plant_3.png"),
          },
          {
            growthStage: 1.0,
            imagePath: require("../assets/plants/snake_plant/snake_plant_4.png"),
          },
        ],
        unlockCondition: null,
      },
    ],
    selectedSkin: "default",
  },
  4: {
    plantID: 4,
    name: "Dragon Tree",
    iconPath: require("../assets/plants/dragon_tree/dragon_tree_4.png"),
    type: "subtropical tree",
    colours: ["Green", "Red"],
    potID: 1,
    locationID: 1,
    height: 120,
    careInstructions: {
      Water: "Allow top soil to dry out between waterings",
      Sunlight: "Bright, indirect light",
      Soil: "Well-draining potting mix",
      Temperature: "Warm, avoid cold drafts",
      Humidity: "Moderate",
      Fertilising: "Balanced liquid fertilizer monthly during growing season",
    },
    challenges: {
      BrownLeaf: "Indicates overwatering or low humidity",
      Rottening: "From overwatering",
    },
    health: 100,
    learned: true,
    difficulty: 1,
    experience: 0,
    level: "Beginner",
    actions: ["Water", "Fertilise"],
    progress: 0,
    quantity: 0,
    skins: [
      {
        name: "default",
        growth: [
          {
            growthStage: 0,
            imagePath: require("../assets/plants/dragon_tree/dragon_tree_1.png"),
          },
          {
            growthStage: 0.33,
            imagePath: require("../assets/plants/dragon_tree/dragon_tree_2.png"),
          },
          {
            growthStage: 0.66,
            imagePath: require("../assets/plants/dragon_tree/dragon_tree_3.png"),
          },
          {
            growthStage: 1.0,
            imagePath: require("../assets/plants/dragon_tree/dragon_tree_4.png"),
          },
        ],
        unlockCondition: null,
      },
    ],
    selectedSkin: "default",
  },
  5: {
    plantID: 5,
    name: "Maidenhair Fern",
    iconPath: require("../assets/plants/maidenhair_fern/maidenhair_fern_4.png"),
    type: "fern",
    colours: ["Green"],
    potID: 1,
    locationID: 1,
    height: 40,
    careInstructions: {
      Water: "Consistently moist, avoid drying out",
      Sunlight: "Bright, indirect light",
      Soil: "Rich, well-draining potting mix",
      Temperature: "Prefers warmth, avoid cold drafts",
      Humidity: "High",
      Fertilising: "Diluted liquid fertilizer monthly during growing season",
    },
    challenges: {
      DryLeaves: "From low humidity or under-watering",
      Rottening: "From overwatering",
    },
    health: 100,
    learned: true,
    difficulty: 2,
    experience: 0,
    level: "Medium",
    actions: ["Water", "Fertilise"],
    progress: 0,
    quantity: 0,
    skins: [
      {
        name: "default",
        growth: [
          {
            growthStage: 0,
            imagePath: require("../assets/plants/maidenhair_fern/maidenhair_fern_1.png"),
          },
          {
            growthStage: 0.33,
            imagePath: require("../assets/plants/maidenhair_fern/maidenhair_fern_2.png"),
          },
          {
            growthStage: 0.66,
            imagePath: require("../assets/plants/maidenhair_fern/maidenhair_fern_3.png"),
          },
          {
            growthStage: 1.0,
            imagePath: require("../assets/plants/maidenhair_fern/maidenhair_fern_4.png"),
          },
        ],
        unlockCondition: null,
      },
    ],
    selectedSkin: "default",
  },
  6: {
    plantID: 6,
    name: "Nerve Plant",
    iconPath: require("../assets/plants/nerve_plant/nerve_plant_4.png"),
    type: "perennial",
    colours: ["Green", "White", "Pink"],
    potID: 1,
    locationID: 1,
    height: 15,
    careInstructions: {
      Water: "Consistently moist soil",
      Sunlight: "Bright, indirect light",
      Soil: "Well-draining, peat-based mix",
      Temperature: "Warm, avoid cold drafts",
      Humidity: "High",
      Fertilising: "Diluted fertilizer every 4-6 weeks during growing season",
    },
    challenges: {
      Wilting: "From under-watering or low humidity",
      Rottening: "From overwatering",
    },
    health: 100,
    learned: true,
    difficulty: 2,
    experience: 0,
    level: "Medium",
    actions: ["Water", "Fertilise"],
    progress: 0,
    quantity: 0,
    skins: [
      {
        name: "default",
        growth: [
          {
            growthStage: 0,
            imagePath: require("../assets/plants/nerve_plant/nerve_plant_1.png"),
          },
          {
            growthStage: 0.33,
            imagePath: require("../assets/plants/nerve_plant/nerve_plant_2.png"),
          },
          {
            growthStage: 0.66,
            imagePath: require("../assets/plants/nerve_plant/nerve_plant_3.png"),
          },
          {
            growthStage: 1.0,
            imagePath: require("../assets/plants/nerve_plant/nerve_plant_3.png"),
          },
        ],
        unlockCondition: null,
      },
    ],
    selectedSkin: "default",
  },
  7: {
    plantID: 7,
    name: "Aloe Vera",
    iconPath: require("../assets/plants/aloe_vera/aloe_vera_4.png"),
    type: "Succulent, herb, perennial",
    colours: ["Green", "Yellow", "Orange"],
    potID: 1,
    locationID: 1,
    height: 50,
    careInstructions: {
      Water: "Deeply but infrequently, allow soil to dry out",
      Sunlight: "Bright, indirect light",
      Soil: "Well-draining, cactus or succulent mix",
      Temperature: "Prefer warm conditions, protect from frost",
      Humidity: "Can tolerate low humidity",
      Fertilising: "Diluted fertilizer during growing season",
    },
    challenges: {
      RootRot: "From overwatering",
      LeafScorch: "In direct sunlight",
    },
    health: 100,
    learned: true,
    difficulty: 2,
    experience: 0,
    level: "Medium",
    actions: ["Water", "Fertilise"],
    progress: 0,
    quantity: 0,
    skins: [
      {
        name: "default",
        growth: [
          {
            growthStage: 0,
            imagePath: require("../assets/plants/aloe_vera/aloe_vera_1.png"),
          },
          {
            growthStage: 0.33,
            imagePath: require("../assets/plants/aloe_vera/aloe_vera_2.png"),
          },
          {
            growthStage: 0.66,
            imagePath: require("../assets/plants/aloe_vera/aloe_vera_3.png"),
          },
          {
            growthStage: 1.0,
            imagePath: require("../assets/plants/aloe_vera/aloe_vera_4.png"),
          },
        ],
        unlockCondition: null,
      },
    ],
    selectedSkin: "default",
  },
  8: {
    plantID: 8,
    name: "Anthurium",
    iconPath: require("../assets/plants/anthurium/anthurium_4.png"),
    type: "Herbaceous, perennial",
    colours: ["Red", "White", "Pink"],
    potID: 1,
    locationID: 1,
    height: 60,
    careInstructions: {
      Water: "Consistently moist, avoid waterlogging",
      Sunlight: "Bright, indirect light",
      Soil: "Well-draining, rich mix",
      Temperature: "Prefer warm conditions",
      Humidity: "High",
      Fertilising: "Balanced fertilizer every 6-8 weeks",
    },
    challenges: {
      YellowLeaves: "From overwatering",
      BrowningEdges: "From low humidity",
    },
    health: 100,
    learned: true,
    difficulty: 3,
    experience: 0,
    level: "High",
    actions: ["Water", "Fertilise"],
    progress: 0,
    quantity: 0,
    skins: [
      {
        name: "default",
        growth: [
          {
            growthStage: 0,
            imagePath: require("../assets/plants/anthurium/anthurium_1.png"),
          },
          {
            growthStage: 0.33,
            imagePath: require("../assets/plants/anthurium/anthurium_2.png"),
          },
          {
            growthStage: 0.66,
            imagePath: require("../assets/plants/anthurium/anthurium_3.png"),
          },
          {
            growthStage: 1.0,
            imagePath: require("../assets/plants/anthurium/anthurium_4.png"),
          },
        ],
        unlockCondition: null,
      },
    ],
    selectedSkin: "default",
  },
  9: {
    plantID: 9,
    name: "Lemon Tree",
    iconPath: require("../assets/plants/lemon_tree/lemon_tree_4.png"),
    type: "Broadleaf evergreen",
    colours: ["Green", "Yellow"],
    potID: 1,
    locationID: 1,
    height: 180,
    careInstructions: {
      Water: "Evenly moist, well-drained soil",
      Sunlight: "Bright, direct sunlight",
      Soil: "Well-draining, slightly acidic",
      Temperature: "Warm, protect from cold",
      Humidity: "Moderate",
      Fertilising: "Citrus-specific fertilizer during growing season",
    },
    challenges: {
      YellowLeaves: "Nutrient deficiency or water issues",
      Pests: "Spider mites and scale insects",
    },
    health: 100,
    learned: true,
    difficulty: 3,
    experience: 0,
    level: "High",
    actions: ["Water", "Fertilise"],
    progress: 0,
    quantity: 0,
    skins: [
      {
        name: "default",
        growth: [
          {
            growthStage: 0,
            imagePath: require("../assets/plants/lemon_tree/lemon_tree_1.png"),
          },
          {
            growthStage: 0.33,
            imagePath: require("../assets/plants/lemon_tree/lemon_tree_2.png"),
          },
          {
            growthStage: 0.66,
            imagePath: require("../assets/plants/lemon_tree/lemon_tree_3.png"),
          },
          {
            growthStage: 1.0,
            imagePath: require("../assets/plants/lemon_tree/lemon_tree_4.png"),
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
