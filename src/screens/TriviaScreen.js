import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
// This is a mock function that should ideally fetch the mastery levels from your backend or state management store.

import {trivia_list} from "../states/plantsTriviaConfig";



/*const fetchMasteryLevels = () => {
  // Mock data
  return Promise.resolve([
    { level: "1", name: "Level 1" },
    { level: "2", name: "Level 2" },
    { level: "3", name: "Level 3" },
    // ... more plants
  ]);
};*/

const fetchMasteryLevels = () => {
    if (!trivia_list) {
        return Promise.reject("Plants data is undefined");
      }
    
      const masteryLevels = Object.values(trivia_list).map((trivium) => {
        return {
          id: trivium.plantID,
          name: trivium.name,
          trivia: trivium.trivia,
          //and more
        };
      });
    
      return Promise.resolve(masteryLevels);
      
  };
  

const MasteryScreen = () => {
  const [masteryLevels, setMasteryLevels] = useState([]);
  useEffect(() => {
    fetchMasteryLevels().then(setMasteryLevels);
  }, []);
  const renderMasteryItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.plantName}>{item.name}</Text>

      {/* Progress can be represented by a simple view or a progress bar component */}
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plant Mastery Levels</Text>
      <FlatList
        data={masteryLevels}
        renderItem={renderMasteryItem}
        keyExtractor={(item) => item.level}
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
export default MasteryScreen;