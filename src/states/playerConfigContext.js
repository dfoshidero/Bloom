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

  // Save the player state to AsyncStorage whenever it changes
  useEffect(() => {
    AsyncStorage.setItem("playerState", JSON.stringify(playerState));
  }, [playerState]);

  const updatePlayerConfig = (newConfig) => {
    setPlayerState(prevState => {return { ...prevState, ...newConfig }});
  };

  const addXP = (amount) => {
    setPlayerState(prevState => {
      const newXP = prevState.xp + amount;
      let newLevel = prevState.level;
  
      // Check if the player reaches the XP threshold for the next level
      while (newLevel < requiredXP.length && newXP >= requiredXP[newLevel]) {
        newLevel++;
      }

      return {
        ...prevState,
        ...{
        xp: newXP,
        level: newLevel
      }};
    });
  };

  const decreaseHearts = () => {
    setPlayerState(prevState => {
      if (prevState.hearts > 0) {
        return { ...prevState, ...{hearts: prevState.hearts - 1} };
      }
    });
  };

  const addCoins = (amount) => {
    setPlayerState(prevState => {return { ...prevState, ...{coins: prevState.coins + amount} }});
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