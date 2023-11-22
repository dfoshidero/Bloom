import React from "react";
import { Platform, StatusBar } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigation/stack/HomeStackNavigator";

//code start from here

StatusBar.setHidden(true, "none");

const App = () => {
  return (

    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "black",
        }}
        edges={["right", "left"]}
      >
        <NavigationContainer>
          <HomeStackNavigator />
          {/* Proceed to HomeStackNavigator.js */}
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
