// GameScreenStyles.js
import { StyleSheet, StatusBar } from "react-native";


//formatting of the game screen
const gameStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsIcon: {
    position: "absolute",
    top: "26%",
    left: "4.5%",
    zIndex: 1,
  },
  heartsIcon: {
    zIndex: 1,
    position: "absolute",
    top: "33%",
    left: "4.6%",
  },
  collectionIcon: {
    zIndex: 1,
    position: "absolute",
    top: "40%",
    left: "4.5%%",
  },
  gameStatsIcon: {
    zIndex: 1,
    position: "absolute",
    top: "47%",
    left: "4.5%%",
  },
});

export default gameStyles;
