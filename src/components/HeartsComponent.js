import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { usePlayerConfig } from "../states/playerConfigContext";
import GameText from "../styles/GameText";
const heartIcon = require("../assets/icons/hearts_icon.png");

const HeartsDisplay = ({ style }) => {
  
  const textColor = hearts === 0 ? "black" : "white";
  const shadowColor = hearts === 0 ? "white" : "black";

  const { level, getUnlockedRooms, hearts, increaseHearts } = usePlayerConfig();

  const increasePlayerHearts = () => {
    if (hearts < 5) {
      increaseHearts();
    }
  };
  
  useEffect(() => {
    const interval = setInterval(increasePlayerHearts, 60*60000); // Call increasePlayerHearts every 15 minute (60*60,000 milliseconds)
    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={[styles.container, style]}>
      <Image
        source={heartIcon}
        style={{ width: 40, height: 40, position: "absolute" }}
      />
      <GameText
        style={[
          styles.text,
          { color: textColor, textShadowColor: shadowColor },
        ]}
      >
        {hearts}
      </GameText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "32%",
    left: "4.5%",
  },
  text: {
    fontSize: 16,
    position: "absolute",
    left: 37,
    top: 27,
    textShadowRadius: 1,
    textShadowOffset: { width: -1, height: 1 },
  },
});

export default HeartsDisplay;
