// BackgroundImageComponent.js
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Plant from "./PlantComponent"; // Adjust the import path as needed

import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const BackgroundImageComponent = ({ updatedList, backgroundImage, plantPositions }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      {plantPositions.map((position) => (
        <Plant
          updatedList = {updatedList}
          key={position.id}
          id={position.id}
          style={{
            position: "absolute",
            bottom: position.bottom,
            left: position.left,
          }}
        />
      ))}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "contain",
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
  },
});

export default BackgroundImageComponent;
