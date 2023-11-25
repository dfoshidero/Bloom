import React from "react";
import { Text, StyleSheet } from "react-native";

const GameText = ({ children, style }) => {
  return (
    <Text hyphenationFrequency={null} style={[styles.gameText, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  gameText: {
    fontFamily: "PressStart2P-Regular", // Your custom font
    // Add any other styling properties you want here
  },
});

export default GameText;
