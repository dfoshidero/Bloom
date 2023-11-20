import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "../../screens/GameScreen";
import GameStatsScreen from "../../screens/GameStatsScreen";

const Stack = createStackNavigator();

//Contains different screens such as the main game screen, Game Stats (mastery) screen etc.
const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={GameScreen}
        options={{ headerShown: false, footerShown: false }}
      />
      <Stack.Screen name="Mastery" component={GameStatsScreen} options={{footerShown: false }}/>
      {/* Add other screens here */}
      <Stack.Screen name="Settings" component={GameStatsScreen} options={{footerShown: false }}/>
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
