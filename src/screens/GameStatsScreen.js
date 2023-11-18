import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import {plants} from "../states/plantsConfig";

 // Mock data original code in case if can't solve
 /*return Promise.resolve([
  { id: "1", name: "Ficus", level: "Beginner", progress: 0.3 },
  { id: "2", name: "Monstera", level: "Intermediate", progress: 0.5 },
  { id: "3", name: "Succulent", level: "Advanced", progress: 0.8 },
  // ... more plants
]);*/

// This is a mock function that should ideally fetch the mastery levels from your backend or state management store.
const fetchMasteryLevels = () => {
  if (!plants) {
    return Promise.reject("Plants data is undefined");
  }

  const masteryLevels = Object.values(plants).map((plant) => {
    return {
      id: plant.plantID,
      name: plant.name,
      level: plant.level,
      progress: plant.progress,
    };
  });

  return Promise.resolve(masteryLevels);
};

const GameStatsScreen = () => {
  const [masteryLevels, setMasteryLevels] = useState([]);

  useEffect(() => {
    fetchMasteryLevels().then(setMasteryLevels);
  }, []);

  const renderMasteryItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.plantName}>{item.name}</Text>
      <Text style={styles.level}>{item.level}</Text>
      {/* Progress can be represented by a simple view or a progress bar component */}
      <View style={styles.progressBarBackground}>
        <View
          style={[styles.progressBarFill, { width: `${item.progress * 100}%` }]}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plant Mastery Levels</Text>
      <FlatList
        data={masteryLevels}
        renderItem={renderMasteryItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

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
  level: {
    fontSize: 14,
    color: "#666",
  },
  progressBarBackground: {
    height: 20,
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginTop: 10,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "green",
    borderRadius: 10,
  },
});

export default GameStatsScreen;
