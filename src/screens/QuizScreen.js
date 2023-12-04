import React, { useState, useEffect } from "react";
import {
  Animated,
  View,
  Image,
  Modal,
  StyleSheet,
  ImageBackground,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import TouchableScale from "react-native-touchable-scale";

import Oracle from "../components/OracleComponent";
import GameText from "../styles/GameText";
import plantsTriviaConfig from "../states/plantsTriviaConfig";
import levelsConfig from "../states/levelsConfig";
import { usePlantContext } from "../states/plantsDataContext";
import { usePlayerConfig } from "../states/playerConfigContext";
import { useProgressContext } from "../states/speciesProgressContext";
import {
  CompletedLevelsContext,
  useCompletedLevelsContext,
} from "../states/completedLevelsContext";
import HeartsDisplay from "../components/HeartsComponent";
import CoinDisplay from "../components/CoinComponent";

const quizBackground = require("../assets/backgrounds/misc/quiz_screen.png");
const congratsBackground = require("../assets/backgrounds/misc/congrats_screen.png");
const textBox = require("../assets/icons/text_box.png");

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const textSize = RFValue(deviceHeight * 0.013);
const buttonFontSize = RFValue(deviceHeight * 0.009);

  const aspectRatio = deviceHeight / deviceWidth;
  let heartsAndCoinsTop;

  if (aspectRatio < 2.1) {
    // Adjust the top position for wider aspect ratios
    heartsAndCoinsTop = "4%";
  } else {
    // Adjust the top position for narrower aspect ratios
    heartsAndCoinsTop = "8%";
  }

const QuizScreen = ({ navigation, route }) => {
  const { plantsConfig } = usePlantContext();
  const { plant, level, id } = route.params;

  const [showRewardMessage, setShowRewardMessage] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [updatedList, setUpdatedList] = useState(null);
  const [currentInstructions, setCurrentInstructions] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");
  const [currentPlant, setCurrentPlant] = useState("");
   const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [showConratsBackground, setShowCongratsBackground] = useState(false);

  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);
  const [bonusCoins, setBonusCoins] = useState(5);

  const { xp, hearts, decreaseHearts, addCoins, addXP } = usePlayerConfig();

  const { speciesProgress, updateSpeciesProgress } = useProgressContext();
  const { completedLevels, updateCompletedLevels } =
    useCompletedLevelsContext();

  useEffect(() => {
    const trivia = plantsTriviaConfig[plant]?.[level];
    if (trivia) {
      const currentLevelIndex = parseInt(level.slice(-1)); // Extract the level number
      setCurrentLevel(level.slice(-1));
      setCurrentPlant(plantsConfig[1].name);
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

      // Select the remaining questions from the current level
      const remainingQuestions = trivia.questions.slice(0, 3);

      // Combine the selected questions with the current level's questions
      const combinedQuestions = [...remainingQuestions, ...randomQuestions];

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
      const newCorrectAnswersCount = correctAnswersCount + 1;
      setCorrectAnswersCount(newCorrectAnswersCount); // Update the state
      addCoins(1); // Add 1 coin for each correct answer
      setFeedbackMessage("Correct! Moving to next question...");

      setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setFeedbackMessage("");
        } else {
          // Calculate bonus coins here
          const newBonusCoins = Math.max(0, 5 - incorrectAnswersCount);
          setBonusCoins(newBonusCoins); // Update the state
          addCoins(newBonusCoins); // Add the calculated bonus coins
          completeQuiz(newCorrectAnswersCount, newBonusCoins);
        }
      }, 1000);
    } else {
      setIncorrectAnswersCount((prevCount) => prevCount + 1); // Functional update here as well
      setFeedbackMessage("Incorrect. Try again!");
      setFeedbackModalVisible(true);
      decreasePlayerHearts();
    }
  };

  const decreasePlayerHearts = () => {
    decreaseHearts();

    if (hearts - 1 <= 0) {
      setShowGameOverModal(true);
    }
  };

  const completeQuiz = (newCorrectAnswersCount, newBonusCoins) => {
    setShowModal(true);
    setShowCongratsBackground(true);
    const numericPlant = parseInt(plant, 10);
    const levelIndex = parseInt(level.slice(-1), 10);

    // Find the XP reward for the current level
    const xpReward = levelsConfig[numericPlant].levels.find(
      (l) => l.levelNumber === levelIndex
    ).xpReward;

    if (completedLevels[numericPlant] < levelIndex) {
      updateCompletedLevels(numericPlant, levelIndex);

      addXP(xpReward);

      // Check if all levels are completed for extra rewards
      if (
        completedLevels[numericPlant] === levelsConfig[numericPlant].totalLevels
      ) {
        addCoins(5);
        addXP(100); // Extra xp for completing all levels
        setShowRewardMessage(true);
      }
    }
    const list = updatePlantsProgress(plant);
    setUpdatedList(list);

    // Display the rewards in the modal
    setFeedbackMessage(
      `${newCorrectAnswersCount} coins, ${newBonusCoins} bonus coins, and ${xpReward} XP earned!`
    );
  };

  useEffect(() => {
    console.log(updatedList);
  }, [updatedList]);

  const updatePlantsProgress = (plant) => {
    const progress = completedLevels[plant] / levelsConfig[plant].totalLevels;
    updateSpeciesProgress(plant, progress);
    console.log(arrangeData(null, plant, id, progress));
    return arrangeData(null, plant, id, progress);
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

  const renderFeedbackModal = () => (
    <Modal
      visible={feedbackModalVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => setFeedbackModalVisible(false)} // Optional: Handle back button on Android
    >
      <View style={styles.feedbackModalContainer}>
        <View style={styles.feedbackModal}>
          <GameText style={styles.feedbackText}>{feedbackMessage}</GameText>
          <ImageBackground source={textBox} style={styles.textBox}>
            <TouchableScale
              style={styles.buttonTextWrapper}
              onPress={() => setFeedbackModalVisible(false)}
            >
              <GameText style={styles.buttonText}>Close</GameText>
            </TouchableScale>
          </ImageBackground>
        </View>
      </View>
    </Modal>
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
        <TouchableScale
          style={{
            position: "absolute",
            left: "82%",
            top: heartsAndCoinsTop,
            zIndex: 1,
          }}
        >
          <HeartsDisplay />
        </TouchableScale>
        <TouchableScale
          style={{
            position: "absolute",
            left: "66%",
            top: heartsAndCoinsTop,
            zIndex: 1,
          }}
        >
          <CoinDisplay />
        </TouchableScale>
        {showInstructions && (
          <Modal
            visible={showInstructions}
            animationType="fade"
            transparent={true}
            statusBarTranslucent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalBox}>
                <GameText
                  style={[
                    styles.congratsText,
                    { paddingBottom: 20, paddingTop: 5 },
                  ]}
                >
                  Instructions
                </GameText>
                <ScrollView style={styles.instructionsScrollView}>
                  <GameText style={styles.instructionsText}>
                    {currentInstructions}
                  </GameText>
                </ScrollView>
                <ImageBackground source={textBox} style={styles.textBox}>
                  <TouchableScale
                    style={styles.buttonTextWrapper}
                    onPress={handleStartQuiz}
                  >
                    <GameText style={styles.buttonText}>Start Quiz</GameText>
                  </TouchableScale>
                </ImageBackground>
              </View>
            </View>
          </Modal>
        )}

        {renderFeedbackModal()}
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

        <Modal
          visible={showConratsBackground}
          animationType="fade"
          transparent={true}
        >
          <Modal visible={showModal} animationType="fade" transparent={true}>
            <View style={styles.modalContainer}>
              <View style={styles.congratsModalView}>
                <GameText style={styles.congratsText}>
                  Great job! You've passed {currentPlant} level {currentLevel}!
                </GameText>
                <GameText style={styles.rewardMessage}>
                  {feedbackMessage}
                </GameText>
                <TouchableScale
                  onPress={() => {
                    setShowModal(false);
                    setShowCongratsBackground(false);
                    navigation.navigate("Home", { updatedList: updatedList });
                  }}
                  style={styles.buttonTextWrapper}
                >
                  <ImageBackground source={textBox} style={styles.textBox}>
                    <GameText style={styles.buttonText}>Go Home.</GameText>
                  </ImageBackground>
                </TouchableScale>
              </View>
            </View>
          </Modal>
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
  feedbackModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  feedbackModal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    width: 300,
    alignItems: "center",
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    borderWidth: 4, // Border width (if needed)
    borderColor: "#A9A9A9", // Border color (if needed)
  },

  buttonTextWrapper: {
    width: "100%", // Set the width to 100% to cover the entire button
    alignItems: "center", // Center the content horizontally
    justifyContent: "center", // Center the content vertically
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
  },
  congratsModalView: {
    zIndex: 1,
    alignItems: "center",
    width: "70%",
    opacity: 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    // Add box shadow properties here
    shadowColor: "black", // Shadow color
    shadowOffset: {
      width: 0,
      height: 2,
    }, // Shadow offset
    borderWidth: 4, // Border width (if needed)
    borderColor: "darkgray", // Border color (if needed)
  },

  congratsModalContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
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
    borderWidth: 4, // Border width (if needed)
    borderColor: "darkgray", // Border color (if needed)
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
    backgroundColor: "#4CAF50", // A green color
    padding: 15,
    borderRadius: 25,
    width: 160,
    margin: 10,
    // Adding a light shadow for depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 4, // Border width (if needed)
    borderColor: "darkgray", // Border color (if needed)
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
    lineHeight: 20,
  },
  rewardMessage: {
    fontSize: textSize,
    color: "orange",
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: { width: -1, height: 1 },
    textAlign: "center",
    padding: "5%",
    lineHeight: 20,
  },
  feedbackText: {
    fontSize: textSize,
    color: "red",
    marginBottom: 20,
  },
});

export default QuizScreen;
