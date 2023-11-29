import React, { createContext, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { plants } from "../states/plantsConfig";

const PlayerConfigContext = createContext();

export const usePlayerConfig = () => useContext(PlayerConfigContext);

export const PlayerConfigProvider = ({ children }) => {
  //Make a dictionary for plantProgress
  let plantProgress = {};
  Object.entries(plants).forEach(([k,v]) => plantProgress[v.plantID] = 0);

  const [playerConfig, setPlayerConfig] = useState({
    hearts: 5, // Initial number of hearts
    xp: 0, // Experience points
    level: 1, // Player level
    plantProgress: plantProgress, // Add additional player-related properties here
    coins: 10, // Initial amount of coin the player have
  });

  // Function to update player config
  const updatePlayerConfig = (newConfig) => {
    let modifiedPlayerConfig = { ...playerConfig, ...newConfig };
    setPlayerConfig(modifiedPlayerConfig);
    AsyncStorage.setItem("playerConfig", JSON.stringify(modifiedPlayerConfig));
  };

  const incrementPlantProgress = (plantID) => {

  };

  const decreaseHearts = () => {
    if (playerConfig.hearts > 0) {
      updatePlayerConfig({hearts: playerConfig.hearts - 1 });
    }
  };

  const addCoins = (amount) => {
    updatePlayerConfig({coins: playerConfig.coins + amount});
  };

  return (
    <PlayerConfigContext.Provider
      value={{ playerConfig, updatePlayerConfig, decreaseHearts, addCoins, incrementPlantProgress }}
    >
      {children}
    </PlayerConfigContext.Provider>
  );
};
