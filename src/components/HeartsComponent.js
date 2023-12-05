import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { usePlayerConfig } from "../states/playerConfigContext";
import GameText from "../styles/GameText";
import Countdown from "react-countdown";

const heartIcon = require("../assets/icons/hearts_icon.png");

const HeartsDisplay = ({ style }) => {
  const { hearts, timer, increaseHearts } = usePlayerConfig();

  const textColor = hearts === 0 ? "black" : "white";
  const shadowColor = hearts === 0 ? "white" : "black";

  const onTimerComplete = () => {
  };

  const renderer = ({ minutes, seconds }) => {
    // Format time as MM:SS
    return (
      <GameText style={styles.timerText}>
        {`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`}
      </GameText>
    );
  };

  return (
    <View style={[styles.container, style]}>
      <Image source={heartIcon} style={styles.heartIcon} />
      <GameText
        style={[
          styles.text,
          { color: textColor, textShadowColor: shadowColor },
        ]}
      >
        {hearts}
      </GameText>
      {hearts < 5 && (
        <Countdown
          date={Date.now() + timer * 1000}
          onComplete={onTimerComplete}
          renderer={renderer}
        />
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
  heartIcon: {
    width: 40,
    height: 40,
    position: "absolute",
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
    fontSize: 10,
    position: "absolute",
    color: "white",
    top: 46,
    left: 25,
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: { width: -1, height: 1 },
  },
});

export default HeartsDisplay;
