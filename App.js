import React, { useState } from "react";
import { Platform, StatusBar, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./src/navigation/stack/HomeStackNavigator";
import { PlayerConfigProvider } from "./src/states/playerConfigContext";
import { PlantDataProvider } from "./src/states/plantsDataContext";
import LoadingScreen from "./src/screens/LoadingScreen"; // Update the path

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };

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
          <PlantDataProvider>
            {isLoading ? (
              <LoadingScreen onFinishLoading={handleFinishLoading} />
            ) : (
              <NavigationContainer>
                <HomeStackNavigator />
              </NavigationContainer>
            )}
          </PlantDataProvider>
        </PlayerConfigProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
