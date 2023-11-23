// GameScreenStyles.js
import { StyleSheet, StatusBar } from "react-native";


//formatting of the game screen
const gameStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsIcon: {
    position: "absolute",
    top: "25%",
    left: "4.5%",
    zIndex: 1,
  },
  heartsIcon: {
    zIndex: 1,
    position: "absolute",
    top: "32%",
    left: "4.5%",
  },
});

export default gameStyles;
