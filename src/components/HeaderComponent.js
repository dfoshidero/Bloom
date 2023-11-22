import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/header/header_liner.png")}
        style={styles.headerLiner}
      />
      <Image
        source={require("../assets/header/header.png")}
        style={styles.headerImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: deviceWidth,
    paddingTop: 10,
    paddingBottom: 10,
    zIndex: 999,
    pointerEvents: "none",
  },
  headerLiner: {
    position: "absolute",
    width: deviceWidth,
    height: deviceWidth*(927/1719),
    resizeMode: "cover",
    opacity: 0.85,
    top: "-5%"
  },
  headerImage: {
    width: deviceWidth,
    height: deviceWidth*(1020/1792),
    resizeMode: "cover",
    marginTop: -10, // Adjust as needed
  },
});

export default Header;
