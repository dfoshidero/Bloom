import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigation/stack/HomeStackNavigator";

//code start from here
const App = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator /> 
      {/* Proceed to HomeStackNavigator.js */}
    </NavigationContainer>
  );
};

export default App;
