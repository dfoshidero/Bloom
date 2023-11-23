import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { usePlayerConfig } from "../states/playerConfigContext";

const heartIcon = require("../assets/icons/hearts_icon.png");

const HeartsDisplay = ({ style }) => {
  const { playerConfig } = usePlayerConfig();
  const textColor = playerConfig.hearts === 0 ? "black" : "white";
  const shadowColor = playerConfig.hearts === 0 ? "white" : "black";

  return (
    <View style={[styles.container, style]}>
      <Image
        source={heartIcon}
        style={{ width: 38, height: 38, position: "absolute" }}
      />
      <Text
        style={[
          styles.text,
          { color: textColor, textShadowColor: shadowColor },
        ]}
      >
        {playerConfig.hearts}
      </Text>
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
    fontSize: 20,
    fontFamily: "PressStart2P-Regular",
    position: "absolute",
    left: 37,
    top: 27,
    textShadowRadius: 1,
    textShadowOffset: { width: -1, height: 1 },
  },
});

export default HeartsDisplay;
