import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
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
      learned: plant.learned,
      type: plant.type,
      colours: plant.colours,
      height: plant.height,
      careIntructions: plant.careIntructions,
      //and more
    };
  });

  return Promise.resolve(masteryLevels);
};

const GameStatsScreen = () => {
  const [plantDetailVisible, setPlantDetailVisible] = useState(false);

  const show_plantdetails = () => {
    setPlantDetailVisible(!plantDetailVisible);
  }

  const close_plantdetails = () => {
    if (plantDetailVisible) {
      setPlantDetailVisible(false);
    }
  }
  const [masteryLevels, setMasteryLevels] = useState([]);

  useEffect(() => {
    fetchMasteryLevels().then(setMasteryLevels);
  }, []);


  const renderMasteryItem = ({ item }) => (
    
    <TouchableOpacity style={[
      styles.itemContainer,
      item.learned ? styles.itemContainer_unlocked : styles.itemContainer_locked,
    ]} onPress={item.learned ? show_plantdetails : null}>


      <Modal
        animationType="fade"
        transparent={true}
        visible={plantDetailVisible}
        onPressOut={show_plantdetails}
      >
        <TouchableOpacity style={styles.backgroundImage} onPress={close_plantdetails}>

          {/*Contents in the menu*/}
          <View style={styles.plantDetailsContainer}>
            {/*image add later*/}
            <Text style={styles.plantDetailsItem}>Height: {item.height}</Text>
            <Text style={styles.plantDetailsItem}>Type: {item.type}</Text>
            <View style = {styles.multiItemContainer}>
              <Text style={styles.plantDetailsItem}>Colors: </Text>{item.colours.map((color, index) => (<Text key={color} style={styles.plantDetailsItem}>{color}{index !== item.colours.length - 1 ? ", " : ""}</Text>))}
            </View>
            <Text style={styles.plantDetailsItem}>Care Instructions:</Text>{Object.entries(item.careIntructions).map(([key, instruction]) => (<Text key={key} style={styles.plantDetailsItem}>{`${key}: ${instruction}`}</Text>))}

          </View>

        </TouchableOpacity>
      </Modal>
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
  itemContainer_unlocked: {
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
  itemContainer_locked: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#BFBFBF",
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
  plantDetailsContainer: {
    paddingLeft: 30,
    top: "30%", //added these few lines to align to the center
    left: "10%", //added these few lines to align to the center
    right: "10%", //added these few lines to align to the center
    width: "80%", //original 100%
    opacity: 0.7,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 30, //80 originally
    paddingBottom: 20, //10 originally
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
  plantDetailsItem: {
    marginBottom: 10,
    fontSize: 10,
    textAlign: "left",
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha value to control darkness
  },
  multiItemContainer: {
    flexDirection: 'row',
  },
});

export default GameStatsScreen;
