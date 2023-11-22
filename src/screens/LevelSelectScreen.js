import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import LevelsConfig from "../states/levelsConfig";

const LevelSelectionScreen = ({ navigation, route }) => {
  const { selectedPlantID } = route.params; // Renamed for clarity
  const plantLevels = LevelsConfig[selectedPlantID]; // Using ID to access levels

  const renderItem = ({ item }) => (
    <TouchableScale
      onPress={() =>
        navigation.navigate("QuizScreen", {
          plant: selectedPlantID, // Passing the plant ID
          level: `level${item}`,
        })
      }
      style={[
        styles.levelContainer,
        plantLevels.completedLevels.includes(item)
          ? styles.completedLevel
          : styles.incompleteLevel,
      ]}
    >
      <Text style={styles.levelText}>Level {item}</Text>
      <View style={styles.iconContainer}>
        {plantLevels.completedLevels.includes(item) && (
          <View style={styles.completedIcon} />
        )}
      </View>
    </TouchableScale>
  );

  return (
    <FlatList
      data={Array.from({ length: plantLevels.totalLevels }, (_, i) => i + 1)}
      renderItem={renderItem}
      keyExtractor={(item) => `level${item}`}
      numColumns={2}
      contentContainerStyle={styles.grid}
    />
  );
};

// Enhanced StyleSheet
const styles = StyleSheet.create({
  grid: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#f4f4f4",
  },
  levelContainer: {
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 15,
    margin: 10,
    width: 160,
    height: 100, // Fixed height for consistency
    alignItems: "center",
    justifyContent: "space-between", // Distribute space between text and icon
    elevation: 4,
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
  },
  completedLevel: {
    backgroundColor: "#d4edda",
  },
  incompleteLevel: {
    backgroundColor: "#f8d7da",
  },
  levelText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  iconContainer: {
    // Container for the icon to ensure alignment
    height: 20, // Fixed height for the icon container
    justifyContent: "center",
    alignItems: "center",
  },
  completedIcon: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "green",
  },
});

export default LevelSelectionScreen;
