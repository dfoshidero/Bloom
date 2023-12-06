import React, { useState, useEffect, useContext } from "react";
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
  Button
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
import EvolveAnimation from "../components/EvolveAnimation";

const quizBackground = require("../assets/backgrounds/misc/quiz_screen.png");
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
  const [showCongratsBackground, setShowCongratsBackground] = useState(false);
  const [isLevelCompleted, setIsLevelCompleted] = useState(false);
  const [showEvolveModal, setShowEvolveModal] = useState(false);
  const [storedGrowthStage, setStoredGrowthStage] = useState(null);
  const [levelUpGrowthStage, setlevelUpGrowthStage] = useState(null);


  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0);
  const [bonusCoins, setBonusCoins] = useState(5);

  const { xp, hearts, decreaseHearts, addCoins, addXP } = usePlayerConfig();

  const { speciesProgress, updateSpeciesProgress } = useProgressContext();
  const { completedLevels, updateCompletedLevels } =
    useCompletedLevelsContext();

    const getGrowthIndex = (growthStage) => {
      if (growthStage <= 0) {
        return 1;
      } else if (growthStage <= 0.33) {
        return 2;
      } else if (growthStage <= 0.66) {
        return 3;
      } else {
        return 4;
      }
    };

    const masteryLevel = getGrowthIndex(levelUpGrowthStage);

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

         const initialStage = getCurrentGrowthStage(
           plant,
           plantsConfig,
           speciesProgress
         );
         setStoredGrowthStage(initialStage ? initialStage.growthStage : null);

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
          // Move the bonus coin calculation to completeQuiz function
          completeQuiz(newCorrectAnswersCount);
        }
      }, 1000);
    } else {
      const newIncorrectAnswersCount = incorrectAnswersCount + 1;
      setIncorrectAnswersCount(newIncorrectAnswersCount);

      // Update feedback message with number of hearts left
      const heartsLeft = hearts - 1; // Calculate the remaining hearts after this incorrect answer
      const heartsMessage =
        heartsLeft > 0
          ? `You have ${heartsLeft} heart(s) left.`
          : "No hearts left!";
      setFeedbackMessage(`Incorrect. Try again! ${heartsMessage}`);

      // Check if the next heart decrease will lead to game over
      if (heartsLeft <= 0) {
        // Directly show game over modal without showing feedback
        decreasePlayerHearts();
      } else {
        // Show feedback and then decrease hearts
        setFeedbackModalVisible(true);
        decreasePlayerHearts();
      }
    }
  };

  const decreasePlayerHearts = () => {
    decreaseHearts();

    if (hearts - 1 <= 0) {
      setShowGameOverModal(true);
    }
  };

  useEffect(() => {
    // Check if the current level is completed
    const numericPlant = parseInt(plant, 10);
    const levelIndex = parseInt(level.slice(-1), 10);

    if (completedLevels[numericPlant] >= levelIndex) {
      setIsLevelCompleted(true);
    }
  }, [plant, level, completedLevels]);

  const getCurrentGrowthStage = (plantID, plants, speciesProgress) => {
    const plantProgress = speciesProgress[plantID];

    const plant = plants[plantID];
    if (!plant || !plant.skins) {
      return null;
    }

    // Assuming 'default' skin is used. Modify as needed to support different skins
    const growthStages = plant.skins.find(
      (skin) => skin.name === plant.selectedSkin
    )?.growth;

    if (!growthStages) {
      return null;
    }

    // Find the current growth stage based on the plant's progress
    const currentStage = growthStages.reduce((prev, current) => {
      return plantProgress >= current.growthStage ? current : prev;
    });

    return currentStage;
  };

  const getPreviousGrowthStage = (plantID, currentGrowthStage, plants) => {
    const plant = plants[plantID];
    if (!plant || !plant.skins) {
      return null;
    }

    const growthStages = plant.skins.find(
      (skin) => skin.name === plant.selectedSkin
    )?.growth;
    if (!growthStages) {
      return null;
    }

    let previousStage = null;
    for (let i = 0; i < growthStages.length; i++) {
      if (growthStages[i].growthStage < currentGrowthStage) {
        previousStage = growthStages[i];
      } else {
        break; // Break the loop once a stage larger than the current stage is found
      }
    }

    return previousStage;
  };

  const handleGoHome = () => {
    const numericPlant = parseInt(plant, 10);

    // Get the current growth stage of the plant
    const currentStage = getCurrentGrowthStage(
      numericPlant,
      plantsConfig,
      speciesProgress
    );
    let previousStage = null;

    // Determine if there is a next stage for evolution
    if (currentStage && currentStage.growthStage < 1) {
      previousStage = getPreviousGrowthStage (
        numericPlant,
        currentStage.growthStage,
        plantsConfig
      );
    }

    // Update the currentPlant state with necessary data
    setCurrentPlant({
      ...currentPlant,
      currentStageImage: currentStage ? currentStage.imagePath : null,
      previousStageImage: previousStage ? previousStage.imagePath : null,
    });

    // Check if the growth stage has increased
    if (
      currentStage &&
      storedGrowthStage !== null &&
      currentStage.growthStage > storedGrowthStage
    ) {
      // Show evolve modal if growth stage has increased
      setlevelUpGrowthStage(currentStage.growthStage)
      setShowModal(false);
      setShowCongratsBackground(false);
      setShowEvolveModal(true);
    } else {
      // Navigate to home if no growth progress
      setShowModal(false);
      setShowCongratsBackground(false);
      setShowEvolveModal(false); // Ensure evolve modal is not shown
      navigation.navigate("Home", { updatedList: updatedList });
    }
  };


  const completeQuiz = (newCorrectAnswersCount, newBonusCoins) => {
    setShowModal(true);
    setShowCongratsBackground(true);
    const numericPlant = parseInt(plant, 10);
    const levelIndex = parseInt(level.slice(-1), 10);

    // Check if the level is not completed before
    if (completedLevels[numericPlant] < levelIndex) {
      // Find the bonus coins for the level
      const newBonusCoins = Math.max(0, 5 - incorrectAnswersCount);
      // Find the XP reward for the current level
      const xpReward = levelsConfig[numericPlant].levels.find(
        (l) => l.levelNumber === levelIndex
      ).xpReward;

      updateCompletedLevels(numericPlant, levelIndex);
      addXP(xpReward);
      setBonusCoins(newBonusCoins); // Update the state
      addCoins(newBonusCoins); // Add the calculated bonus coins

      // Check if all levels are completed for extra rewards
      if (
        completedLevels[numericPlant] === levelsConfig[numericPlant].totalLevels
      ) {
        addCoins(5);
        addXP(100); // Extra xp for completing all levels
        setShowRewardMessage(true);
      }
      const list = updatePlantsProgress(plant);
      setUpdatedList(list);

      // Display the rewards in the modal
      setFeedbackMessage(
        `${newCorrectAnswersCount} coins, ${newBonusCoins} bonus coins, and ${xpReward} XP earned!`
      );
    } else {
      // Level is already completed, don't give bonus coins again
      addXP(10);
      setFeedbackMessage(
        `Good practice! ${newCorrectAnswersCount} coins and 10 XP earned! No bonus coins for replaying completed levels.`
      );
    }
  };

  const updatePlantsProgress = (plant) => {
    const progress = completedLevels[plant] / levelsConfig[plant].totalLevels;
    updateSpeciesProgress(plant, progress);
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
      <Modal
        visible={
          showModal ||
          showInstructions ||
          showEvolveModal ||
          showCongratsBackground
        }
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        onRequestClose={() => {
          setShowModal(false);
          setShowInstructions(false);
          setShowEvolveModal(false);
          setShowCongratsBackground(false);
        }}
      >
        <View style={styles.modalContainer}>
          {showInstructions && (
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
          )}

          {showEvolveModal && (
            <View style={styles.evolveModalContainer}>
              <View style={styles.evolveModal}>
                <View style={styles.evolveModalContent}>
                  <EvolveAnimation
                    currentImage={currentPlant.currentStageImage}
                    nextImage={currentPlant.previousStageImage}
                    style={{ bottom: "100%" }}
                  />

                  <GameText style={styles.evolveMessage}>
                    {`Oh, what's this..? Wow! You have reached ${plantsConfig[plant].name} Mastery ${masteryLevel}!`}
                  </GameText>
                  <TouchableScale
                    style={styles.evolveModalButton}
                    onPress={() => {
                      setShowEvolveModal(false);
                      navigation.navigate("Home", { updatedList: updatedList });
                    }}
                  >
                    <GameText style={styles.evolveModalButtonText}>
                      Close
                    </GameText>
                  </TouchableScale>
                </View>
              </View>
            </View>
          )}

          {showCongratsBackground && (
            <View style={styles.modalContainer}>
              <View style={styles.congratsModalView}>
                <GameText style={styles.congratsText}>
                  Great job! You've passed {currentPlant} level {currentLevel}!
                </GameText>
                <GameText style={styles.rewardMessage}>
                  {feedbackMessage}
                </GameText>
                <TouchableScale
                  onPress={handleGoHome}
                >
                  <ImageBackground source={textBox} style={styles.textBox}>
                    <GameText style={styles.congratsButtonText}>
                      Back to Home
                    </GameText>
                  </ImageBackground>
                </TouchableScale>
              </View>
            </View>
          )}
        </View>
      </Modal>

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
            left: "66%",
            top: heartsAndCoinsTop,
            zIndex: 2,
          }}
        >
          <HeartsDisplay />
        </TouchableScale>
        <TouchableScale
          style={{
            position: "absolute",
            left: "82%",
            top: heartsAndCoinsTop,
            zIndex: 1,
          }}
        >
          <CoinDisplay />
        </TouchableScale>
        {renderGameOverModal()}
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
    zIndex: 1,
  },
  congratsModalView: {
    zIndex: 1,
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
  congratsButtonText: {
    fontSize: buttonFontSize,
    alignContent: "center",
    color: "#333",
    margin: "10%",
    alignSelf: "center",
    textAlign: "center",
    width: "100%",
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
  evolveMessage: {
    fontSize: textSize,
    color: "orange",
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: { width: -1, height: 1 },
    textAlign: "center",
    padding: "5%",
    lineHeight: 26,
  },
  feedbackText: {
    fontSize: textSize,
    color: "red",
    marginBottom: 20,
  },
  evolveModalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  evolveModal: {
    backgroundColor: "#f0f0f0", // A light background color
    padding: 20,
    borderRadius: 25,
    width: deviceWidth * 0.8, // 80% of device width
    height: deviceHeight * 0.6,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    borderWidth: 4, // Border width (if needed)
    borderColor: "darkgray", // Border color (if needed)
  },
  evolveModalContent: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  evolveModalButton: {
    top: "3%",
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    backgroundColor: "grey",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 3.84,
  },

  evolveModalButtonText: {
    top: "10%",
    padding: 5,
    fontSize: RFValue(12),
    color: "white",
    textAlign: "center",
  },
});

export default QuizScreen;
