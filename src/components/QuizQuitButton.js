import React from "react";
import { Image, StyleSheet, Dimensions, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import TouchableScale from "react-native-touchable-scale";

const backButtonIcon = require("../assets/icons/back_icon.png");

const windowWidth = Dimensions.get("window").width;
const backButtonSize = windowWidth * 0.25;

const QuizQuitButton = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    // Display a confirmation dialog
    Alert.alert(
      "Are you sure you want to quit?",
      "Any hearts you have lost will not reset.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            // Navigate back to the Home screen
            navigation.navigate("Home");
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <TouchableScale onPress={handleBackPress}>
      <Image source={backButtonIcon} style={styles.backButtonIcon} />
    </TouchableScale>
  );
};

const styles = StyleSheet.create({
  backButtonIcon: {
    width: backButtonSize,
    height: backButtonSize,
    top: "35%",
    left: "5%",
  },
});

export default QuizQuitButton;
