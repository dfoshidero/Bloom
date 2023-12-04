import React, { useEffect, useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { usePlayerConfig } from "../states/playerConfigContext";
import GameText from "../styles/GameText";

const heartIcon = require("../assets/icons/hearts_icon.png");

const HeartsDisplay = ({ style }) => {
  const { hearts, timer } = usePlayerConfig(); // Use timer from context

  const textColor = hearts === 0 ? "black" : "white";
  const shadowColor = hearts === 0 ? "white" : "black";

  // Format timer for display
  const formatTimer = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

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
      {hearts < 5 && (
        <View style={{ position: "absolute", textColor: "white" }}>
          <GameText style={styles.timerText}>{formatTimer()}</GameText>
        </View>
      )}
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
  timerText: {
    fontSize: 12,
    position: "absolute",
    color: "white",
    top: 20,
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: { width: -1, height: 1 },
  },
});

export default HeartsDisplay;
