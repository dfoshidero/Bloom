// GameScreenStyles.js
import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const deviceHeight = Dimensions.get("window").height;

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
  coinIcon: {
    zIndex: 1,
    position: "absolute",
    top: "40%",
    left: "4.5%",
  },
  collectionIcon: {
    zIndex: 1,
    position: "absolute",
    top: "47%",
    left: "4.5%",
  },
  gameStatsIcon: {
    zIndex: 1,
    position: "absolute",
    top: "54%",
    left: "4.5%",
  },
  xpBar: {
    zIndex: 1,
    position: "absolute",
    top: "25%",
    left: "61%",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent backdrop
  },
  modalView: {
    backgroundColor: "white",
    width: "65%",
    height: "30%",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between", // Adjusts children vertically
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 4,
    borderColor: "darkgray",
    opacity: 1,
  },
  modalText: {
    top: "5%",
    textAlign: "center",
    fontSize: RFValue(deviceHeight * 0.015),
    color: "orange",
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: { width: -1, height: 1 },
    textAlign: "center",
    padding: "10%",
    lineHeight: 20,
    marginBottom: 20,
  },
  button: {
    top: "5%",
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    backgroundColor: "grey",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: RFValue(deviceHeight * 0.01),
  },
});

export default gameStyles;
