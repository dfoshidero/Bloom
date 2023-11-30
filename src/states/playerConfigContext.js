import React, { createContext, useState, useContext, useEffect } from "react";
import requiredXP from "./levelUpConfig"; // XP required for each level
import { backgrounds } from "./backgroundsConfig"; // Configuration for backgrounds


const defaultPlayerState = {
  hearts: 5,
  xp: 0,
  level: 1,
  coins: 10,
  unlockedBackgrounds: [],
};

const PlayerConfigContext = createContext({
  playerState: defaultPlayerState,
  updatePlayerConfig: () => {},
  addXP: () => {},
  decreaseHearts: () => {},
  addCoins: () => {},
});

export const usePlayerConfig = () => useContext(PlayerConfigContext);


export const PlayerConfigProvider = ({ children }) => {
  const [playerState, setPlayerState] = useState(defaultPlayerState);

  useEffect(() => {
    // Update unlocked backgrounds based on the new level
    const newBackgrounds = Object.keys(backgrounds)
      .filter((key) => backgrounds[key].levelRequired <= playerState.level)
      .map((key) => backgrounds[key]);

    setPlayerState((prevState) => ({
      ...prevState,
      unlockedBackgrounds: newBackgrounds,
    }));
  }, [playerState.level]);

  const addXP = (amount) => {
    setPlayerState((prevState) => {
      const newXP = prevState.xp + amount;
      let newLevel = prevState.level;

      // Check if the player reaches the XP threshold for the next level
      while (newLevel < requiredXP.length && newXP >= requiredXP[newLevel]) {
        newLevel++;
      }

      return {
        ...prevState,
        xp: newXP,
        level: newLevel,
      };
    });
  };

  const updatePlayerConfig = (newConfig) => {
    setPlayerState((prevState) => ({ ...prevState, ...newConfig }));
  };

  const decreaseHearts = () => {
    setPlayerState((prevState) => {
      if (prevState.hearts > 0) {
        return { ...prevState, hearts: prevState.hearts - 1 };
      }
      return prevState;
    });
  };

  const addCoins = (amount) => {
    setPlayerState((prevState) => ({
      ...prevState,
      coins: prevState.coins + amount,
    }));
  };

  return (
    <PlayerConfigContext.Provider
      value={{
        ...playerState,
        updatePlayerConfig,
        addXP,
        decreaseHearts,
        addCoins,
      }}
    >
      {children}
    </PlayerConfigContext.Provider>
  );
};

export default PlayerConfigContext;
