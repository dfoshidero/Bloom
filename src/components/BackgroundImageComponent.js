// BackgroundImageComponent.js
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import PlantPosition from "./PlantPositionComponent"; // Adjust the import path as needed

const BackgroundImageComponent = ({ backgroundImage, plantPositions }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      {plantPositions.map((position) => (
        <PlantPosition
          key={position.id}
          style={{
            position: "absolute",
            bottom: position.bottom,
            left: position.left,
            zIndex: 5,
          }}
        />
      ))}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
  },
});

export default BackgroundImageComponent;
