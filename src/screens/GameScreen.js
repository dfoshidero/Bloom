import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  StatusBar,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

import { backgrounds } from "../states/backgroundsConfig"; //import backgroundattributes to the game screen
import PlantPosition from "../components/PlantPosition"; //import plant position attributes to the game screen

const GameScreen = () => {
  //set up background image to loop through (useState is use to indicate which background is the current one)
  const [currentBackground, setCurrentBackground] = useState(
    backgrounds.background4
  );
  const backgroundImage = currentBackground.image;
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  //functions to toggle menu (upper left corner) visibility 
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const closeMenu = () => {
    if (menuVisible) {
      setMenuVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsIcon} onPress={toggleMenu}>
        <Icon name="bars" size={40} color="black" />
      </TouchableOpacity>
      {/*Menu button*/}
      <Modal
        animationType="Slide"
        transparent={true}
        visible={menuVisible}
        onPressOut={toggleMenu}
      >
      <TouchableOpacity
        style={styles.backgroundImage}
        onPress={closeMenu}
      >
        {/*Contents in the menu*/}
        <View style={styles.menuContainer}>
          <Text style={styles.menuItem}>Achievements</Text>
          <Text style={styles.menuItem}>Collection</Text>
          <TouchableOpacity onPress={() => {navigation.navigate("Mastery");closeMenu()}}>
            <Text style={styles.menuItem}>Game Stats</Text> 
          </TouchableOpacity>
          <Text style={styles.menuItem}>Shop</Text>
          <Text style={styles.menuItem}>Account</Text>
        </View>

      </TouchableOpacity>
      </Modal>

      {/* Game interface!!! */}
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        >
          {currentBackground.plantPositions.map((position) => (
            <PlantPosition
              key={position.id}
              style={{
                position: "absolute",
                bottom: position.bottom,
                left: position.left,
              }}
            />
          ))}
        </ImageBackground>
    </View>
  );
};


//formatting of the game screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsIcon: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight + 15 : 60,
    left: 25,
    zIndex: 1,
  },
  menuContainer: {
    position: "absolute", //added these 2 lines to align with the meniu button itself
    top: Platform.OS === "android" ? StatusBar.currentHeight + 15 : 60, //added these 2 lines to align with the meniu button itself
    width: "100%",
    opacity: 0.7,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 30, //80 originally
    paddingBottom: 20, //10 originally
    alignItems: "center",
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
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
  },
});

export default GameScreen;
