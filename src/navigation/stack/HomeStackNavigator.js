import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import MasteryScreen from "../../screens/MasteryScreen";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false, footerShown: false }}
      />
      <Stack.Screen name="Mastery" component={MasteryScreen} />
      {/* Add other screens here */}
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
