import {
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState, useEffect } from "react";
import Plant from "../components/PlantComponent";
import menuBackgroundImage from '../assets/backgrounds/misc/menu_bg.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CollectionScreen = () => {

  const [archivedPlants, setArchivedPlants] = useState([]);

  const loadSavedPlantData = async () => {
    try {
      const savedPlantsJSON = await AsyncStorage.getItem('savedPlants');
      const savedPlants = JSON.parse(savedPlantsJSON);
  
      if (savedPlants) {
        setArchivedPlants(savedPlants);
      }
    } catch (error) {
      console.log('Error loading saved plant data:', error);
    }
  };

  useEffect(() => {
    loadSavedPlantData();
  });

  //Renders each plant as an item in the list
  const renderArchivedPlant = (plant) => {
    return (
    <Plant
      id={plant.item.plantID}
      style = {{
        left:"43%",
        height: "20%"
      }}
    />
    )
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={menuBackgroundImage} style={styles.backgroundImage_bg}></ImageBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Collection</Text>
      </View>
      <View style={height=10}>
        <FlatList
            data={archivedPlants}
            renderItem={renderArchivedPlant}
            keyExtractor={(item) => item.id}
            style={{top:"20%"}}
        />
      </View>
    </View>
  );
};

//Copied from GameStatsScreen.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "top",
  },
  titleContainer: {
    top: "20%"
  },
  masteryContainer: {
    top: "20%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff"
  },
  plantName: {
    fontWeight: "bold",
    fontSize: 24,
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
  plantImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  imageContainer: {
    left: "0%", //added these few lines to align to the center
    right: "0%", //added these few lines to align to the center
  },
  plantDetailsContainer: {
    alignItems: 'center',
    top: "20%", //added these few lines to align to the center
    left: "10%", //added these few lines to align to the center
    right: "10%", //added these few lines to align to the center
    width: "80%", //original 100%
    opacity: 0.9,
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
  plantDetailsTextContainer:{
    top: "1%",
    alignItems: 'center',
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
    textAlign: "center",
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
    alignItems: 'center',
    flexDirection: 'row',
  },
  backgroundImage_bg: {
    resizeMode: "contained",
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    opacity: 0.7,
  },
});

export default CollectionScreen;