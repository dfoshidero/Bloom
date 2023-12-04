// BackgroundImageComponent.js
import React from "react";
import { useContext } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Plant from "./PlantComponent";
import { PlantDataContext } from "../states/plantsDataContext";


import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const TwoDimSpace = ({ backgroundImage, plantPositions, roomID }) => {
  const { plantData } = useContext(PlantDataContext);

  const plantsForCurrentRoom = plantData.filter(
    (plant) => plant.backgroundID === roomID.toString()
  );

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      {plantPositions.map((position) => {
        const plant = plantsForCurrentRoom.find(
          (p) => p.plantPositionID === position.id.toString()
        );
        return (
          <Plant
            key={position.id}
            id={position.id.toString()}
            selectedPlant={plant}
            currentBackgroundID={roomID.toString()}
            style={{
              position: "absolute",
              bottom: position.bottom,
              left: position.left,
            }}
          />
        );
      })}
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

export default TwoDimSpace;
