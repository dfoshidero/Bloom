// GameScreenStyles.js
import { StyleSheet, StatusBar } from "react-native";


//formatting of the game screen
const gameStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  settingsIcon: {
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight + 35 : 90,
    left: 15,
    zIndex: 1,
  },
});

export default gameStyles;
