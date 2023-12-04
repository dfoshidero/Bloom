import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  NativeModules,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GameText from "../styles/GameText";
import TouchableScale from "react-native-touchable-scale";

// Context variables
import { usePlantContext } from "../states/plantsDataContext";
import { useProgressContext } from "../states/speciesProgressContext";
import { usePlayerConfig } from "../states/playerConfigContext";
import { useCompletedLevelsContext } from "../states/completedLevelsContext";

const MenuComponent = ({ menuVisible, closeMenu }) => {
  const navigation = useNavigation();

  const { updatePlantData } = usePlantContext();
  const { speciesProgress, updateSpeciesProgress } = useProgressContext();
  const { resetPlayerConfig } = usePlayerConfig();
  const { completedLevels, updateCompletedLevels } =
    useCompletedLevelsContext();

  // State for confirmation modal visibility
  const [isConfirmModalVisible, setConfirmModalVisible] = useState(false);

  const clearData = async () => {
    setConfirmModalVisible(false); // Hide the confirmation modal

    try {
      await AsyncStorage.getAllKeys()
        .then((keys) => AsyncStorage.multiRemove(keys))

      updatePlantData([]);
      resetPlayerConfig();
      Object.keys(speciesProgress).forEach((key) =>
        updateSpeciesProgress(key, 0)
      );
      Object.keys(completedLevels).forEach((key) =>
        updateCompletedLevels(key, 0)
      );

      setTimeout(() => {
        NativeModules.DevSettings.reload();
      }, 500);
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
      <TouchableScale
        style={styles.backgroundImage}
        activeOpacity={1}
        onPressOut={closeMenu} // Use onPressOut
      >
        {/* Prevent touches on the menu container from closing the menu */}
        <TouchableOpacity
          activeOpacity={1}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <View style={styles.menuContainer}>
            <GameText style={styles.menuItem}>Achievements</GameText>
            <GameText style={styles.menuItem}>Account</GameText>
            <TouchableScale
              onPress={() => {
                navigation.navigate("Settings");
                closeMenu();
              }}
            >
              <GameText style={styles.menuItem}>Settings</GameText>
            </TouchableScale>
            <TouchableScale onPress={() => setConfirmModalVisible(true)}>
              <GameText style={styles.menuItem}>Reset Game</GameText>
            </TouchableScale>
          </View>
        </TouchableOpacity>
      </TouchableScale>

      {/* Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isConfirmModalVisible}
        onRequestClose={() => setConfirmModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.confirmationModalView}>
            <GameText style={styles.modalText}>
              Are you sure? Doing this will reset all your data.
            </GameText>
            <TouchableScale
              style={{ ...styles.button, backgroundColor: "lightgreen" }}
              onPress={clearData}
            >
              <GameText style={styles.textStyle}>Yes, Reset</GameText>
            </TouchableScale>
            <TouchableScale
              style={{ ...styles.button, backgroundColor: "darkgreen" }}
              onPress={() => setConfirmModalVisible(false)}
            >
              <GameText style={styles.textStyle}>Cancel</GameText>
            </TouchableScale>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent background
  },
  confirmationModalView: {
    margin: 20,
    backgroundColor: "#f0f0f0", // Example background color, adjust as needed
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: "70%",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18, // Adjust font size as per your game style
    color: "#333", // Adjust text color as per your game style
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 16, // Adjust font size as per your game style
  },
});

export default MenuComponent;
