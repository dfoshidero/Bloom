// CoinComponent.js

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { usePlayerConfig } from "../states/playerConfigContext";
import GameText from "../styles/GameText";

const coinIcon = require("../assets/icons/coin_icon.png");

const CoinDisplay = ({ style }) => {
  const { coins } = usePlayerConfig();
  const textColor = coins === 0 ? "black" : "white";
  const shadowColor = coins === 0 ? "white" : "black";

  return (
    <View style={[styles.container, style]}>
      <Image
        source={coinIcon}
        style={{ width: 45, height: 45, position: "absolute" }}
      />
      <GameText
        style={[
          styles.text,
          { color: textColor, textShadowColor: shadowColor },
        ]}
      >
        {coins}
      </GameText>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
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
});

export default CoinDisplay;
