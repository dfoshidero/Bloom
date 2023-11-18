// MenuComponent.js
import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MenuComponent = ({ menuVisible, closeMenu }) => {
  const navigation = useNavigation();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={menuVisible}
      onRequestClose={closeMenu}
    >
      <TouchableOpacity style={styles.backgroundImage} onPress={closeMenu}>
        <View style={styles.menuContainer}>
          <Text style={styles.menuItem}>Achievements</Text>
          <Text style={styles.menuItem}>Collection</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Mastery");
              closeMenu();
            }}
          >
            <Text style={styles.menuItem}>Game Stats</Text>
          </TouchableOpacity>
          <Text style={styles.menuItem}>Shop</Text>
          <Text style={styles.menuItem}>Account</Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    top: "30%",
    left: "10%",
    right: "10%",
    width: "80%",
    opacity: 0.7,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 30,
    paddingBottom: 20,
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MenuComponent;
