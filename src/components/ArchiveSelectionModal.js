// PlantSelectionModal.js
import React, { useState, useEffect } from "react";
import { Modal, ScrollView, Text, View, Image } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { plants } from "../states/plantsConfig";
import styles from "../styles/PlantStyles";
import AsyncStorage from '@react-native-async-storage/async-storage';

const SelectFromArchiveModal = ({ visible, onClose, handleSelectPlant, handleRemoveFromArchive }) => {

  const [archivedPlants, setArchivedPlants] = useState([]);

  const loadSavedPlantData = async () => {
    try {
      //Load all saved plant data
      const savedPlantsJSON = await AsyncStorage.getItem('savedPlants');
      const savedPlants = JSON.parse(savedPlantsJSON);
      
      if (savedPlants) {
        //Get only those saved plants which are in the archive
        let mySavedPlants = savedPlants.filter(plant => plant.archiveID !== "null");
        //Add iconPath and name
        for (let i = 0; i < mySavedPlants.length; i++) {
          let plantSpecies = plants[parseInt(mySavedPlants[i].plantID)];
          mySavedPlants[i].name = plantSpecies.name;
          mySavedPlants[i].iconPath = plantSpecies.iconPath;
        }
        setArchivedPlants(mySavedPlants)
      }
    } catch (error) {
      console.log('Error loading saved plant data:', error);
    }
  }

  //Updates saved plants
  useEffect(() => {
    loadSavedPlantData();
  }, [visible]);

  return (
    <Modal
        visible={visible}
        transparent
        animationType="slide"
      >
        <TouchableScale
          style={styles.modalSelectPlantOverlay}
          onPressOut={onClose}
        >
          <View style={styles.modalSelectPlantView}>
            <ScrollView horizontal={true} style={styles.scrollViewStyle}>
              {Object.entries(archivedPlants).map(([key, plant]) => (
                <TouchableScale
                  key={plant.archiveID}
                  onPress={() => {
                    handleRemoveFromArchive(archiveID = plant.archiveID, plant.plantID);
                  }}
                >
                  <View style={styles.plantCard}>
                    <Image
                      source={plant.iconPath}
                      style={{ width: "80%", height: "80%" }}
                    />
                    <Text>{plant.name}</Text>
                  </View>
                </TouchableScale>
              ))}
            </ScrollView>
          </View>
        </TouchableScale>
      </Modal>
  );
};
      
export default SelectFromArchiveModal;
