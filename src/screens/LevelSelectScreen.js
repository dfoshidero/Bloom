import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import LevelsConfig from "../states/levelsConfig";

const LevelSelectionScreen = ({ navigation, route }) => {
  const { selectedPlant } = route.params;
  const plantLevels = LevelsConfig[selectedPlant];

  const renderLevel = (level, isCompleted) => (
    <TouchableScale
      key={level}
      onPress={() =>
        navigation.navigate("QuizScreen", { selectedPlant, level })
      }
      style={styles.levelContainer}
    >
      <Text style={styles.levelText}>Level {level}</Text>
      {isCompleted && <Text style={styles.completedIcon}>✓</Text>}
    </TouchableScale>
  );

  return (
    <View style={styles.container}>
      {Array.from({ length: plantLevels.totalLevels }, (_, i) =>
        renderLevel(i + 1, plantLevels.completedLevels.includes(i + 1))
      )}
    </View>
  );
};

// Add a StyleSheet for styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  levelContainer: {
    backgroundColor: "#eaeaea", // Light grey background
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 3, // for Android shadow
    shadowOpacity: 0.3, // for iOS shadow
    shadowRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
  },
  levelText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333", // Dark text color
  },
  completedIcon: {
    fontSize: 18,
    color: "green",
    marginTop: 5,
  },
});

export default LevelSelectionScreen;
