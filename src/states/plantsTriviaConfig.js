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
            { text: "Bright, indirect sunlight", isCorrect: true },
            { text: "Low light conditions", isCorrect: false },
            { text: "Complete darkness", isCorrect: false },
            { text: "Direct, midday sunlight", isCorrect: false },
          ],
        },
        {
          question: "Is it necessary to fertilize a cactus?",
          answers: [
            { text: "Yes, during the growing season", isCorrect: true },
            { text: "No, never", isCorrect: false },
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
            { text: "65°F to 80°F (18°C to 27°C)", isCorrect: true },
            { text: "Below 50°F (10°C)", isCorrect: false },
            { text: "85°F to 100°F (29°C to 38°C)", isCorrect: false },
            { text: "40°F to 60°F (4°C to 15°C)", isCorrect: false },
          ],
        },
        {
          question: "What are the signs of overwatering in cacti?",
          answers: [
            { text: "Soft, discolored spots", isCorrect: true },
            { text: "Dry, peeling skin", isCorrect: false },
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
            { text: "A pot with good drainage", isCorrect: true },
            { text: "A sealed pot to retain moisture", isCorrect: false },
            { text: "A deep, narrow pot", isCorrect: false },
            { text: "A pot without any holes", isCorrect: false },
          ],
        },
        {
          question: "How can you propagate a cactus effectively?",
          answers: [
            { text: "Using cuttings or offsets", isCorrect: true },
            { text: "By submerging it in water", isCorrect: false },
            { text: "Planting its leaves", isCorrect: false },
            { text: "Through leaf layering", isCorrect: false },
          ],
        },
      ],
    },
  },
  2: {
    level1: {
      instructions: "Answer the following questions about ferns. level 1",
      coin: 100,
      questions: [
        // Level 1 questions for 'fern'
      ],
    },
    level2: {
      instructions: "Answer the following questions about ferns. level 2",
      coin: 100,
      questions: [
        // Level 2 questions for 'fern'
      ],
    },
    // More levels for 'fern'
  },
};

export default plantsTriviaConfig;
