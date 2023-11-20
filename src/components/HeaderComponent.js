import React from "react";
import { View, Image, StyleSheet, StatusBar } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/header/header.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute", // Set the position to absolute
    width: "100%",
    bottom: 250,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: 999,
    pointerEvents: "none",
  },
  image: {
    width: 350,
    resizeMode: "contain",
  },
});

export default Header;
