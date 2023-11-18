export const plants = {
    //list of plants that is avaliable whithin the whole game
    plant1: {
        platID : "1",
        name: "Cactus",
        type: "Succulent",
        colours: ["Green", "Yellow"],
        potID: 1,
        locationID: 1,
        height: 60,
        //bloomingSeason: ["Spring"],
        careIntructions: { //instructions of how to take care the plant
            water: "Water once every two weeks",
            sunlight: "Full sunlight",
            soil: "Well-draining soil",
            temperature: "Warm temperature",
            humidity: "Any",
            fertilising: "Dilluted, low-nitrogen fertiliser"
        },
        challenges: {
            Pests: "Spider mites and mealybugs",
            Sunbrun: "Excessive sunlight"
        },
        health: 100,
        skins: [],
        learned: true,
        difficulty: 0,
        experience: 0,
        level: 1,
        actions: ["Water","Fertilise"],
        progress: 1
    },

    plant2: {
        platID : "2",
        name: "Lucky Bamboo",
        type: "tropical water lily",
        colours: ["Green"],
        potID: 1,
        locationID: 1,
        height: 70,
        //bloomingSeason: ["Spring"],
        careIntructions: {
            water: "Water once every two weeks",
            sunlight: "Moderate sunlight",
            soil: "Well-draining potting mix",
            temperature: "Warm temperature",
            humidity: "Moderate to high",
            fertilising: "Liquid fertiliser"
        },
        challenges: {
            Yellowing: "Yellow leaves caused by over-fertilizating",
            Rottening: "Rooten root if water isn't changed regularly"
        },
        health: 100,
        skins: [],
        learned: false,
        difficulty: 1,
        experience: 0,
        level: 1,
        actions: ["Water","Fertilise"],
        progress: 0
    }
};