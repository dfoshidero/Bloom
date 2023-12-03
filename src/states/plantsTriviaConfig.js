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
            { text: "Regularly repotting", isCorrect: false },
            { text: "Using tap water", isCorrect: false },
            { text: "Regularly singing to them", isCorrect: false },
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
            {
              text: "Cutting the stem and placing it in water",
              isCorrect: true,
            },
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
            { text: "Love", isCorrect: false },
            { text: "Good fortune", isCorrect: true },
            { text: "Health", isCorrect: false },
            { text: "Wealth", isCorrect: false },
          ],
        },
        {
          question: "How can you prevent algae growth in Lucky Bamboo?",
          answers: [
            {
              text: "Use clean containers and change water regularly",
              isCorrect: true,
            },
            { text: "Place in direct sunlight", isCorrect: false },
            { text: "Use tap water", isCorrect: false },
            { text: "Add fertilizer weekly", isCorrect: false },
          ],
        },
        {
          question: "What is special about braided Lucky Bamboo?",
          answers: [
            { text: "Grows faster", isCorrect: false },
            { text: "Needs less water", isCorrect: false },
            { text: "Does not require additional skills", isCorrect: false },
            { text: "Requires skilled cultivation", isCorrect: true },
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
            {
              text: "Frequent changes between light and dark",
              isCorrect: false,
            },
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
          question:
            "What happens if a Snake Plant is exposed to temperatures below 50°F?",
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
          question:
            "What is a risk of placing a Snake Plant in direct sunlight?",
          answers: [
            { text: "It will attract pests", isCorrect: false },
            { text: "The plant will grow too rapidly", isCorrect: false },
            { text: "Scorching the leaves", isCorrect: true },
            { text: "It will flower excessively", isCorrect: false },
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
          question:
            "Why should you avoid using fluoridated water for Dragon Trees?",
          answers: [
            { text: "It can cause leaf tip burn", isCorrect: true },
            { text: "It stunts the plant's growth", isCorrect: false },
            { text: "It attracts pests", isCorrect: false },
            { text: "It changes the leaf color", isCorrect: false },
          ],
        },
      ],
    },
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
          question:
            "How can you help maintain the right humidity for Maidenhair Ferns?",
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
          question:
            "What is crucial for the successful care of Maidenhair Ferns?",
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
    },
    level5: {
      instructions:
        "Advanced care for Maidenhair Ferns includes understanding their sensitivity to changes in environment and careful handling due to their delicate fronds. They are non-toxic to pets and can live for many years with proper care. Avoiding cold drafts and sudden temperature changes is crucial for their health.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question:
            "What should be avoided due to Maidenhair Ferns' sensitivity?",
          answers: [
            {
              text: "Cold drafts and sudden temperature changes",
              isCorrect: true,
            },
            { text: "Bright, indirect sunlight", isCorrect: false },
            { text: "High humidity environments", isCorrect: false },
            { text: "Using organic fertilizers", isCorrect: false },
          ],
        },
        {
          question: "How long can Maidenhair Ferns live with proper care?",
          answers: [
            { text: "Several months", isCorrect: false },
            { text: "1-2 years", isCorrect: false },
            { text: "Many years", isCorrect: true },
            { text: "Less than a year", isCorrect: false },
          ],
        },
        {
          question: "Are Maidenhair Ferns toxic to pets?",
          answers: [
            { text: "Yes, highly toxic", isCorrect: false },
            { text: "Only if consumed in large quantities", isCorrect: false },
            { text: "No, they are non-toxic", isCorrect: true },
            { text: "Yes, but only to certain animals", isCorrect: false },
          ],
        },
      ],
    },
    level6: {
      instructions:
        "Expert care for Maidenhair Ferns involves understanding their growth patterns, ideal repotting techniques, and recognizing signs of stress or disease. Using rainwater or distilled water can be beneficial. They are known for their air-purifying qualities but require a stable environment to thrive.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What type of water is ideal for Maidenhair Ferns?",
          answers: [
            { text: "Tap water", isCorrect: false },
            { text: "Rainwater or distilled water", isCorrect: true },
            { text: "Boiled water", isCorrect: false },
            { text: "Hard water", isCorrect: false },
          ],
        },
        {
          question: "What indicates a Maidenhair Fern is stressed or diseased?",
          answers: [
            { text: "Bright green fronds", isCorrect: false },
            { text: "Drooping or discolored fronds", isCorrect: true },
            { text: "Slow growth", isCorrect: false },
            { text: "Dry soil", isCorrect: false },
          ],
        },
        {
          question: "When is the best time to repot Maidenhair Ferns?",
          answers: [
            { text: "During the winter", isCorrect: false },
            { text: "When the plant becomes root-bound", isCorrect: true },
            { text: "Every month", isCorrect: false },
            { text: "Annually, regardless of growth", isCorrect: false },
          ],
        },
      ],
    },
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
          question:
            "What aesthetic value do Nerve Plants add to indoor spaces?",
          answers: [
            { text: "Minimalist and modern look", isCorrect: false },
            { text: "Rustic charm", isCorrect: false },
            { text: "Colorful flowering", isCorrect: false },
            { text: "Vibrant touch with patterned foliage", isCorrect: true },
          ],
        },
      ],
    },
    level5: {
      instructions:
        "Advanced care for Nerve Plants includes understanding their growth patterns, ideal repotting techniques, and recognizing signs of stress or disease. They are sensitive to the quality of water and may benefit from using filtered or rainwater. Providing stable environmental conditions is key for their health.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What type of water is ideal for Nerve Plants?",
          answers: [
            { text: "Tap water", isCorrect: false },
            { text: "Filtered or rainwater", isCorrect: true },
            { text: "Boiled water", isCorrect: false },
            { text: "Saltwater", isCorrect: false },
          ],
        },
        {
          question: "How can you recognize stress or disease in Nerve Plants?",
          answers: [
            { text: "Glossy and vibrant leaves", isCorrect: false },
            { text: "Leaves dropping", isCorrect: true },
            { text: "Rapid growth", isCorrect: false },
            { text: "Darker leaf veins", isCorrect: false },
          ],
        },
        {
          question: "When is repotting Nerve Plants advisable?",
          answers: [
            { text: "Every month", isCorrect: false },
            { text: "When the plant becomes root-bound", isCorrect: true },
            { text: "Annually, regardless of growth", isCorrect: false },
            { text: "Never; they dislike repotting", isCorrect: false },
          ],
        },
      ],
    },
    level6: {
      instructions:
        "Expert care for Nerve Plants involves understanding their susceptibility to environmental changes, proper pruning techniques, and the balance between humidity and airflow. They may show unique responses to different light conditions, and their soil composition can greatly affect their health.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question:
            "How do Nerve Plants respond to different light conditions?",
          answers: [
            { text: "Color intensity of leaves changes", isCorrect: true },
            { text: "No noticeable change", isCorrect: false },
            { text: "Leaves curl up tightly", isCorrect: false },
            { text: "Plants stop growing completely", isCorrect: false },
          ],
        },
        {
          question: "What is important when pruning Nerve Plants?",
          answers: [
            { text: "Making large cuts to promote growth", isCorrect: false },
            { text: "Pruning only during the winter", isCorrect: false },
            { text: "Using unsterilized pruning tools", isCorrect: false },
            {
              text: "Pruning to maintain shape and remove dead leaves",
              isCorrect: true,
            },
          ],
        },
        {
          question: "What soil composition is best for Nerve Plants?",
          answers: [
            {
              text: "Loose, well-draining, and rich in organic matter",
              isCorrect: true,
            },
            { text: "Dense and clay-rich", isCorrect: false },
            { text: "Sandy and low in nutrients", isCorrect: false },
            { text: "Peat-heavy mixes", isCorrect: false },
          ],
        },
      ],
    },
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
    },
    level5: {
      instructions:
        "Advanced care for Aloe Vera includes understanding the nuances of its watering needs, the importance of pot selection for optimal growth, and recognizing signs of stress or disease. Aloe Vera can bloom under the right conditions and is sensitive to environmental changes.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question:
            "What is important to consider when selecting a pot for Aloe Vera?",
          answers: [
            { text: "Size for root expansion", isCorrect: true },
            { text: "Color of the pot", isCorrect: false },
            { text: "Decorative design", isCorrect: false },
            { text: "Material of the pot", isCorrect: false },
          ],
        },
        {
          question:
            "How can you recognize stress or disease in Aloe Vera plants?",
          answers: [
            { text: "Bright green color", isCorrect: false },
            { text: "Thick and upright leaves", isCorrect: false },
            { text: "Wrinkled or soft leaves", isCorrect: true },
            { text: "Rapid growth", isCorrect: false },
          ],
        },
        {
          question: "Can Aloe Vera plants bloom indoors?",
          answers: [
            { text: "Yes, with the right conditions", isCorrect: true },
            { text: "No, they never bloom indoors", isCorrect: false },
            { text: "Only in direct sunlight", isCorrect: false },
            { text: "Only in high humidity", isCorrect: false },
          ],
        },
      ],
    },
    level6: {
      instructions:
        "Expert care for Aloe Vera involves understanding its seasonal growth patterns, appropriate pruning techniques, and the benefits of occasional feeding. Aloe Vera plants can purify air but are sensitive to poor air quality and contaminants.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question:
            "What seasonal growth patterns do Aloe Vera plants exhibit?",
          answers: [
            { text: "Fast growth in winter", isCorrect: false },
            { text: "Dormant in summer", isCorrect: false },
            { text: "Slower growth in colder months", isCorrect: true },
            { text: "Same growth rate year-round", isCorrect: false },
          ],
        },
        {
          question: "What is the benefit of occasional feeding for Aloe Vera?",
          answers: [
            { text: "Increases leaf size", isCorrect: false },
            { text: "Enhances leaf color and plant health", isCorrect: true },
            { text: "Promotes blooming", isCorrect: false },
            { text: "Reduces water needs", isCorrect: false },
          ],
        },
        {
          question: "How can poor air quality affect Aloe Vera plants?",
          answers: [
            { text: "Causes rapid growth", isCorrect: false },
            { text: "Leads to leaf discoloration and stress", isCorrect: true },
            { text: "Has no effect", isCorrect: false },
            { text: "Increases water consumption", isCorrect: false },
          ],
        },
      ],
    },
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
            {
              text: "Regularly, allowing top inch of soil to dry out",
              isCorrect: true,
            },
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
          question:
            "What is the bright part of an Anthurium often mistaken for a flower?",
          answers: [
            { text: "Petal", isCorrect: false },
            { text: "Bud", isCorrect: false },
            { text: "A modified leaf (spathe)", isCorrect: true },
            { text: "Fruit", isCorrect: false },
          ],
        },
        {
          question:
            "What type of plant is an Anthurium in its natural habitat?",
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
    },
    level5: {
      instructions:
        "Advanced care for Anthuriums involves understanding their susceptibility to low humidity, the importance of adequate water quality, and recognizing the signs of stress or disease. Anthuriums can bloom multiple times a year under optimal conditions. They are sensitive to chlorine and other chemicals often found in tap water.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How does low humidity affect Anthuriums?",
          answers: [
            { text: "Causes leaf discoloration", isCorrect: true },
            { text: "Enhances growth", isCorrect: false },
            { text: "Has no effect", isCorrect: false },
            { text: "Promotes flowering", isCorrect: false },
          ],
        },
        {
          question: "What water quality is best for Anthuriums?",
          answers: [
            { text: "Hard tap water", isCorrect: false },
            { text: "Filtered or rainwater", isCorrect: true },
            { text: "Distilled water only", isCorrect: false },
            { text: "Any water quality is fine", isCorrect: false },
          ],
        },
        {
          question: "How often can Anthuriums bloom in a year?",
          answers: [
            { text: "Once", isCorrect: false },
            { text: "Multiple times", isCorrect: true },
            { text: "Every two years", isCorrect: false },
            { text: "Never indoors", isCorrect: false },
          ],
        },
      ],
    },
    level6: {
      instructions:
        "Expert care for Anthuriums involves understanding their flowering patterns, ideal repotting techniques, and the balance between light and nutrient supply. They may show different growth behaviors based on seasonal changes. Anthuriums are known for their air-purifying qualities but require consistent care to thrive.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What is important when repotting Anthuriums?",
          answers: [
            { text: "Using a larger pot each time", isCorrect: false },
            {
              text: "Ensuring the new pot has adequate drainage",
              isCorrect: true,
            },
            { text: "Repotting only in winter", isCorrect: false },
            { text: "Using the same soil as before", isCorrect: false },
          ],
        },
        {
          question: "How do seasonal changes affect Anthurium growth?",
          answers: [
            { text: "No change in growth patterns", isCorrect: false },
            { text: "Faster growth in winter", isCorrect: false },
            { text: "Growth slows in colder months", isCorrect: true },
            { text: "Blooms only in summer", isCorrect: false },
          ],
        },
        {
          question:
            "What contributes to the air-purifying qualities of Anthuriums?",
          answers: [
            { text: "Their high oxygen output", isCorrect: false },
            { text: "Absorbing toxins from the air", isCorrect: true },
            {
              text: "The moisture they release into the air",
              isCorrect: false,
            },
            { text: "Reflecting sunlight", isCorrect: false },
          ],
        },
      ],
    },
    level7: {
      instructions:
        "Mastering Anthurium care includes understanding the nuances of its flowering cycle, the importance of humidity and temperature control, and recognizing early signs of nutrient deficiencies or excesses. Anthuriums benefit from occasional cleaning of their leaves to remove dust and enhance photosynthesis.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "Why is it beneficial to clean the leaves of Anthuriums?",
          answers: [
            { text: "To prevent pest infestations", isCorrect: false },
            { text: "To enhance photosynthesis", isCorrect: true },
            { text: "For aesthetic reasons only", isCorrect: false },
            { text: "To increase humidity", isCorrect: false },
          ],
        },
        {
          question: "What is a sign of nutrient deficiency in Anthuriums?",
          answers: [
            { text: "Dark green leaves", isCorrect: false },
            { text: "Slow flower growth", isCorrect: true },
            { text: "Rapid leaf growth", isCorrect: false },
            { text: "Thick stem development", isCorrect: false },
          ],
        },
        {
          question: "What is the ideal temperature range for Anthuriums?",
          answers: [
            { text: "65°F to 75°F (18°C to 24°C)", isCorrect: true },
            { text: "Below 50°F (10°C)", isCorrect: false },
            { text: "80°F to 90°F (27°C to 32°C)", isCorrect: false },
            { text: "Above 95°F (35°C)", isCorrect: false },
          ],
        },
      ],
    },
    level8: {
      instructions:
        "For Anthurium enthusiasts, understanding the impact of potting mix composition, the frequency of repotting, and the role of microclimate in flowering can lead to healthier plants. Anthuriums also benefit from a stable environment, free from frequent changes in location or conditions.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question:
            "How does the composition of potting mix affect Anthuriums?",
          answers: [
            { text: "Any type of potting mix is suitable", isCorrect: false },
            { text: "It should be rich in organic matter", isCorrect: true },
            { text: "It needs to be very sandy", isCorrect: false },
            { text: "Pure peat is ideal", isCorrect: false },
          ],
        },
        {
          question: "How often should Anthuriums be repotted?",
          answers: [
            { text: "Every month", isCorrect: false },
            { text: "Every 2-3 years or when root-bound", isCorrect: true },
            { text: "Annually", isCorrect: false },
            { text: "Never", isCorrect: false },
          ],
        },
        {
          question: "What role does a microclimate play in Anthurium care?",
          answers: [
            { text: "No significant role", isCorrect: false },
            { text: "Crucial for optimal flowering", isCorrect: true },
            { text: "Only affects leaf color", isCorrect: false },
            { text: "Increases pest resistance", isCorrect: false },
          ],
        },
      ],
    },
    level9: {
      instructions:
        "Expert-level care of Anthuriums involves fine-tuning watering practices, understanding the specific light needs for various species, and managing humidity levels effectively. Being sensitive to signs of stress such as leaf curling or color changes can prevent long-term issues.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What does leaf curling indicate in Anthuriums?",
          answers: [
            { text: "Overexposure to sunlight", isCorrect: false },
            { text: "Underwatering or low humidity", isCorrect: true },
            { text: "Overwatering", isCorrect: false },
            { text: "Nutrient excess", isCorrect: false },
          ],
        },
        {
          question:
            "How should different Anthurium species be exposed to light?",
          answers: [
            { text: "All species prefer direct sunlight", isCorrect: false },
            {
              text: "Varies based on species' natural habitat",
              isCorrect: true,
            },
            { text: "Low light for all species", isCorrect: false },
            { text: "Consistent artificial light", isCorrect: false },
          ],
        },
        {
          question:
            "What is an effective way to manage humidity for Anthuriums?",
          answers: [
            { text: "Using a dehumidifier", isCorrect: false },
            { text: "Regular misting or a pebble tray", isCorrect: true },
            { text: "Keeping them in dry conditions", isCorrect: false },
            { text: "Humidity does not affect Anthuriums", isCorrect: false },
          ],
        },
      ],
    },
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
            {
              text: "To maintain shape and remove unhealthy branches",
              isCorrect: true,
            },
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
          question:
            "What effect does overexposure to cold have on Lemon Trees?",
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
          question:
            "How long does it take for Lemon Trees to start producing fruit?",
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
          question:
            "What conditions are crucial for the healthy growth of Lemon Trees?",
          answers: [
            { text: "High humidity and shade", isCorrect: false },
            { text: "Frequent repotting", isCorrect: false },
            { text: "Constant watering", isCorrect: false },
            {
              text: "Protection from wind and adequate nutrients",
              isCorrect: true,
            },
          ],
        },
      ],
    },
    level5: {
      instructions:
        "Advanced Lemon Tree care involves understanding their susceptibility to specific diseases, the importance of balanced fertilization, and recognizing the signs of stress. Lemon Trees benefit from mulching and organic compost, which can enhance soil quality and overall tree health.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What is a common disease affecting Lemon Trees?",
          answers: [
            { text: "Powdery mildew", isCorrect: true },
            { text: "Rust fungus", isCorrect: false },
            { text: "Leaf spot", isCorrect: false },
            { text: "Verticillium wilt", isCorrect: false },
          ],
        },
        {
          question: "Why is balanced fertilization important for Lemon Trees?",
          answers: [
            { text: "Prevents leaf burn", isCorrect: true },
            { text: "Increases fruit size only", isCorrect: false },
            { text: "Reduces fruit production", isCorrect: false },
            { text: "Changes fruit taste", isCorrect: false },
          ],
        },
        {
          question: "What benefit does mulching provide to Lemon Trees?",
          answers: [
            { text: "Makes the tree grow taller", isCorrect: false },
            { text: "Enhances soil quality", isCorrect: true },
            { text: "Prevents fruiting", isCorrect: false },
            { text: "Increases leaf size", isCorrect: false },
          ],
        },
      ],
    },
    level6: {
      instructions:
        "Expert Lemon Tree care involves managing their exposure to extreme temperatures, optimizing their watering schedule, and understanding the impact of pruning on fruit production. Lemon Trees are sensitive to salt buildup in the soil and require periodic flushing.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How does extreme temperature affect Lemon Trees?",
          answers: [
            { text: "Causes leaves to turn yellow", isCorrect: false },
            { text: "Can damage the tree", isCorrect: true },
            { text: "Improves fruit flavor", isCorrect: false },
            { text: "Increases leaf size", isCorrect: false },
          ],
        },
        {
          question:
            "What is the impact of pruning on Lemon Tree fruit production?",
          answers: [
            { text: "Reduces fruit size", isCorrect: false },
            { text: "Increases overall yield", isCorrect: true },
            { text: "Stops fruit production", isCorrect: false },
            { text: "Has no impact", isCorrect: false },
          ],
        },
        {
          question: "Why is soil flushing important for Lemon Trees?",
          answers: [
            { text: "Increases soil moisture", isCorrect: false },
            { text: "Prevents root rot", isCorrect: false },
            { text: "Reduces salt buildup", isCorrect: true },
            { text: "Enhances soil aeration", isCorrect: false },
          ],
        },
      ],
    },
    level7: {
      instructions:
        "Mastering Lemon Tree care involves fine-tuning the microclimate conditions, understanding the timing for harvesting lemons for different uses, and ensuring a stable growing environment. Adequate pollination is essential for fruit production in Lemon Trees.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "How does pollination affect Lemon Tree fruit production?",
          answers: [
            { text: "No effect on fruit production", isCorrect: false },
            { text: "Decreases the number of fruits", isCorrect: false },
            { text: "Essential for fruit production", isCorrect: true },
            { text: "Increases fruit acidity", isCorrect: false },
          ],
        },
        {
          question: "What factors affect the timing of lemon harvesting?",
          answers: [
            { text: "Time of year only", isCorrect: false },
            { text: "Fruit size and color", isCorrect: true },
            { text: "Leaf color", isCorrect: false },
            { text: "Soil moisture level", isCorrect: false },
          ],
        },
        {
          question:
            "What is important in creating a stable growing environment for Lemon Trees?",
          answers: [
            { text: "Constantly changing the location", isCorrect: false },
            { text: "Regular pruning", isCorrect: false },
            { text: "Consistent light and temperature", isCorrect: true },
            { text: "Frequent repotting", isCorrect: false },
          ],
        },
      ],
    },
    level8: {
      instructions:
        "For Lemon Tree connoisseurs, understanding the subtleties of nutrient management, the significance of leaf analysis for health diagnosis, and the role of environmental stressors can lead to optimal tree health and productivity. Implementing integrated pest management strategies is key to maintaining healthy Lemon Trees.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What is the role of leaf analysis in Lemon Tree care?",
          answers: [
            { text: "Determines the age of the tree", isCorrect: false },
            { text: "Helps diagnose health issues", isCorrect: true },
            { text: "Assesses fruit quality", isCorrect: false },
            { text: "Monitors growth rate", isCorrect: false },
          ],
        },
        {
          question:
            "Why is integrated pest management important for Lemon Trees?",
          answers: [
            { text: "Reduces the need for watering", isCorrect: false },
            { text: "Improves soil quality", isCorrect: false },
            {
              text: "Effectively controls pests with minimal harm",
              isCorrect: true,
            },
            { text: "Increases fruit size", isCorrect: false },
          ],
        },
        {
          question: "How do environmental stressors impact Lemon Trees?",
          answers: [
            { text: "No significant impact", isCorrect: false },
            {
              text: "Can lead to reduced health and productivity",
              isCorrect: true,
            },
            { text: "Enhances leaf color", isCorrect: false },
            { text: "Promotes rapid growth", isCorrect: false },
          ],
        },
      ],
    },
    level9: {
      instructions:
        "For Lemon Tree connoisseurs, understanding the subtleties of nutrient management, the significance of leaf analysis for health diagnosis, and the role of environmental stressors can lead to optimal tree health and productivity. Implementing integrated pest management strategies is key to maintaining healthy Lemon Trees.\nRemember this information and answer the upcoming questions.",
      coin: 50,
      questions: [
        {
          question: "What is the role of leaf analysis in Lemon Tree care?",
          answers: [
            { text: "Determines the age of the tree", isCorrect: false },
            { text: "Helps diagnose health issues", isCorrect: true },
            { text: "Assesses fruit quality", isCorrect: false },
            { text: "Monitors growth rate", isCorrect: false },
          ],
        },
        {
          question:
            "Why is integrated pest management important for Lemon Trees?",
          answers: [
            { text: "Reduces the need for watering", isCorrect: false },
            { text: "Improves soil quality", isCorrect: false },
            {
              text: "Effectively controls pests with minimal harm",
              isCorrect: true,
            },
            { text: "Increases fruit size", isCorrect: false },
          ],
        },
        {
          question: "How do environmental stressors impact Lemon Trees?",
          answers: [
            { text: "No significant impact", isCorrect: false },
            {
              text: "Can lead to reduced health and productivity",
              isCorrect: true,
            },
            { text: "Enhances leaf color", isCorrect: false },
            { text: "Promotes rapid growth", isCorrect: false },
          ],
        },
      ],
    },
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
            {
              text: "Bright light from a south-facing window",
              isCorrect: true,
            },
            { text: "Low, indirect light", isCorrect: false },
            { text: "Artificial light only", isCorrect: false },
            { text: "Direct sunlight all day", isCorrect: false },
          ],
        },
        {
          question: "When should you water an indoor Olive Tree?",
          answers: [
            { text: "When the top inch of soil is dry", isCorrect: true },
            { text: "Daily", isCorrect: false },
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
          question:
            "Why should indoor Olive Trees have a cooler period in winter?",
          answers: [
            { text: "Helps the tree hibernate", isCorrect: false },
            { text: "Prevents leaf drop", isCorrect: false },
            { text: "Encourages blooming and fruiting", isCorrect: true },
            { text: "Reduces the risk of pests", isCorrect: false },
          ],
        },
        {
          question:
            "What should be avoided to prevent root rot in Olive Trees?",
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
          question:
            "What characterizes Olive Trees in terms of drought tolerance?",
          answers: [
            { text: "Need constant moisture", isCorrect: false },
            {
              text: "Drought-tolerant but prefer regular watering",
              isCorrect: true,
            },
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
            {
              text: "Ensures the tree receives adequate light",
              isCorrect: true,
            },
            { text: "Prevents disease", isCorrect: false },
            { text: "Promotes faster growth", isCorrect: false },
            { text: "Keeps pests away", isCorrect: false },
          ],
        },
      ],
    },
  },
  level5: {
    instructions:
      "Advanced Olive Tree care involves understanding their susceptibility to certain diseases, the importance of pruning for health and productivity, and recognizing the signs of stress. Olive Trees benefit from being grown in containers that allow for root growth and adequate drainage.\nRemember this information and answer the upcoming questions.",
    coin: 50,
    questions: [
      {
        question: "What is a common disease affecting Olive Trees?",
        answers: [
          { text: "Leaf rust", isCorrect: false },
          { text: "Olive knot disease", isCorrect: true },
          { text: "Powdery mildew", isCorrect: false },
          { text: "Verticillium wilt", isCorrect: false },
        ],
      },
      {
        question: "Why is pruning important for Olive Trees?",
        answers: [
          { text: "To increase fruit size", isCorrect: false },
          { text: "To maintain tree health and productivity", isCorrect: true },
          { text: "To reduce the height of the tree", isCorrect: false },
          { text: "To enhance leaf color", isCorrect: false },
        ],
      },
      {
        question: "What type of container is best for growing Olive Trees?",
        answers: [
          { text: "Shallow and wide containers", isCorrect: false },
          { text: "Small and decorative pots", isCorrect: false },
          { text: "Deep containers with good drainage", isCorrect: true },
          { text: "Containers without drainage holes", isCorrect: false },
        ],
      },
    ],
  },
  level6: {
    instructions:
      "Expert Olive Tree care involves managing exposure to extreme temperatures, optimizing watering schedules, and understanding the impact of soil pH on tree health. Adequate pollination is essential for fruit production in Olive Trees.\nRemember this information and answer the upcoming questions.",
    coin: 50,
    questions: [
      {
        question: "How does extreme temperature affect Olive Trees?",
        answers: [
          { text: "Improves fruit flavor", isCorrect: false },
          { text: "No significant impact", isCorrect: false },
          { text: "Can damage the tree", isCorrect: true },
          { text: "Increases leaf size", isCorrect: false },
        ],
      },
      {
        question: "How does soil pH affect Olive Trees?",
        answers: [
          {
            text: "Affects nutrient absorption and tree health",
            isCorrect: true,
          },
          { text: "Only changes fruit size", isCorrect: false },
          { text: "No impact on tree health", isCorrect: false },
          { text: "Increases susceptibility to diseases", isCorrect: false },
        ],
      },
      {
        question: "What is essential for Olive Tree fruit production?",
        answers: [
          { text: "High nitrogen fertilizer", isCorrect: false },
          { text: "Adequate pollination", isCorrect: true },
          { text: "Regular pruning", isCorrect: false },
          { text: "Constant moisture in soil", isCorrect: false },
        ],
      },
    ],
  },
  level7: {
    instructions:
      "Mastering Olive Tree care involves fine-tuning the microclimate conditions, understanding the timing for olive harvesting for different uses, and ensuring a stable growing environment. Olive Trees are sensitive to salt buildup in the soil and require periodic flushing.\nRemember this information and answer the upcoming questions.",
    coin: 50,
    questions: [
      {
        question: "How does microclimate affect Olive Tree growth?",
        answers: [
          { text: "No significant role", isCorrect: false },
          { text: "Crucial for optimal growth and fruiting", isCorrect: true },
          { text: "Only affects leaf color", isCorrect: false },
          { text: "Increases pest resistance", isCorrect: false },
        ],
      },
      {
        question: "What factors affect the timing of olive harvesting?",
        answers: [
          { text: "Time of year only", isCorrect: false },
          { text: "Fruit size and oil content", isCorrect: true },
          { text: "Leaf color", isCorrect: false },
          { text: "Soil moisture level", isCorrect: false },
        ],
      },
      {
        question: "Why is soil flushing important for Olive Trees?",
        answers: [
          { text: "Increases soil moisture", isCorrect: false },
          { text: "Reduces salt buildup in the soil", isCorrect: true },
          { text: "Prevents root rot", isCorrect: false },
          { text: "Enhances soil aeration", isCorrect: false },
        ],
      },
    ],
  },
  level8: {
    instructions:
      "For Olive Tree enthusiasts, understanding the subtleties of nutrient management, the significance of leaf analysis for health diagnosis, and the role of environmental stressors can lead to optimal tree health and productivity. Implementing integrated pest management strategies is key to maintaining healthy Olive Trees.\nRemember this information and answer the upcoming questions.",
    coin: 50,
    questions: [
      {
        question: "What role does leaf analysis play in Olive Tree care?",
        answers: [
          { text: "Determines the age of the tree", isCorrect: false },
          { text: "Helps diagnose health issues", isCorrect: true },
          { text: "Assesses fruit quality", isCorrect: false },
          { text: "Monitors growth rate", isCorrect: false },
        ],
      },
      {
        question:
          "Why is integrated pest management important for Olive Trees?",
        answers: [
          { text: "Increases fruit size", isCorrect: false },
          { text: "Reduces the need for watering", isCorrect: false },
          { text: "Improves soil quality", isCorrect: false },
          {
            text: "Controls pests with minimal environmental impact",
            isCorrect: true,
          },
        ],
      },
      {
        question: "How do environmental stressors impact Olive Trees?",
        answers: [
          { text: "Enhances leaf color", isCorrect: false },
          { text: "Promotes rapid growth", isCorrect: false },
          {
            text: "Can lead to reduced health and productivity",
            isCorrect: true,
          },
          { text: "No significant impact", isCorrect: false },
        ],
      },
    ],
  },
  level9: {
    instructions:
      "In-depth Olive Tree care involves a deep understanding of the varietal differences, soil composition's impact on tree health, and advanced strategies for dealing with environmental stress and diseases. Knowledge of seasonal care variations and their impact on fruit quality and tree longevity is crucial.\nRemember this information and answer the upcoming questions.",
    coin: 50,
    questions: [
      {
        question: "How does soil composition affect Olive Trees?",
        answers: [
          { text: "Any type of soil is suitable", isCorrect: false },
          { text: "It should be rich in organic matter", isCorrect: true },
          { text: "Needs to be very sandy", isCorrect: false },
          { text: "Pure clay is ideal", isCorrect: false },
        ],
      },
      {
        question:
          "Why is understanding varietal differences important in Olive Tree cultivation?",
        answers: [
          { text: "All varieties require the same care", isCorrect: false },
          {
            text: "Different varieties have unique care and climate needs",
            isCorrect: true,
          },
          {
            text: "Varietal differences are purely aesthetic",
            isCorrect: false,
          },
          { text: "It affects only the fruit size", isCorrect: false },
        ],
      },
      {
        question:
          "What is the impact of seasonal care variations on Olive Trees?",
        answers: [
          {
            text: "No impact on tree health or fruit quality",
            isCorrect: false,
          },
          {
            text: "Can significantly affect fruit quality and tree longevity",
            isCorrect: true,
          },
          { text: "Only affects the rate of growth", isCorrect: false },
          { text: "Leads to changes in leaf color", isCorrect: false },
        ],
      },
    ],
  },
};

export default plantsTriviaConfig;
