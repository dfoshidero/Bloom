import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Modal,
  StyleSheet,
  ImageBackground,
  ScrollView,
  FlatList,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import TouchableScale from "react-native-touchable-scale";

import Oracle from "../components/OracleComponent";
import GameText from "../styles/GameText";
import plantsTriviaConfig from "../states/plantsTriviaConfig";
import levelsConfig from "../states/levelsConfig";
import { plants } from "../states/plantsConfig";
import { usePlayerConfig } from "../states/playerConfigContext";

const quizBackground = require("../assets/backgrounds/misc/quiz_screen.png");
const textBox = require("../assets/icons/text_box.png");

const buttonFontSize = RFValue(10);
const textSize = RFValue(14);

const QuizScreen = ({ navigation, route }) => {
  const [showRewardMessage, setShowRewardMessage] = useState(false);
  const { plant, level, id } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const { playerConfig, decreaseHearts, addCoins } = usePlayerConfig();
  const [updatedList, setUpdatedList] = useState(null);
  const [currentInstructions, setCurrentInstructions] = useState("");

  useEffect(() => {
    const trivia = plantsTriviaConfig[plant]?.[level];
    if (trivia) {
      const currentLevelIndex = parseInt(level.slice(-1)); // Extract the level number
      // Collect questions from all previous levels
      const allPreviousQuestions = [];
      for (let i = 1; i < currentLevelIndex; i++) {
        const previousLevel = plantsTriviaConfig[plant]?.[`level${i}`];
        const previousLevelQuestions = previousLevel
          ? previousLevel.questions
          : [];
        allPreviousQuestions.push(...previousLevelQuestions);
      }

      // Shuffle all previous questions
      const shuffledAllPreviousQuestions = allPreviousQuestions.sort(
        () => Math.random() - 0.5
      );

      // Select two random questions from the shuffled array
      const randomQuestions = shuffledAllPreviousQuestions.slice(0, 2);

      console.log("random questions\n", randomQuestions);

      // Select the remaining questions from the current level
      const remainingQuestions = trivia.questions.slice(0, 3);
      console.log("Remaining questions\n", remainingQuestions);
      // Combine the selected questions with the current level's questions
      const combinedQuestions = [...remainingQuestions, ...randomQuestions];
      console.log("combined questions\n", combinedQuestions);

      const finalQuestions = combinedQuestions.map((question) => {
        // Shuffle the answers array for each question
        const shuffledAnswers = question.answers.sort(
          () => Math.random() - 0.5
        );

        // Return the question with shuffled answers
        return {
          ...question,
          answers: shuffledAnswers,
        };
      });

      // Shuffle the combined array to randomize the order of questions
      finalQuestions.sort(() => Math.random() - 0.5);
      setQuestions(finalQuestions);
      setCurrentInstructions(trivia.instructions || "");
      setShowInstructions(true); // Show instructions when questions are loaded
    } else {
      console.log(`No trivia found for plant: ${plant}, level: ${level}`);
    }
  }, [plant, level]);

  const handleStartQuiz = () => {
    setShowInstructions(false);
  };

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
    const numericPlant = parseInt(plant, 10);

    if (
      !levelsConfig[numericPlant].completedLevels.includes(
        parseInt(level.slice(-1), 10)
      )
    ) {
      console.log("parse int ", parseInt(level.slice(-1), 10));
      updateLevelsConfig(plant, level);
      // Add coins when the user completes a quiz
      const coinsReward = 5;
      addCoins(coinsReward);
      // Check if all three levels are completed

      console.log("numeric plants ", numericPlant);
      console.log(
        "completed levels length ",
        levelsConfig[numericPlant].completedLevels.length
      );
      console.log("total levels ", levelsConfig[numericPlant].totalLevels);
      if (
        levelsConfig[numericPlant].completedLevels.length ===
        levelsConfig[numericPlant].totalLevels
      ) {
        // Add extra coins when all three levels are completed
        const extraCoinsReward = 5;
        addCoins(extraCoinsReward);
        setShowRewardMessage(true); // Set the state to show the reward message
        console.log("Coins added. Checking component state...");
      }
    }
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
      console.log(arrangeData(null, plant, id, progress));
      return arrangeData(null, plant, id, progress);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableScale
      style={styles.answerButton}
      onPress={() => handleAnswer(item.isCorrect)}
    >
      <ImageBackground source={textBox} style={styles.textBox}>
        <GameText style={styles.buttonText}>{item.text}</GameText>
      </ImageBackground>
    </TouchableScale>
  );

  const renderGameOverModal = () => (
    <Modal visible={showGameOverModal} animationType="fade" transparent={false}>
      <View style={styles.modalContainer}>
        <GameText style={styles.congratsText}>Game Over!</GameText>
        <GameText>Your hearts have run out.</GameText>
        <TouchableScale
          style={styles.button}
          onPress={() => {
            setShowGameOverModal(false);
            navigation.navigate("Home", { updatedList: null });
          }}
        >
          <GameText style={styles.buttonText}>Back to Home</GameText>
        </TouchableScale>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={quizBackground}
        style={{ width: "100%", height: "100%", resizeMode: "contain" }}
      >
        <Oracle
          style={{
            position: "absolute",
            left: "18%",
            top: "20%",
            width: "15%",
            height: "15%",
            resizeMode: "contain",
          }}
        />
        {showInstructions && (
          <Modal
            visible={showInstructions}
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalBox}>
                <GameText style={styles.congratsText}>Instructions</GameText>
                <ScrollView style={styles.instructionsScrollView}>
                  <GameText style={styles.instructionsText}>
                    {currentInstructions}
                  </GameText>
                </ScrollView>
                <TouchableScale style={styles.button} onPress={handleStartQuiz}>
                  <GameText style={styles.buttonText}>Start Quiz</GameText>
                </TouchableScale>
              </View>
            </View>
          </Modal>
        )}
        {feedbackMessage ? (
          <GameText style={styles.feedbackText}>{feedbackMessage}</GameText>
        ) : null}
        {questions.length > 0 ? (
          <View style={styles.quizContainer}>
            <GameText style={styles.centerText}>
              {questions[currentQuestionIndex].question}
            </GameText>
            <FlatList
              data={questions[currentQuestionIndex].answers}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              style={styles.answerList}
            />
          </View>
        ) : (
          <View style={styles.quizContainer}>
            <GameText style={styles.centerText}>Loading questions...</GameText>
          </View>
        )}
        <Modal visible={showModal} animationType="fade">
          <View style={styles.modalContainer}>
            <GameText style={styles.congratsText}>
              Congratulations! You've completed the quiz!
            </GameText>
            {showRewardMessage && (
              <GameText style={styles.rewardMessage}>
                Congratulations! You've been rewarded with 5 extra coins!
              </GameText>
            )}
            <TouchableScale
              style={styles.button}
              onPress={() => {
                setShowModal(false);
                navigation.navigate("Home", {
                  updatedList: updatedList,
                });
              }}
            >
              <GameText style={styles.buttonText}>Go Back.</GameText>
            </TouchableScale>
          </View>
        </Modal>
        {renderGameOverModal()}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: 300, // Adjust the width as needed
    maxHeight: 400, // Maximum height for the box
    overflow: "hidden", // Enable hidden overflow
    justifyContent: "center",
    alignItems: "center",
  },
  answerList: {
    position: "absolute",
    width: "100%",
    bottom: "5%",
  },
  instructionsScrollView: {
    maxHeight: "70%", // Maximum height for the instructions text
  },
  quizContainer: {
    flex: 1, // Add flex: 1 to make the quizContainer take up all available space
    alignItems: "center",
    justifyContent: "center",
  },
  centerText: {
    position: "absolute",
    top: "30%",
    fontSize: textSize,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    width: "35%",
  },
  instructionsText: {
    fontSize: buttonFontSize,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 24,
  },
  buttonContainer: {
    alignItems: "center", // Center the button horizontally
  },
  button: {
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#d4edda",
    padding: 15,
    borderRadius: 15,
    width: 160,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
    margin: 10,
  },
  answerButton: {
    justifyContent: "center",
    alignContent: "center",
  },
  buttonText: {
    fontSize: buttonFontSize,
    color: "#333",
    textAlign: "center",
    margin: "10%",
  },
  textBox: {
    width: "100%",
    resizeMode: "contain",
  },
  congratsText: {
    fontSize: textSize,
    color: "#333",
    textAlign: "center",
  },
  feedbackText: {
    fontSize: textSize,
    color: "red",
    marginBottom: 20,
  },
});

export default QuizScreen;
