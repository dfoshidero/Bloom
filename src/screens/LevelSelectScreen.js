import React from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import LevelsConfig from "../states/levelsConfig";
import { usePlayerConfig } from "../states/playerConfigContext"; // Import the usePlayerConfig hook

const LevelSelectionScreen = ({ navigation, route }) => {
  const { id, selectedPlantID } = route.params;
  const plantLevels = LevelsConfig[selectedPlantID];
  console.log("plant levels", plantLevels);
  // Access player config using the usePlayerConfig hook
  const { playerConfig } = usePlayerConfig();

  // Function to handle press on a level
  const handlePress = (item) => {
    console.log("item ", item);
    // Check if the player has hearts remaining
    if (playerConfig.hearts > 0) {
      // Check if the clicked level is completed
      if (plantLevels.completedLevels.includes(item - 1) || item === 1) {
        navigation.navigate("QuizScreen", {
          id: id,
          plant: selectedPlantID,
          level: `level${item}`,
        });
      } else {
        // Show an alert if the previous level is not completed
        Alert.alert("Level Locked", "Complete the previous level to unlock.");
      }
    } else {
      // Show an alert if the player has no hearts
      Alert.alert("No Hearts Left", "You need more hearts to start a quiz!");
    }
  };

  const renderItem = ({ item }) => (
    <TouchableScale
      onPress={() => handlePress(item)}
      style={[
        styles.levelContainer,
        styles.lockedLevel,
        item === 1 ? styles.incompleteLevel : null,
        plantLevels.completedLevels.includes(item)
          ? styles.completedLevel
          : null,
        item === plantLevels.completedLevels.length + 1
          ? styles.incompleteLevel
          : null,
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
  lockedLevel: {
    backgroundColor: "#808080",
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
