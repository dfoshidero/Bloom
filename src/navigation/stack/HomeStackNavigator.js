import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import TouchableScale from "react-native-touchable-scale";


import GameScreen from "../../screens/GameScreen";
import GameStatsScreen from "../../screens/GameStatsScreen";
import SettingsScreen from "../../screens/SettingsScreen";
import TriviaScreen from "../../screens/LevelSelectScreen";
import { useNavigation } from "@react-navigation/native";

const backButtonIcon = require("../../assets/icons/back_icon.png")

const windowWidth = Dimensions.get("window").width;
const backButtonSize = windowWidth * 0.25; // 15% of screen width


const Stack = createStackNavigator();

//Contains different screens such as the main game screen, Game Stats (mastery) screen etc.
const HomeStackNavigator = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={GameScreen}
        options={{
          headerShown: false,
          footerShown: false,
          headerBackImage: () => (
            <TouchableScale onPress={() => navigation.goBack()}>
              <Image source={backButtonIcon} style={styles.backButtonIcon} />
            </TouchableScale>
          ),
        }}
      />
      <Stack.Screen
        name="Mastery"
        component={GameStatsScreen}
        options={{
          title: "",
          headerTransparent: true,
          footerShown: false,
          headerBackImage: () => (
            <TouchableScale onPress={() => navigation.goBack()}>
              <Image source={backButtonIcon} style={styles.backButtonIcon} />
            </TouchableScale>
          ),
        }}
      />
      {/* Add other screens here */}
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          footerShown: false,
          headerBackImage: () => (
            <TouchableScale onPress={() => navigation.goBack()}>
              <Image source={backButtonIcon} style={styles.backButtonIcon} />
            </TouchableScale>
          ),
        }}
      />
      <Stack.Screen
        name="Trivia"
        component={TriviaScreen}
        options={{
          footerShown: false,
          headerBackImage: () => (
            <TouchableScale onPress={() => navigation.goBack()}>
              <Image source={backButtonIcon} style={styles.backButtonIcon} />
            </TouchableScale>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
  backButtonIcon: {
    width: backButtonSize,
    height: backButtonSize,
    top: "10%",
    right: "5%"
  },
});

