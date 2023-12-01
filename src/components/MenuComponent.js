// MenuComponent.js
import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, NativeModules } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import GameText from "../styles/GameText";

const MenuComponent = ({ menuVisible, closeMenu }) => {
  const navigation = useNavigation();

  const clearData = async () => {
    try {
      await AsyncStorage.getAllKeys()
        .then(keys => AsyncStorage.multiRemove(keys))
        .then(() => console.log('AsyncStorage successfully cleared!'));
    } catch (e) {
      console.error(e);
    }
  };

  let navigationCounter = 0;

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
          {/*<TouchableOpacity*/}
          {/*  onPress={() => {*/}
          {/*    navigation.navigate("CollectionScreen", {screen:"CollectionScreen",params:{timestamp:navigationCounter++}});*/}
          {/*    closeMenu();*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <GameText style={styles.menuItem}>Collection</GameText>*/}
          {/*</TouchableOpacity>*/}
          {/*<TouchableOpacity*/}
          {/*  onPress={() => {*/}
          {/*    navigation.navigate("Mastery");*/}
          {/*    closeMenu();*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <GameText style={styles.menuItem}>Game Stats</GameText>*/}
          {/*</TouchableOpacity>*/}
          <GameText style={styles.menuItem}>Shop</GameText>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Settings");
              closeMenu();
            }}
          >
            <GameText style={styles.menuItem}>Settings</GameText>
          </TouchableOpacity>
          <GameText style={styles.menuItem}>Account</GameText>
          <TouchableOpacity
            onPress={() => {
              clearData();
              NativeModules.DevSettings.reload();
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
    width: "80%",
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
    marginBottom: 30,
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
