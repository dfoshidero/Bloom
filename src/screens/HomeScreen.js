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

import { backgrounds } from "../states/backgroundsConfig";
import PlantPosition from "../components/PlantPosition";

const HomeScreen = () => {
  const [currentBackground, setCurrentBackground] = useState(
    backgrounds.background4
  );
  const backgroundImage = currentBackground.image;
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

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

      <Modal
        animationType="slide"
        transparent={true}
        visible={menuVisible}
        onPressOut={toggleMenu}
      >
      <TouchableOpacity
        style={styles.backgroundImage}
        onPress={closeMenu}
      >
        <View style={styles.menuContainer}>
          <Text style={styles.menuItem}>Achievements</Text>
          <Text style={styles.menuItem}>Collection</Text>
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
                top: position.top,
                left: position.left,
              }}
            />
          ))}
        </ImageBackground>
    </View>
  );
};

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
    opacity: 0.7,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 80,
    paddingBottom: 10,
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
    width: "100%",
    height: "100%",
  },
});

export default HomeScreen;
