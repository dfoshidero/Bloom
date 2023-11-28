// CoinComponent.js

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { usePlayerConfig } from "../states/playerConfigContext";
import GameText from "../styles/GameText";

const coinIcon = require("../assets/icon_container.png");

const CoinDisplay = ({ style }) => {
  const { playerConfig } = usePlayerConfig();
  const textColor = playerConfig.coins === 0 ? "black" : "white";
  const shadowColor = playerConfig.coins === 0 ? "white" : "black";

  return (
    <View style={[styles.container, style]}>
      <Image
        source={coinIcon}
        style={{ width: 60, height: 60, position: "absolute" }}
      />
      <GameText
        style={[
          styles.text,
          { color: textColor, textShadowColor: shadowColor },
        ]}
      >
        {playerConfig.coins}
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
    left: "15%", // Adjust the position as needed
  },
  text: {
    fontSize: 20,
    position: "absolute",
    left: 37,
    top: 27,
    textShadowRadius: 1,
    textShadowOffset: { width: -1, height: 1 },
  },
});

export default CoinDisplay;
