import React, { createContext, useState, useContext, useEffect } from "react";
import requiredXP from "./levelUpConfig"; // XP required for each level
import { backgrounds } from "./backgroundsConfig"; // Configuration for backgrounds
import AsyncStorage from "@react-native-async-storage/async-storage";
import { plants } from "../states/plantsConfig";

//Make a dictionary for plantProgress
const defaultPlantProgress = () => {
  let plantProgress = {};
  Object.entries(plants).forEach(([k,v]) => plantProgress[v.plantID] = 0);
  return plantProgress;
}

const defaultPlayerState = {
  hearts: 5,
  xp: 0,
  level: 1,
  coins: 10,
  unlockedBackgrounds: [],
  plantProgress: defaultPlantProgress()
};

export const PlayerConfigProvider = ({ children }) => {
  const [playerState, setPlayerState] = useState(defaultPlayerState);

  const addXP = (amount) => {
    const newXP = playerState.xp + amount;
    let newLevel = playerState.level;

    // Check if the player reaches the XP threshold for the next level
    while (newLevel < requiredXP.length && newXP >= requiredXP[newLevel]) {
      newLevel++;
    }

    updatePlayerConfig({
      xp: newXP,
      level: newLevel
    });
  };

  const updatePlayerConfig = (newConfig) => {
    let modifiedPlayerState = { ...playerState, ...newConfig };
    setPlayerState(modifiedPlayerState);
    AsyncStorage.setItem("playerState", JSON.stringify(modifiedPlayerState));
  };

  const decreaseHearts = () => {
    if (playerState.hearts > 0) {
      updatePlayerConfig({hearts: playerState.hearts - 1});
    }
  };

  const addCoins = (amount) => {
    updatePlayerConfig({coins: playerState.coins + amount});
  };

  // Utility function to get unlocked rooms
  const getUnlockedRooms = (playerLevel) => {
    return Object.values(backgrounds).filter(
      (room) => room.levelRequired <= playerLevel
    );
  };

  return (
    <PlayerConfigContext.Provider
      value={{
        ...playerState,
        updatePlayerConfig,
        addXP,
        decreaseHearts,
        addCoins,
        getUnlockedRooms
      }}
    >
      {children}
    </PlayerConfigContext.Provider>
  );
};

export const PlayerConfigContext = createContext({
  playerState: PlayerConfigProvider.playerState,
  updatePlayerConfig: PlayerConfigProvider.updatePlayerConfig,
  addXP: PlayerConfigProvider.addXp,
  decreaseHearts: PlayerConfigProvider.decreaseHearts,
  addCoins: PlayerConfigProvider.addCoins,
});

export const usePlayerConfig = () => useContext(PlayerConfigContext);