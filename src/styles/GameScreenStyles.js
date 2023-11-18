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
  menuContainer: {
    //position: "absolute", //added these 2 lines to align with the meniu button itself
    //top: Platform.OS === "android" ? StatusBar.currentHeight + 15 : 60, //added these 2 lines to align with the meniu button itself
    top: "30%", //added these few lines to align to the center
    left: "10%", //added these few lines to align to the center
    right: "10%", //added these few lines to align to the center
    width: "80%", //original 100%
    opacity: 0.7,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 30, //80 originally
    paddingBottom: 20, //10 originally
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    marginBottom: 30,
    fontSize: 18,
    textAlign: "center",
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
  },
});

export default gameStyles;
