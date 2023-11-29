import React, { createContext, useState, useContext, useEffect } from "react";
import levelsConfig from "./levelsConfig"; // Assuming this is your levels configuration
import { backgrounds } from "./backgroundsConfig"; // Assuming this is your backgrounds configuration

const PlayerConfigContext = createContext();

export const usePlayerConfig = () => useContext(PlayerConfigContext);

export const PlayerConfigProvider = ({ children }) => {
  const [playerState, setPlayerState] = useState({
    hearts: 5, // Initial number of hearts
    xp: 0, // Experience points
    level: 1, // Player level
    coins: 10, // Initial amount of coins the player has
    unlockedBackgrounds: [], // Unlocked backgrounds
  });

  useEffect(() => {
    // Update unlocked backgrounds when the level changes
    const newBackgrounds = Object.keys(backgrounds)
      .filter((key) => backgrounds[key].levelRequired <= playerState.level)
      .reduce((acc, key) => {
        acc[key] = backgrounds[key];
        return acc;
      }, {});

    setPlayerState((prevState) => ({
      ...prevState,
      unlockedBackgrounds: newBackgrounds,
    }));
  }, [playerState.level]);

  const addXp = (amount) => {
    setPlayerState((prevState) => {
      const newXp = prevState.xp + amount;
      const nextLevelConfig = levelsConfig.find(
        (lvlCfg) => lvlCfg.level === prevState.level + 1
      );
      let newLevel = prevState.level;
      if (nextLevelConfig && newXp >= nextLevelConfig.xpThreshold) {
        newLevel = prevState.level + 1;
      }
      return { ...prevState, xp: newXp, level: newLevel };
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
        addXp,
        decreaseHearts,
        addCoins,
      }}
    >
      {children}
    </PlayerConfigContext.Provider>
  );
};
