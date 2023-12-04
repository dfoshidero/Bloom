import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { usePlayerConfig } from "../states/playerConfigContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GameText from "../styles/GameText";

const heartIcon = require("../assets/icons/hearts_icon.png");

const HeartsDisplay = ({ style }) => {
  const { hearts, increaseHearts } = usePlayerConfig();
  const [timer, setTimer] = useState(3600);

  const textColor = hearts === 0 ? "black" : "white";
  const shadowColor = hearts === 0 ? "white" : "black";

  const increasePlayerHearts = () => {
    if (hearts < 5) {
      increaseHearts();
      setTimer(3600);
    }
  };

  const loadLastSessionData = async () => {
    try {
      const lastTime = await AsyncStorage.getItem("lastTime");
      const currentTime = new Date().getTime();

      if (lastTime !== null) {
        const timePassed = Math.floor(
          (currentTime - parseInt(lastTime)) / 1000
        );
        let heartIncreases = Math.floor(timePassed / 3600);

        // Ensure that the total number of hearts does not exceed 5
        heartIncreases = Math.min(heartIncreases, 5 - hearts);

        for (let i = 0; i < heartIncreases; i++) {
          increasePlayerHearts();
        }

        // Update remaining time for next heart increase
        const remainingTime = 3600 - (timePassed % 3600);
        setTimer(remainingTime);
      } else {
        // Default to an hour if no data is found
        setTimer(3600);
      }
    } catch (e) {
      console.error("Error reading last session data: ", e);
    }
  };

  useEffect(() => {
    loadLastSessionData();

    const timerInterval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    const heartInterval = setInterval(increasePlayerHearts, 3600000);

    return () => {
      clearInterval(timerInterval);
      clearInterval(heartInterval);
      AsyncStorage.setItem("lastTime", new Date().getTime().toString());
      AsyncStorage.setItem("savedTimer", timer.toString());
    };
  }, [hearts]); // Add hearts as a dependency to re-run effect when it changes

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
