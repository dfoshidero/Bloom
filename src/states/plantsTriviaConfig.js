const plantsTriviaConfig = {
  1: {
    level1: {
      instructions:
        "Cacti thrive in well-draining soil, prefer bright, indirect sunlight, and need fertilization during the growing season. Overwatering can harm cacti; low light and clay soil are unsuitable.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What is the basic soil type for a cactus?",
          answers: [
            { text: "Well-draining mix", isCorrect: true },
            { text: "Clay soil", isCorrect: false },
            { text: "Peat moss mix", isCorrect: false },
            { text: "Sandy loam", isCorrect: false },
          ],
        },
        {
          question: "What kind of light do cacti prefer?",
          answers: [
            { text: "Low light conditions", isCorrect: false },
            { text: "Complete darkness", isCorrect: false },
            { text: "Bright, indirect sunlight", isCorrect: true },
            { text: "Direct, midday sunlight", isCorrect: false },
          ],
        },
        {
          question: "Is it necessary to fertilize a cactus?",
          answers: [
            { text: "No, never", isCorrect: false },
            { text: "Yes, during the growing season", isCorrect: true },
            { text: "Year-round", isCorrect: false },
            { text: "Only in winter", isCorrect: false },
          ],
        },
      ],
    },
    level2: {
      instructions:
        "Cacti flourish in soil with good drainage, needing weekly watering in summer. The ideal temperature range is 65°F to 80°F, and overwatering manifests as soft, discolored spots.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How often should cacti be watered in summer?",
          answers: [
            { text: "Once a week", isCorrect: true },
            { text: "Every day", isCorrect: false },
            { text: "Twice a month", isCorrect: false },
            { text: "When the soil is completely dry", isCorrect: false },
          ],
        },
        {
          question: "What is the best temperature range for most cacti?",
          answers: [
            { text: "Below 50°F (10°C)", isCorrect: false },
            { text: "85°F to 100°F (29°C to 38°C)", isCorrect: false },
            { text: "40°F to 60°F (4°C to 15°C)", isCorrect: false },
            { text: "65°F to 80°F (18°C to 27°C)", isCorrect: true },
          ],
        },
        {
          question: "What are the signs of overwatering in cacti?",
          answers: [
            { text: "Dry, peeling skin", isCorrect: false },
            { text: "Soft, discolored spots", isCorrect: true },
            { text: "Rapid growth", isCorrect: false },
            { text: "Dull color", isCorrect: false },
          ],
        },
      ],
    },
    level3: {
      instructions:
        "Optimal cactus planting requires well-draining pots, and successful propagation is accomplished by using cuttings or offsets. Ensuring cactus well-being involves avoiding sealed containers and water submersion.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What kind of potting is ideal for a cactus?",
          answers: [
            { text: "A sealed pot to retain moisture", isCorrect: false },
            { text: "A deep, narrow pot", isCorrect: false },
            { text: "A pot with good drainage", isCorrect: true },
            { text: "A pot without any holes", isCorrect: false },
          ],
        },
        {
          question: "How can you propagate a cactus effectively?",
          answers: [
            { text: "By submerging it in water", isCorrect: false },
            { text: "Using cuttings or offsets", isCorrect: true },
            { text: "Planting its leaves", isCorrect: false },
            { text: "Through leaf layering", isCorrect: false },
          ],
        },
        {
          question: "What is bad for cactus well-being?",
          answers: [
            { text: "Water submersion", isCorrect: true },
            { text: "Bright, indirect sunlight", isCorrect: false },
            { text: "Well-draining mix soil", isCorrect: false },
            { text: "Bright, indirect sunlight", isCorrect: false },
          ],
        },
      ],
    },
  },
  2: {
    level1: {
      instructions:
          "Lucky Bamboo thrives in filtered or distilled water and indirect sunlight. It prefers a room temperature environment and should be kept away from direct sunlight. Changing water every week helps prevent rot.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What type of water is best for Lucky Bamboo?",
          answers: [
            { text: "Tap water", isCorrect: false },
            { text: "Saltwater", isCorrect: false },
            { text: "Filtered or distilled water", isCorrect: true },
            { text: "Boiled water", isCorrect: false },
          ],
        },
        {
          question: "What light conditions does Lucky Bamboo prefer?",
          answers: [
            { text: "Indirect sunlight", isCorrect: true },
            { text: "Direct, bright sunlight", isCorrect: false },
            { text: "Complete darkness", isCorrect: false },
            { text: "Artificial light only", isCorrect: false },
          ],
        },
        {
          question: "How often should you change the water for Lucky Bamboo?",
          answers: [
            { text: "Once a month", isCorrect: false },
            { text: "Every week", isCorrect: true },
            { text: "Every day", isCorrect: false },
            { text: "Never", isCorrect: false },
          ],
        },
      ],
    },
    level2: {
      instructions:
          "Lucky Bamboo can be grown in water or soil, but it must be well-drained. Yellow leaves indicate too much sunlight or fertilizer. It can be propagated by cutting the stem and placing it in water.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "In which of the following can Lucky Bamboo be grown?",
          answers: [
            { text: "Only in water", isCorrect: false },
            { text: "Only in soil", isCorrect: false },
            { text: "Both water and soil", isCorrect: true },
            { text: "Only in sand", isCorrect: false },
          ],
        },
        {
          question: "What does yellowing leaves on Lucky Bamboo indicate?",
          answers: [
            { text: "Not enough water", isCorrect: false },
            { text: "Overwatering", isCorrect: false },
            { text: "Plant is healthy", isCorrect: false },
            { text: "Too much sunlight or fertilizer", isCorrect: true },
          ],
        },
        {
          question: "How can you propagate Lucky Bamboo?",
          answers: [
            { text: "Planting its seeds", isCorrect: false },
            { text: "Leaf cuttings", isCorrect: false },
            { text: "Cutting the stem and placing it in water", isCorrect: true },
            { text: "It cannot be propagated", isCorrect: false },
          ],
        },
      ],
    },
    level3: {
      instructions:
          "Lucky Bamboo symbolizes good fortune in Feng Shui. It's important to use clean containers and change water regularly to prevent algae. Braided or twisted forms are popular but require skilled cultivation.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What does Lucky Bamboo symbolize in Feng Shui?",
          answers: [
            {text: "Love", isCorrect: false},
            {text: "Good fortune", isCorrect: true},
            {text: "Health", isCorrect: false},
            {text: "Wealth", isCorrect: false},
          ],
        },
        {
          question: "How can you prevent algae growth in Lucky Bamboo?",
          answers: [
            {text: "Use clean containers and change water regularly", isCorrect: true},
            {text: "Place in direct sunlight", isCorrect: false},
            {text: "Use tap water", isCorrect: false},
            {text: "Add fertilizer weekly", isCorrect: false},
          ],
        },
        {
          question: "What is special about braided Lucky Bamboo?",
          answers: [
            {text: "Grows faster", isCorrect: false},
            {text: "Needs less water", isCorrect: false},
            {text: "Does not require additional skills", isCorrect: false},
            {text: "Requires skilled cultivation", isCorrect: true},
          ],
        },
      ],
    },
    level4: {
      instructions:
          "Advanced care for Lucky Bamboo includes understanding its growth pattern, the significance of the number of stalks, and recognizing common issues. It's sensitive to chemicals in water and requires balanced fertilization.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What is the significance of the number of stalks in Lucky Bamboo arrangements?",
          answers: [
            { text: "No significance, purely aesthetic", isCorrect: false },
            { text: "Different numbers symbolize different aspects like wealth, happiness, or love", isCorrect: true },
            { text: "More stalks mean better air purification", isCorrect: false },
            { text: "Regulates the plant’s growth rate", isCorrect: false },
          ],
        },
        {
          question: "Why is it important to use chemical-free water for Lucky Bamboo?",
          answers: [
            { text: "It alters the color of the stalks", isCorrect: false },
            { text: "It affects the taste of the plant", isCorrect: false },
            { text: "Chemicals in water can damage the plant", isCorrect: true },
            { text: "Lucky Bamboo prefers salty water", isCorrect: false },
          ],
        },
        {
          question: "What should be considered when fertilizing Lucky Bamboo?",
          answers: [
            { text: "Fertilizing is not necessary", isCorrect: false },
            { text: "Using a balanced fertilizer sparingly", isCorrect: true },
            { text: "Using strong fertilizers frequently", isCorrect: false },
            { text: "Only organic fertilizers should be used", isCorrect: false },
          ],
        },
        {
          question: "How does Lucky Bamboo typically grow?",
          answers: [
            { text: "In a spiral pattern naturally", isCorrect: false },
            { text: "Horizontally along the surface", isCorrect: false },
            { text: "Straight upwards, with leaves sprouting from the top", isCorrect: true },
            { text: "In a branching pattern like a tree", isCorrect: false },
          ],
        },
      ],
    },
  },
  3: {
    level1: {
      instructions:
          "Snake Plants prefer indirect light and can tolerate low light. They require well-draining soil and infrequent watering, as overwatering can cause root rot. They are known for their air-purifying abilities.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What type of light is best for Snake Plants?",
          answers: [
            { text: "Direct, bright sunlight", isCorrect: false },
            { text: "Indirect light", isCorrect: true },
            { text: "Complete darkness", isCorrect: false },
            { text: "Frequent changes between light and dark", isCorrect: false },
          ],
        },
        {
          question: "What is a common mistake in watering Snake Plants?",
          answers: [
            { text: "Underwatering", isCorrect: false },
            { text: "Using cold water", isCorrect: false },
            { text: "Watering during the day", isCorrect: false },
            { text: "Overwatering", isCorrect: true },
          ],
        },
        {
          question: "What is one of the key benefits of having a Snake Plant?",
          answers: [
            { text: "Air purification", isCorrect: true },
            { text: "Repels insects", isCorrect: false },
            { text: "Produces flowers", isCorrect: false },
            { text: "Requires no light", isCorrect: false },
          ],
        },
      ],
    },
    level2: {
      instructions:
          "Snake Plants prefer dry conditions and can be watered every 2-6 weeks, depending on light and temperature. They thrive in temperatures between 60°F to 80°F and should not be exposed to temperatures below 50°F.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How often should Snake Plants be watered?",
          answers: [
            { text: "Daily", isCorrect: false },
            { text: "Once a month", isCorrect: false },
            { text: "Every 2-6 weeks", isCorrect: true },
            { text: "Twice a week", isCorrect: false },
          ],
        },
        {
          question: "What temperature range is ideal for Snake Plants?",
          answers: [
            { text: "Below 50°F (10°C)", isCorrect: false },
            { text: "60°F to 80°F (15°C to 27°C)", isCorrect: true },
            { text: "85°F to 100°F (29°C to 38°C)", isCorrect: false },
            { text: "30°F to 50°F (−1°C to 10°C)", isCorrect: false },
          ],
        },
        {
          question: "What happens if a Snake Plant is exposed to temperatures below 50°F?",
          answers: [
            { text: "It will grow faster", isCorrect: false },
            { text: "It changes color", isCorrect: false },
            { text: "It will need more water", isCorrect: false },
            { text: "It may become damaged or die", isCorrect: true },
          ],
        },
      ],
    },
    level3: {
      instructions:
          "Snake Plants can be propagated from leaf cuttings or division and prefer loose, well-draining potting mix. They can help remove toxins like formaldehyde from the air. Overexposure to direct sunlight can scorch their leaves.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How can Snake Plants be propagated?",
          answers: [
            { text: "Leaf cuttings or division", isCorrect: true },
            { text: "Seeds", isCorrect: false },
            { text: "Spore dispersal", isCorrect: false },
            { text: "Stem cuttings", isCorrect: false },
          ],
        },
        {
          question: "What type of potting mix is best for Snake Plants?",
          answers: [
            { text: "Heavy, clay-based soil", isCorrect: false },
            { text: "Loose, well-draining mix", isCorrect: true },
            { text: "Waterlogged soil", isCorrect: false },
            { text: "Sandy soil with no nutrients", isCorrect: false },
          ],
        },
        {
          question: "What is a risk of placing a Snake Plant in direct sunlight?",
          answers: [
            { text: "It will attract pests", isCorrect: false },
            { text: "The plant will grow too rapidly", isCorrect: false },
            { text: "Scorching the leaves", isCorrect: true },
            { text: "It will flower excessively", isCorrect: false },
          ],
        },
      ],
    },
    level4: {
      instructions:
          "Snake Plants are known for their resilience and can survive in low light but grow best in bright, indirect light. They have a variety of leaf shapes and colors, and while slow-growing, they can reach impressive heights.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What is a notable feature of Snake Plant leaves?",
          answers: [
            { text: "They are soft and fragile", isCorrect: false },
            { text: "Variety in shapes and colors", isCorrect: true },
            { text: "They change color seasonally", isCorrect: false },
            { text: "They are small and round", isCorrect: false },
          ],
        },
        {
          question: "How do Snake Plants typically grow in low light conditions?",
          answers: [
            { text: "They quickly wilt and die", isCorrect: false },
            { text: "Their leaves turn yellow", isCorrect: false },
            { text: "They need more water", isCorrect: false },
            { text: "They can survive but grow slowly", isCorrect: true },
          ],
        },
        {
          question: "What can be said about the growth rate of Snake Plants?",
          answers: [
            { text: "They grow extremely fast", isCorrect: false },
            { text: "They are slow-growing", isCorrect: true },
            { text: "They only grow in summer", isCorrect: false },
            { text: "They don't grow after reaching maturity", isCorrect: false },
          ],
        },
      ],
    },
  },
  4: {
    level1: {
      instructions:
          "Dragon Trees prefer bright, indirect sunlight and are sensitive to overwatering. They thrive in well-drained soil and should be watered when the topsoil is dry. They are effective in removing toxins from the air.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What type of light conditions are best for Dragon Trees?",
          answers: [
            { text: "Direct, bright sunlight", isCorrect: false },
            { text: "Bright, indirect sunlight", isCorrect: true },
            { text: "Low light conditions", isCorrect: false },
            { text: "Complete darkness", isCorrect: false },
          ],
        },
        {
          question: "When should you water a Dragon Tree?",
          answers: [
            { text: "Daily", isCorrect: false },
            { text: "Once a month", isCorrect: false },
            { text: "Constantly keep the soil wet", isCorrect: false },
            { text: "When the topsoil is dry", isCorrect: true },
          ],
        },
        {
          question: "What is a benefit of having a Dragon Tree?",
          answers: [
            { text: "Air purification", isCorrect: true },
            { text: "Natural insect repellent", isCorrect: false },
            { text: "Produces edible fruit", isCorrect: false },
            { text: "Needs no sunlight", isCorrect: false },
          ],
        },
      ],
    },
    level2: {
      instructions:
          "Dragon Trees prefer a humid environment but can adapt to less humid conditions. They should be fertilized every two weeks in the growing season. Browning leaf tips may indicate low humidity or overexposure to fluoride.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How often should Dragon Trees be fertilized?",
          answers: [
            { text: "Year-round", isCorrect: false },
            { text: "Every two weeks in the growing season", isCorrect: true },
            { text: "Once a year", isCorrect: false },
            { text: "Never", isCorrect: false },
          ],
        },
        {
          question: "What might cause browning leaf tips on a Dragon Tree?",
          answers: [
            { text: "Too much sunlight", isCorrect: false },
            { text: "Overwatering", isCorrect: false },
            { text: "Pest infestation", isCorrect: false },
            { text: "Low humidity or fluoride exposure", isCorrect: true },
          ],
        },
        {
          question: "What type of environment do Dragon Trees prefer?",
          answers: [
            { text: "Dry and arid", isCorrect: false },
            { text: "Humid", isCorrect: true },
            { text: "Cold and damp", isCorrect: false },
            { text: "Variable humidity", isCorrect: false },
          ],
        },
      ],
    },
    level3: {
      instructions:
          "Dragon Trees can be easily propagated through stem cuttings. They are slow-growing plants and can reach significant heights indoors. It’s important to use non-fluoridated water to avoid leaf tip burn.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How can Dragon Trees be propagated?",
          answers: [
            { text: "Seeds", isCorrect: false },
            { text: "Stem cuttings", isCorrect: true },
            { text: "Leaf cuttings", isCorrect: false },
            { text: "Division", isCorrect: false },
          ],
        },
        {
          question: "What is the growth rate of Dragon Trees?",
          answers: [
            { text: "Fast-growing", isCorrect: false },
            { text: "Medium growth rate", isCorrect: false },
            { text: "Does not grow after reaching maturity", isCorrect: false },
            { text: "Slow-growing", isCorrect: true },
          ],
        },
        {
          question: "Why should you avoid using fluoridated water for Dragon Trees?",
          answers: [
            { text: "It can cause leaf tip burn", isCorrect: true },
            { text: "It stunts the plant's growth", isCorrect: false },
            { text: "It attracts pests", isCorrect: false },
            { text: "It changes the leaf color", isCorrect: false },
          ],
        },
      ],
    },
    level4: {
      instructions:
          "The Dragon Tree is known for its striking appearance, with long, slender leaves and a woody trunk. It's important to avoid repotting too frequently. The plant can be sensitive to chemicals in tap water.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What is a distinctive feature of the Dragon Tree’s appearance?",
          answers: [
            { text: "Large, broad leaves", isCorrect: false },
            { text: "Vines and tendrils", isCorrect: false },
            { text: "Long, slender leaves and a woody trunk", isCorrect: true },
            { text: "Colorful flowers", isCorrect: false },
          ],
        },
        {
          question: "How often should you repot a Dragon Tree?",
          answers: [
            { text: "Every month", isCorrect: false },
            { text: "Once a year", isCorrect: false },
            { text: "Every two years", isCorrect: false },
            { text: "Only when necessary, as they don't like frequent repotting", isCorrect: true },
          ],
        },
        {
          question: "Why might a Dragon Tree react poorly to tap water?",
          answers: [
            { text: "Sensitivity to chemicals in the water", isCorrect: true },
            { text: "Prefers dry soil conditions", isCorrect: false },
            { text: "Needs distilled water only", isCorrect: false },
            { text: "Water temperature is usually too low", isCorrect: false },
          ],
        },
      ],
    }
  },
  5: {
    level1: {
      instructions:
          "Maidenhair Ferns thrive in moist, well-drained soil and high humidity. They prefer indirect, filtered sunlight and should be kept away from direct sunlight. Regular misting helps maintain humidity.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What soil condition is best for Maidenhair Ferns?",
          answers: [
            { text: "Dry, sandy soil", isCorrect: false },
            { text: "Moist, well-drained soil", isCorrect: true },
            { text: "Waterlogged soil", isCorrect: false },
            { text: "Hard, clay soil", isCorrect: false },
          ],
        },
        {
          question: "What type of light do Maidenhair Ferns prefer?",
          answers: [
            { text: "Direct, bright sunlight", isCorrect: false },
            { text: "Complete darkness", isCorrect: false },
            { text: "Indirect, filtered sunlight", isCorrect: true },
            { text: "Fluctuating light conditions", isCorrect: false },
          ],
        },
        {
          question: "How can you help maintain the right humidity for Maidenhair Ferns?",
          answers: [
            { text: "Placing in direct sunlight", isCorrect: false },
            { text: "Keeping the soil dry", isCorrect: false },
            { text: "Regular misting", isCorrect: true },
            { text: "Using a dehumidifier", isCorrect: false },
          ],
        },
      ],
    },
    level2: {
      instructions:
          "Maidenhair Ferns should be watered when the top inch of soil feels dry. They are sensitive to chemicals in tap water, and brown leaf tips can indicate dry air or overexposure to sunlight.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "When should you water a Maidenhair Fern?",
          answers: [
            { text: "Once a month", isCorrect: false },
            { text: "Every day", isCorrect: false },
            { text: "Only when the leaves start drooping", isCorrect: false },
            { text: "When the top inch of soil feels dry", isCorrect: true },
          ],
        },
        {
          question: "Why might the leaf tips of a Maidenhair Fern turn brown?",
          answers: [
            { text: "Overwatering", isCorrect: false },
            { text: "Nutrient deficiency", isCorrect: false },
            { text: "Dry air or too much sunlight", isCorrect: true },
            { text: "Pest infestation", isCorrect: false },
          ],
        },
        {
          question: "What should be avoided when watering Maidenhair Ferns?",
          answers: [
            { text: "Using room temperature water", isCorrect: false },
            { text: "Watering in the morning", isCorrect: false },
            { text: "Watering from below", isCorrect: false },
            { text: "Using tap water with chemicals", isCorrect: true },
          ],
        },
      ],
    },
    level3: {
      instructions:
          "Maidenhair Ferns benefit from regular fertilization during the growing season but are sensitive to over-fertilization. They can be propagated through division. Keeping them in bathrooms with showers can provide the necessary humidity.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How often should Maidenhair Ferns be fertilized?",
          answers: [
            { text: "Never", isCorrect: false },
            { text: "Regularly during the growing season", isCorrect: true },
            { text: "Year-round", isCorrect: false },
            { text: "Only in winter", isCorrect: false },
          ],
        },
        {
          question: "What is an effective way to propagate Maidenhair Ferns?",
          answers: [
            { text: "Stem cuttings", isCorrect: false },
            { text: "Leaf cuttings", isCorrect: false },
            { text: "Seeds", isCorrect: false },
            { text: "Through division", isCorrect: true },
          ],
        },
        {
          question: "Why are bathrooms often suitable for Maidenhair Ferns?",
          answers: [
            { text: "Higher humidity from showers", isCorrect: true },
            { text: "More natural light", isCorrect: false },
            { text: "Cooler temperatures", isCorrect: false },
            { text: "Less space needed", isCorrect: false },
          ],
        },
      ],
    },
    level4: {
      instructions:
          "Maidenhair Ferns are known for their delicate, feathery fronds and can add a touch of elegance to indoor spaces. They require consistent care and attention, especially in maintaining the right moisture and humidity levels.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What is a distinctive feature of Maidenhair Ferns?",
          answers: [
            { text: "Broad, waxy leaves", isCorrect: false },
            { text: "Vibrant flowers", isCorrect: false },
            { text: "Delicate, feathery fronds", isCorrect: true },
            { text: "Succulent-like appearance", isCorrect: false },
          ],
        },
        {
          question: "What is crucial for the successful care of Maidenhair Ferns?",
          answers: [
            { text: "Frequent repotting", isCorrect: false },
            { text: "Low light conditions", isCorrect: false },
            { text: "Minimal watering", isCorrect: false },
            { text: "Consistent moisture and humidity", isCorrect: true },
          ],
        },
        {
          question: "How does the Maidenhair Fern contribute to indoor spaces?",
          answers: [
            { text: "Adds elegance and beauty", isCorrect: true },
            { text: "Purifies air more than other plants", isCorrect: false },
            { text: "Requires very little care", isCorrect: false },
            { text: "Grows rapidly, filling space quickly", isCorrect: false },
          ],
        },
      ],
    }
  },
  6: {
    level1: {
      instructions:
          "Nerve Plants prefer bright, indirect sunlight and high humidity. They need consistently moist soil but should not be waterlogged. Their distinctive leaves are sensitive to direct sunlight.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What type of light conditions do Nerve Plants prefer?",
          answers: [
            { text: "Direct, bright sunlight", isCorrect: false },
            { text: "Bright, indirect sunlight", isCorrect: true },
            { text: "Low light conditions", isCorrect: false },
            { text: "Complete darkness", isCorrect: false },
          ],
        },
        {
          question: "How should the soil be maintained for Nerve Plants?",
          answers: [
            { text: "Dry and arid", isCorrect: false },
            { text: "Consistently moist", isCorrect: true },
            { text: "Waterlogged", isCorrect: false },
            { text: "Completely dry", isCorrect: false },
          ],
        },
        {
          question: "What feature is distinctive about Nerve Plants?",
          answers: [
            { text: "Succulent leaves", isCorrect: false },
            { text: "Patterned leaves", isCorrect: true },
            { text: "Colorful flowers", isCorrect: false },
            { text: "Thorny stems", isCorrect: false },
          ],
        },
      ],
    },
    level2: {
      instructions:
          "Nerve Plants are known for their colorful, vein-like patterns on the leaves. They thrive in terrariums due to the high humidity environment. They should be fertilized regularly during the growing season.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "Why are terrariums suitable for Nerve Plants?",
          answers: [
            { text: "They require little light", isCorrect: false },
            { text: "Terrariums provide more nutrients", isCorrect: false },
            { text: "Prevents pests", isCorrect: false },
            { text: "High humidity environment", isCorrect: true },
          ],
        },
        {
          question: "How often should Nerve Plants be fertilized?",
          answers: [
            { text: "Regularly during the growing season", isCorrect: true },
            { text: "Once a year", isCorrect: false },
            { text: "Never", isCorrect: false },
            { text: "Every month, year-round", isCorrect: false },
          ],
        },
        {
          question: "What is notable about the leaves of Nerve Plants?",
          answers: [
            { text: "Large and waxy", isCorrect: false },
            { text: "Succulent and thick", isCorrect: false },
            { text: "Fragrant when crushed", isCorrect: false },
            { text: "Colorful, vein-like patterns", isCorrect: true },
          ],
        },
      ],
    },
    level3: {
      instructions:
          "Nerve Plants are native to tropical rainforests and can benefit from occasional misting. They are not drought-tolerant and require consistent watering. Avoid placing them in drafty areas or near heat sources.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What is the native environment of Nerve Plants?",
          answers: [
            { text: "Tropical rainforests", isCorrect: true },
            { text: "Desert regions", isCorrect: false },
            { text: "Mountainous areas", isCorrect: false },
            { text: "Temperate forests", isCorrect: false },
          ],
        },
        {
          question: "How does the Nerve Plant react to drought?",
          answers: [
            { text: "It thrives in dry conditions", isCorrect: false },
            { text: "It is not drought-tolerant", isCorrect: true },
            { text: "It prefers occasional dryness", isCorrect: false },
            { text: "No significant effect", isCorrect: false },
          ],
        },
        {
          question: "What should be avoided when placing Nerve Plants?",
          answers: [
            { text: "Drafty areas and heat sources", isCorrect: true },
            { text: "Areas with high humidity", isCorrect: false },
            { text: "Shaded locations", isCorrect: false },
            { text: "Placing near other plants", isCorrect: false },
          ],
        },
      ],
    },
    level4: {
      instructions:
          "Nerve Plants can be propagated through stem cuttings or division. They are sensitive to chemicals in water, and browning leaf edges may indicate water stress or excessive fertilizer. They add a vibrant touch to indoor spaces.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How can Nerve Plants be propagated?",
          answers: [
            { text: "Seeds", isCorrect: false },
            { text: "Stem cuttings or division", isCorrect: true },
            { text: "Leaf cuttings", isCorrect: false },
            { text: "Air layering", isCorrect: false },
          ],
        },
        {
          question: "What can cause browning leaf edges in Nerve Plants?",
          answers: [
            { text: "Too much direct sunlight", isCorrect: false },
            { text: "Lack of nutrients", isCorrect: false },
            { text: "Water stress or excessive fertilizer", isCorrect: true },
            { text: "Overwatering", isCorrect: false },
          ],
        },
        {
          question: "What aesthetic value do Nerve Plants add to indoor spaces?",
          answers: [
            { text: "Minimalist and modern look", isCorrect: false },
            { text: "Rustic charm", isCorrect: false },
            { text: "Colorful flowering", isCorrect: false },
            { text: "Vibrant touch with patterned foliage", isCorrect: true },
          ],
        },
      ],
    }
  },
  7: {
    level1: {
      instructions:
          "Aloe Vera plants need well-drained soil and bright, indirect sunlight. They should be watered deeply but infrequently, allowing the soil to dry out between waterings. Overwatering can lead to root rot.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What type of soil is best for Aloe Vera?",
          answers: [
            { text: "Clay soil", isCorrect: false },
            { text: "Well-drained soil", isCorrect: true },
            { text: "Waterlogged soil", isCorrect: false },
            { text: "Sandy soil", isCorrect: false },
          ],
        },
        {
          question: "What are the light requirements for Aloe Vera?",
          answers: [
            { text: "Low light conditions", isCorrect: false },
            { text: "Direct, bright sunlight", isCorrect: false },
            { text: "Bright, indirect sunlight", isCorrect: true },
            { text: "Complete darkness", isCorrect: false },
          ],
        },
        {
          question: "How often should Aloe Vera be watered?",
          answers: [
            { text: "Regularly and lightly", isCorrect: false },
            { text: "Every day", isCorrect: false },
            { text: "Once a month", isCorrect: false },
            { text: "Deeply but infrequently", isCorrect: true },
          ],
        },
      ],
    },
    level2: {
      instructions:
          "Aloe Vera plants store water in their leaves and are drought-tolerant. They prefer temperatures between 55°F and 80°F and should be protected from frost. Yellowing leaves can indicate overwatering.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What is a sign of overwatering in Aloe Vera plants?",
          answers: [
            { text: "Yellowing leaves", isCorrect: true },
            { text: "Drooping leaves", isCorrect: false },
            { text: "Spotted leaves", isCorrect: false },
            { text: "Leaf shrinkage", isCorrect: false },
          ],
        },
        {
          question: "What temperature range is ideal for Aloe Vera?",
          answers: [
            { text: "Below 50°F (10°C)", isCorrect: false },
            { text: "55°F to 80°F (13°C to 27°C)", isCorrect: true },
            { text: "85°F to 100°F (29°C to 38°C)", isCorrect: false },
            { text: "40°F to 55°F (4°C to 13°C)", isCorrect: false },
          ],
        },
        {
          question: "How does Aloe Vera adapt to dry conditions?",
          answers: [
            { text: "Sheds leaves", isCorrect: false },
            { text: "Grows deeper roots", isCorrect: false },
            { text: "Stores water in leaves", isCorrect: true },
            { text: "Wilt and die", isCorrect: false },
          ],
        },
      ],
    },
    level3: {
      instructions:
          "Aloe Vera can be propagated from offsets or 'pups' that grow from the base of the plant. It's known for its healing properties, especially for soothing skin burns and cuts. Aloe Vera gel can be extracted from the leaves.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How can Aloe Vera plants be propagated?",
          answers: [
            { text: "Seed", isCorrect: false },
            { text: "Leaf cuttings", isCorrect: false },
            { text: "Stem cuttings", isCorrect: false },
            { text: "From offsets or 'pups'", isCorrect: true },
          ],
        },
        {
          question: "What is Aloe Vera commonly used for?",
          answers: [
            { text: "Air purification", isCorrect: false },
            { text: "Soothing skin burns and cuts", isCorrect: true },
            { text: "Repelling insects", isCorrect: false },
            { text: "Improving sleep", isCorrect: false },
          ],
        },
        {
          question: "How is Aloe Vera gel extracted for use?",
          answers: [
            { text: "From the leaves", isCorrect: true },
            { text: "From the roots", isCorrect: false },
            { text: "From the flowers", isCorrect: false },
            { text: "From the stem", isCorrect: false },
          ],
        },
      ],
    },
    level4: {
      instructions:
          "Aloe Vera has thick, fleshy leaves with serrated edges. It should be repotted when it becomes root-bound. While it's a low-maintenance plant, it's susceptible to mealybugs and scale insects.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What are the characteristics of Aloe Vera leaves?",
          answers: [
            { text: "Thin and smooth", isCorrect: false },
            { text: "Thick, fleshy with serrated edges", isCorrect: true },
            { text: "Small and round", isCorrect: false },
            { text: "Long and narrow", isCorrect: false },
          ],
        },
        {
          question: "When should an Aloe Vera plant be repotted?",
          answers: [
            { text: "Annually", isCorrect: false },
            { text: "When the leaves turn yellow", isCorrect: false },
            { text: "Every month", isCorrect: false },
            { text: "When it becomes root-bound", isCorrect: true },
          ],
        },
        {
          question: "What pests are Aloe Vera plants susceptible to?",
          answers: [
            { text: "Spider mites", isCorrect: false },
            { text: "Mealybugs and scale insects", isCorrect: true },
            { text: "Aphids", isCorrect: false },
            { text: "Whiteflies", isCorrect: false },
          ],
        },
      ],
    }
  },
  8: {
    level1: {
      instructions:
          "Anthuriums prefer high humidity, bright, indirect light, and moist, well-draining soil. They should not be overwatered, and their leaves can be wiped to remove dust. They are known for their colorful spathes and air-purifying qualities.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What type of light do Anthuriums prefer?",
          answers: [
            { text: "Direct sunlight", isCorrect: false },
            { text: "Low light conditions", isCorrect: false },
            { text: "Bright, indirect light", isCorrect: true },
            { text: "Complete darkness", isCorrect: false },
          ],
        },
        {
          question: "How should the soil be for Anthuriums?",
          answers: [
            { text: "Moist and well-draining", isCorrect: true },
            { text: "Dry and sandy", isCorrect: false },
            { text: "Waterlogged", isCorrect: false },
            { text: "Hard and clayey", isCorrect: false },
          ],
        },
        {
          question: "What is a distinctive feature of Anthuriums?",
          answers: [
            { text: "Fragrant flowers", isCorrect: false },
            { text: "Succulent leaves", isCorrect: false },
            { text: "Thorny stems", isCorrect: false },
            { text: "Colorful spathes", isCorrect: true },
          ],
        },
      ],
    },
    level2: {
      instructions:
          "Anthuriums should be watered regularly, allowing the top inch of soil to dry out between waterings. They benefit from regular misting. Yellow leaves can indicate overwatering or poor drainage.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How often should Anthuriums be watered?",
          answers: [
            { text: "Daily", isCorrect: false },
            { text: "Regularly, allowing top inch of soil to dry out", isCorrect: true },
            { text: "Once a month", isCorrect: false },
            { text: "Only when leaves start to droop", isCorrect: false },
          ],
        },
        {
          question: "What can cause yellow leaves in Anthuriums?",
          answers: [
            { text: "Overwatering or poor drainage", isCorrect: true },
            { text: "Underwatering", isCorrect: false },
            { text: "Lack of sunlight", isCorrect: false },
            { text: "Old age", isCorrect: false },
          ],
        },
        {
          question: "What additional care do Anthuriums benefit from?",
          answers: [
            { text: "Frequent repotting", isCorrect: false },
            { text: "High fertilizer application", isCorrect: false },
            { text: "Pruning", isCorrect: false },
            { text: "Regular misting", isCorrect: true },
          ],
        },
      ],
    },
    level3: {
      instructions:
          "Anthuriums can be propagated by division. They prefer a warm environment and should be protected from temperatures below 50°F. Over-fertilization can lead to salt build-up and harm the plant.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How can Anthuriums be propagated?",
          answers: [
            { text: "From leaf cuttings", isCorrect: false },
            { text: "By division", isCorrect: true },
            { text: "Using seeds", isCorrect: false },
            { text: "By stem cuttings", isCorrect: false },
          ],
        },
        {
          question: "What temperature is harmful to Anthuriums?",
          answers: [
            { text: "Above 75°F (24°C)", isCorrect: false },
            { text: "Below 32°F (0°C)", isCorrect: false },
            { text: "Below 50°F (10°C)", isCorrect: true },
            { text: "Above 90°F (32°C)", isCorrect: false },
          ],
        },
        {
          question: "What should be avoided when fertilizing Anthuriums?",
          answers: [
            { text: "Organic fertilizers", isCorrect: false },
            { text: "Fertilizing in the growing season", isCorrect: false },
            { text: "All types of fertilizers", isCorrect: false },
            { text: "Over-fertilization", isCorrect: true },
          ],
        },
      ],
    },
    level4: {
      instructions:
          "The bright spathe of the Anthurium is often mistaken for a flower, but it is a modified leaf. Anthuriums are epiphytes in their natural habitat. They require well-balanced liquid fertilizer and good air circulation.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What is the bright part of an Anthurium often mistaken for a flower?",
          answers: [
            { text: "Petal", isCorrect: false },
            { text: "Bud", isCorrect: false },
            { text: "A modified leaf (spathe)", isCorrect: true },
            { text: "Fruit", isCorrect: false },
          ],
        },
        {
          question: "What type of plant is an Anthurium in its natural habitat?",
          answers: [
            { text: "Succulent", isCorrect: false },
            { text: "Epiphyte", isCorrect: true },
            { text: "Terrestrial", isCorrect: false },
            { text: "Aquatic", isCorrect: false },
          ],
        },
        {
          question: "What type of fertilizer is best for Anthuriums?",
          answers: [
            { text: "Granular slow-release fertilizer", isCorrect: false },
            { text: "High nitrogen fertilizer", isCorrect: false },
            { text: "Well-balanced liquid fertilizer", isCorrect: true },
            { text: "No fertilizer", isCorrect: false },
          ],
        },
      ],
    }
  },
  9: {
    level1: {
      instructions:
          "Lemon Trees need full sunlight and well-draining soil. They require regular watering to keep the soil moist but not waterlogged. Protecting them from frost is essential for their health.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What type of light do Lemon Trees require?",
          answers: [
            { text: "Partial shade", isCorrect: false },
            { text: "Low light", isCorrect: false },
            { text: "Indirect sunlight", isCorrect: false },
            { text: "Full sunlight", isCorrect: true },
          ],
        },
        {
          question: "What are the soil requirements for Lemon Trees?",
          answers: [
            { text: "Clay soil", isCorrect: false },
            { text: "Well-draining soil", isCorrect: true },
            { text: "Waterlogged soil", isCorrect: false },
            { text: "Sandy soil", isCorrect: false },
          ],
        },
        {
          question: "How should Lemon Trees be watered?",
          answers: [
            { text: "Sparingly, to keep soil dry", isCorrect: false },
            { text: "Once a month", isCorrect: false },
            { text: "Constantly waterlogged", isCorrect: false },
            { text: "Regularly, to keep soil moist", isCorrect: true },
          ],
        },
      ],
    },
    level2: {
      instructions:
          "Lemon Trees benefit from regular fertilization, especially during the growing season. They can be susceptible to pests like aphids and spider mites. Yellow leaves can indicate overwatering or nutrient deficiencies.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How often should Lemon Trees be fertilized?",
          answers: [
            { text: "Once a year", isCorrect: false },
            { text: "Regularly during the growing season", isCorrect: true },
            { text: "Never", isCorrect: false },
            { text: "Every month, year-round", isCorrect: false },
          ],
        },
        {
          question: "What pests commonly affect Lemon Trees?",
          answers: [
            { text: "Slugs and snails", isCorrect: false },
            { text: "Beetles", isCorrect: false },
            { text: "Ants", isCorrect: false },
            { text: "Aphids and spider mites", isCorrect: true },
          ],
        },
        {
          question: "What can cause yellow leaves in Lemon Trees?",
          answers: [
            { text: "Underwatering", isCorrect: false },
            { text: "Overwatering or nutrient deficiencies", isCorrect: true },
            { text: "Too much sun", isCorrect: false },
            { text: "Cold temperatures", isCorrect: false },
          ],
        },
      ],
    },
    level3: {
      instructions:
          "Pruning Lemon Trees helps in maintaining their shape and removing dead or diseased branches. They can be grown in pots but require sufficient space for root growth. Overexposure to cold can damage the tree.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "Why is pruning important for Lemon Trees?",
          answers: [
            { text: "To maintain shape and remove unhealthy branches", isCorrect: true },
            { text: "To increase fruit production", isCorrect: false },
            { text: "To reduce the height of the tree", isCorrect: false },
            { text: "To enhance leaf color", isCorrect: false },
          ],
        },
        {
          question: "Can Lemon Trees be grown in pots?",
          answers: [
            { text: "No, they can only grow in the ground", isCorrect: false },
            { text: "Yes, in small pots", isCorrect: false },
            { text: "Only dwarf varieties", isCorrect: false },
            { text: "Yes, with adequate space for roots", isCorrect: true },
          ],
        },
        {
          question: "What effect does overexposure to cold have on Lemon Trees?",
          answers: [
            { text: "Increases fruit production", isCorrect: false },
            { text: "Can damage the tree", isCorrect: true },
            { text: "Makes the leaves more colorful", isCorrect: false },
            { text: "Has no effect", isCorrect: false },
          ],
        },
      ],
    },
    level4: {
      instructions:
          "Lemon Trees can take several years to produce fruit. The fruit can be harvested when it's fully colored and slightly soft to the touch. Protecting the trees from wind and providing adequate nutrients are crucial for healthy growth.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How long does it take for Lemon Trees to start producing fruit?",
          answers: [
            { text: "Several years", isCorrect: true },
            { text: "A few months", isCorrect: false },
            { text: "One year", isCorrect: false },
            { text: "Immediately after planting", isCorrect: false },
          ],
        },
        {
          question: "When should you harvest lemons?",
          answers: [
            { text: "When they are green", isCorrect: false },
            { text: "Before they are fully colored", isCorrect: false },
            { text: "When fully colored and slightly soft", isCorrect: true },
            { text: "Once they fall off the tree", isCorrect: false },
          ],
        },
        {
          question: "What conditions are crucial for the healthy growth of Lemon Trees?",
          answers: [
            { text: "High humidity and shade", isCorrect: false },
            { text: "Frequent repotting", isCorrect: false },
            { text: "Constant watering", isCorrect: false },
            { text: "Protection from wind and adequate nutrients", isCorrect: true },
          ],
        },
      ],
    }
  },
  10: {
    level1: {
      instructions:
          "Indoor Olive Trees require bright light and should be placed near a south-facing window. They need well-draining soil and should be watered when the top inch of soil is dry. Regular pruning helps maintain their shape and encourages growth.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What type of light is best for indoor Olive Trees?",
          answers: [
            { text: "Bright light from a south-facing window", isCorrect: true },
            { text: "Low, indirect light", isCorrect: false },
            { text: "Artificial light only", isCorrect: false },
            { text: "Direct sunlight all day", isCorrect: false },
          ],
        },
        {
          question: "When should you water an indoor Olive Tree?",
          answers: [
            { text: "When the top inch of soil is dry", isCorrect: true },{ text: "Daily", isCorrect: false },
            { text: "Once a month", isCorrect: false },
            { text: "When the top inch of soil is dry", isCorrect: true },
            { text: "Constantly keep the soil moist", isCorrect: false },
          ],
        },
        {
          question: "Why is pruning important for indoor Olive Trees?",
          answers: [
            { text: "Increases fruit production", isCorrect: false },
            { text: "Maintains shape and encourages growth", isCorrect: true },
            { text: "Reduces the need for watering", isCorrect: false },
            { text: "Prevents disease", isCorrect: false },
          ],
        },
      ],
    },
    level2: {
      instructions:
          "Olive Trees prefer a cooler period in winter to encourage future blooming and fruiting. They benefit from being placed outside in summer. Avoid overwatering, as it can lead to root rot.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "Why should indoor Olive Trees have a cooler period in winter?",
          answers: [
            { text: "Helps the tree hibernate", isCorrect: false },
            { text: "Prevents leaf drop", isCorrect: false },
            { text: "Encourages blooming and fruiting", isCorrect: true },
            { text: "Reduces the risk of pests", isCorrect: false },
          ],
        },
        {
          question: "What should be avoided to prevent root rot in Olive Trees?",
          answers: [
            { text: "Underwatering", isCorrect: false },
            { text: "Using well-draining soil", isCorrect: false },
            { text: "Placing in bright light", isCorrect: false },
            { text: "Overwatering", isCorrect: true },
          ],
        },
        {
          question: "What is beneficial for Olive Trees during summer?",
          answers: [
            { text: "Placing them outside", isCorrect: true },
            { text: "Reducing water drastically", isCorrect: false },
            { text: "Keeping them in a dark room", isCorrect: false },
            { text: "Increasing humidity", isCorrect: false },
          ],
        },
      ],
    },
    level3: {
      instructions:
          "Fertilizing Olive Trees regularly during the growing season supports their health. They are drought-tolerant but perform best when not stressed by prolonged dryness. Repotting may be necessary as they grow.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How often should indoor Olive Trees be fertilized?",
          answers: [
            { text: "Only once when planting", isCorrect: false },
            { text: "Regularly during the growing season", isCorrect: true },
            { text: "Once a year", isCorrect: false },
            { text: "Never", isCorrect: false },
          ],
        },
        {
          question: "What characterizes Olive Trees in terms of drought tolerance?",
          answers: [
            { text: "Need constant moisture", isCorrect: false },
            { text: "Drought-tolerant but prefer regular watering", isCorrect: true },
            { text: "Should never be watered", isCorrect: false },
            { text: "Only require water once a month", isCorrect: false },
          ],
        },
        {
          question: "When might repotting be necessary for an Olive Tree?",
          answers: [
            { text: "Every year", isCorrect: false },
            { text: "Only if it's diseased", isCorrect: false },
            { text: "Never, it dislikes repotting", isCorrect: false },
            { text: "As the tree grows", isCorrect: true },
          ],
        },
      ],
    },
    level4: {
      instructions:
          "Olive Trees can produce olives indoors if they receive enough light. They are susceptible to scale insects and mealybugs. Keeping the leaves clean ensures the tree receives adequate light.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "Can indoor Olive Trees produce olives?",
          answers: [
            { text: "No, they never produce fruit indoors", isCorrect: false },
            { text: "Yes, if they receive enough light", isCorrect: true },
            { text: "Only if they are over 10 years old", isCorrect: false },
            { text: "Only if fertilized heavily", isCorrect: false },
          ],
        },
        {
          question: "What pests are Olive Trees susceptible to?",
          answers: [
            { text: "Aphids and spider mites", isCorrect: false },
            { text: "Slugs and snails", isCorrect: false },
            { text: "Scale insects and mealybugs", isCorrect: true },
            { text: "Whiteflies", isCorrect: false },
          ],
        },
        {
          question: "Why is it important to keep Olive Tree leaves clean?",
          answers: [
            { text: "Ensures the tree receives adequate light", isCorrect: true },
            { text: "Prevents disease", isCorrect: false },
            { text: "Promotes faster growth", isCorrect: false },
            { text: "Keeps pests away", isCorrect: false },
          ],
        },
      ],
    }
  }
};

export default plantsTriviaConfig;
