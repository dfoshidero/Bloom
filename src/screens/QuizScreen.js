import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
  AsyncStorage,
} from "react-native";
import plantsTriviaConfig from "../states/plantsTriviaConfig";
import levelsConfig from "../states/levelsConfig";
import plantsConfig from "../states/plantsConfig";

// Calculate and update progress
const updateProgress = async () => {
  const totalLevels = Object.values(levelsConfig).reduce(
    (sum, level) => sum + level.totalLevels,
    0
  );
  const completedLevelsCount = Object.values(levelsConfig).reduce(
    (count, level) => count + level.completedLevels.length,
    0
  );

  const progress = completedLevelsCount / totalLevels;
  Object.keys(plantsConfig).forEach((plantKey) => {
    plantsConfig[plantKey].progress = progress;
  });

  try {
    await AsyncStorage.setItem("plantsProgress", JSON.stringify(progress));
  } catch (e) {
    console.error("Failed to save progress", e);
  }
};

const QuizScreen = ({ navigation, route }) => {
  const [triviaAnswers, setTriviaAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const { plant, level } = route.params;

  useEffect(() => {
    const fetchTriviaAnswers = async () => {
      try {
        const answers = await getTriviaAnswers(
          level,
          plant,
          currentQuestionIndex
        );
        setTriviaAnswers(answers);
      } catch (error) {
        console.error("Error fetching trivia answers:", error);
      }
    };

    fetchTriviaAnswers();
  }, [level, plant, currentQuestionIndex]);

  // Get the answers for this quiz
  const getTriviaAnswers = async (level, plant, questionIndex) => {
    const plantLevelQuestions = plantsTriviaConfig[plant]?.[level];
    if (!plantLevelQuestions || !plantLevelQuestions[questionIndex]) {
      console.log(plant);
      console.error(
        `No questions found for plant: ${plant} and level: ${level}`
      );
      return [];
    }
    console.log(plantLevelQuestions);
    return plantLevelQuestions[questionIndex];
  };

  const handleAnswerSelection = (isCorrect) => {
    if (isCorrect) {
      setCurrentQuestionIndex((prevIndex) => {
        if (prevIndex < triviaAnswers.length - 1) {
          return prevIndex + 1;
        } else {
          levelsConfig[level].completed = true;
          updateProgress();
          setModalVisible(true);
          return prevIndex;
        }
      });
    } else {
      // Handle incorrect answer
    }
  };

  const renderAnswer = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleAnswerSelection(item.isCorrect)}
    >
      <Text style={styles.plantName}>{item.text}</Text>
    </TouchableOpacity>
  );

  const closeCompletionModal = () => {
    setModalVisible(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {console.log(triviaAnswers)}
        {triviaAnswers[currentQuestionIndex].question}
      </Text>
      <FlatList
        data={triviaAnswers[currentQuestionIndex].answers}
        renderItem={renderAnswer}
        keyExtractor={(item, index) => `answer-${index}`}
      />
      <CompletionModal visible={modalVisible} onClose={closeCompletionModal} />
    </View>
  );
};

const CompletionModal = ({ visible, onClose }) => (
  <Modal
    animationType="slide"
    transparent={false}
    visible={visible}
    onRequestClose={onClose}
  >
    <View style={{ marginTop: 50, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        LEVEL COMPLETE! CONGRATULATIONS!
      </Text>
      <Button title="Close" onPress={onClose} />
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  itemContainer: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  plantName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default QuizScreen;
