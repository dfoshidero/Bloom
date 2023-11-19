import React from "react";
import { View, Image, StyleSheet } from "react-native";

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
    bottom: 250,
    width: "100%",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: 1,
  },
  image: {
    width: 350,
    resizeMode: "contain",
  },
});

export default Header;
