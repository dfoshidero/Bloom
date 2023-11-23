import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import TouchableScale from "react-native-touchable-scale";

import GameScreen from "../../screens/GameScreen";
import GameStatsScreen from "../../screens/GameStatsScreen";
import SettingsScreen from "../../screens/SettingsScreen";
import LevelSelectionScreen from "../../screens/LevelSelectScreen";
import QuizScreen from "../../screens/QuizScreen";
import CollectionScreen from "../../screens/CollectionScreen";

const backButtonIcon = require("../../assets/icons/back_icon.png");

const windowWidth = Dimensions.get("window").width;
const backButtonSize = windowWidth * 0.25;

const Stack = createStackNavigator();

const CustomBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableScale onPress={() => navigation.goBack()}>
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

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={GameScreen}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="Mastery"
        component={GameStatsScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerLeft: () => <CustomBackButton />, // Use custom back button component
        }}
      />
      {/* Add other screens here */}
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerLeft: () => <CustomBackButton />, // Use custom back button component
        }}
      />
      <Stack.Screen
        name="LevelSelectionScreen"
        component={LevelSelectionScreen}
        options={{
          headerLeft: () => <CustomBackButton />, // Use custom back button component
        }}
      />
      <Stack.Screen
        name="QuizScreen"
        component={QuizScreen}
        options={{
          headerLeft: () => <CustomBackButton />, // Use custom back button component
        }}
      />
      {/*  
      <Stack.Screen
        name="RealLife"
        component={RealLife}
        options={{
          headerLeft: () => <CustomBackButton />, // Use custom back button component
        }}
      />
      */}
      
      <Stack.Screen
        name="CollectionScreen"
        component={CollectionScreen}
        options={{
          title: "",
          headerTransparent: true,
          headerLeft: () => <CustomBackButton />, // Use custom back button component
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
