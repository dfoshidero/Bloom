// MenuComponent.js
import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, NativeModules } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import GameText from "../styles/GameText";

// Context variables all need to be reset when you clear data
import { usePlantContext } from "../states/plantsDataContext";
import { useProgressContext } from "../states/speciesProgressContext";
import { usePlayerConfig } from "../states/playerConfigContext";
import { useCompletedLevelsContext } from "../states/completedLevelsContext";

const MenuComponent = ({ menuVisible, closeMenu }) => {
  const navigation = useNavigation();

  const { updatePlantData } = usePlantContext();
  const { speciesProgress, updateSpeciesProgress } = useProgressContext();
  const { resetPlayerConfig } = usePlayerConfig();
  const { completedLevels, updateCompletedLevels } = useCompletedLevelsContext();

  const clearData = async () => {
    try {
      // Clear AsyncStorage first
      await AsyncStorage.getAllKeys()
        .then((keys) => AsyncStorage.multiRemove(keys))
        .then(() => console.log("AsyncStorage successfully cleared!"));

      // Then reset context variables
      updatePlantData([]);
      resetPlayerConfig();
      Object.keys(speciesProgress).forEach((key) =>
        updateSpeciesProgress(key, 0)
      );
      Object.keys(completedLevels).forEach((key) =>
        updateCompletedLevels(key, 0)
      );

      // Wait for a moment before reloading the app
      setTimeout(() => {
        NativeModules.DevSettings.reload();
      }, 500); // increased delay to ensure completion
    } catch (e) {
      console.error("Error clearing data:", e);
    }
  };


  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={menuVisible}
      onRequestClose={closeMenu}
    >
      <TouchableOpacity style={styles.backgroundImage} onPress={closeMenu}>
        <View style={styles.menuContainer}>
          <GameText style={styles.menuItem}>Achievements</GameText>
          <GameText style={styles.menuItem}>Account</GameText>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Settings");
              closeMenu();
            }}
          >
            <GameText style={styles.menuItem}>Settings</GameText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              clearData();
            }}
          >
            <GameText style={styles.menuItem}>Reset Game</GameText>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    width: "65%",
    opacity: 0.7,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    margin: 20,
    fontSize: 18,
    textAlign: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MenuComponent;
