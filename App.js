import React, { useState, useEffect } from "react";
import { Platform, StatusBar, View, ActivityIndicator } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigation/stack/HomeStackNavigator";
import { PlayerConfigProvider } from "./src/states/playerConfigContext";
import * as Font from "expo-font";

const fetchFonts = () => {
  return Font.loadAsync({
    "PressStart2P-Regular": require("./src/assets/fonts/PressStart2P-Regular.ttf"),
  });
};

const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    fetchFonts()
      .then(() => {
        setFontsLoaded(true);
      })
      .catch((err) => console.log("Error loading fonts:", err));
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "black",
        }}
        edges={["right", "left"]}
      >
        <StatusBar setHidden={true} />
        <PlayerConfigProvider>
          <NavigationContainer>
            <HomeStackNavigator />
          </NavigationContainer>
        </PlayerConfigProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
