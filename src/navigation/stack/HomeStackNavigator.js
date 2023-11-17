import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "../../screens/GameScreen";
import GameStatsScreen from "../../screens/GameStatsScreen";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={GameScreen}
        options={{ headerShown: false, footerShown: false }}
      />
      <Stack.Screen name="Mastery" component={GameStatsScreen} />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
