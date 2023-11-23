import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
} from "react-native";
import plantsTriviaConfig from "../states/plantsTriviaConfig";
import levelsConfig from "../states/levelsConfig";
import { plants } from "../states/plantsConfig";
import { usePlayerConfig } from "../states/playerConfigContext";

const QuizScreen = ({ navigation, route }) => {
  const { plant, level, id } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const { playerConfig, decreaseHearts } = usePlayerConfig();
  const [updatedList, setUpdatedList] = useState(null);

  useEffect(() => {
    const trivia = plantsTriviaConfig[plant]?.[level];
    if (trivia) {
      setQuestions(trivia);
    } else {
      console.log(`No trivia found for plant: ${plant}, level: ${level}`);
    }
  }, [plant, level]);

  const arrangeData = (archiveID, plantID, plantPositionID, progress) => {
    return {
      archiveID: archiveID || "null",
      plantID: plantID.toString(),
      plantPositionID: plantPositionID.toString(),
      progress: progress || 0,
    };
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setFeedbackMessage("Correct! Moving to next question...");
      const timer = setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setFeedbackMessage("");
        } else {
          completeQuiz();
        }
      }, 1000);
      return () => clearTimeout(timer); // Clear timeout if the component unmounts
    } else {
      setFeedbackMessage("Incorrect. Try again!");
      decreasePlayerHearts();
    }
  };

  const decreasePlayerHearts = () => {
    decreaseHearts();

    if (playerConfig.hearts - 1 <= 0) {
      setShowGameOverModal(true);
    }
  };

  const completeQuiz = () => {
    setShowModal(true);
    updateLevelsConfig(plant, level);
    const list = updatePlantsProgress(plant);
    setUpdatedList(list);
  };

  useEffect(() => {
    console.log(updatedList);
  }, [updatedList]);

  const updateLevelsConfig = (plant, completedLevel) => {
    const numericValue = completedLevel.replace(/\D/g, "");
    const numericLevel = parseInt(numericValue, 10);
    if (
      levelsConfig[plant] &&
      !levelsConfig[plant].completedLevels.includes(numericLevel)
    ) {
      levelsConfig[plant].completedLevels.push(numericLevel);
    }
  };

  const updatePlantsProgress = (plant) => {
    if (levelsConfig[plant]) {
      const totalLevels = levelsConfig[plant].totalLevels;
      const completedLevels = levelsConfig[plant].completedLevels.length;
      const progress = completedLevels / totalLevels;
      plants[plant].progress = progress;
      console.log(arrangeData(null,plant,id,progress));
      return arrangeData(null,plant,id,progress);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handleAnswer(item.isCorrect)}
    >
      <Text style={styles.buttonText}>{item.text}</Text>
    </TouchableOpacity>
  );

  const renderGameOverModal = () => (
    <Modal
      visible={showGameOverModal}
      animationType="slide"
      transparent={false}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.congratsText}>Game Over!</Text>
        <Text>Your hearts have run out.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setShowGameOverModal(false);
            navigation.navigate("Home", {updatedList: null});
          }}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {feedbackMessage ? (
        <Text style={styles.feedbackText}>{feedbackMessage}</Text>
      ) : null}
      {questions.length > 0 ? (
        <View style={styles.quizContainer}>
          <Text style={styles.questionText}>
            {questions[currentQuestionIndex].question}
          </Text>
          <FlatList
            data={questions[currentQuestionIndex].answers}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      ) : (
        <Text style={styles.loadingText}>Loading questions...</Text>
      )}
      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.congratsText}>
            Congratulations! You've completed the quiz!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setShowModal(false);
              navigation.navigate("Home", {updatedList: updatedList});
            }}
          >
            <Text style={styles.buttonText}>Go Back.</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {renderGameOverModal()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f4f4f4",
  },
  quizContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  loadingText: {
    fontSize: 18,
    color: "#333",
  },
  button: {
    backgroundColor: "#d4edda",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginVertical: 10,
    width: 160,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  congratsText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  feedbackText: {
    fontSize: 18,
    color: "red",
    marginBottom: 20,
  },
});

export default QuizScreen;
