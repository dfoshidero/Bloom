import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

let adjustedDeviceHeight = deviceHeight;
if (Platform.OS === "android") {
  adjustedDeviceHeight += 110;
}

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      {/* Header Liner */}
      <Image
        source={require("../assets/header/header_liner.png")}
        style={styles.headerLiner}
      />

      {/* Header Image */}
      <Image
        source={require("../assets/header/header.png")}
        style={styles.headerImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    position: "absolute",
    top: 0,
    width: deviceWidth,
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: 999,
    pointerEvents: "none",
  },
  headerLiner: {
    position: "absolute",
    bottom: (adjustedDeviceHeight / 2) * 1.01,
    width: deviceWidth,
    resizeMode: "contain",
    opacity: 0.85,
  },
  headerImage: {
    bottom: (adjustedDeviceHeight / 2) * 0.82,
    width: deviceWidth,
    resizeMode: "contain",
    marginTop: -10, // Adjust as needed
  },
});

export default Header;
