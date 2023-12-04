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
  const [playerState, setPlayerState] = useState({
    ...defaultPlayerState,
    timer: 3600,
  });

  // Save the player state to AsyncStorage whenever it changes
  useEffect(() => {
    AsyncStorage.setItem("playerState", JSON.stringify(playerState));
  }, [playerState]);

  const updatePlayerConfig = (newConfig) => {
    setPlayerState((prevState) => {
      return { ...prevState, ...newConfig };
    });
  };

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
        ...{
          xp: newXP,
          level: newLevel,
        },
      };
    });
  };

  const decreaseHearts = () => {
    setPlayerState((prevState) => {
      if (prevState.hearts > 0) {
        const newHearts = prevState.hearts - 1;
        // Start the timer from 60 minutes when a heart is lost for the first time
        const newTimer = prevState.hearts === 5 ? 3600 : prevState.timer;
        return { ...prevState, hearts: newHearts, timer: newTimer };
      }
      return prevState;
    });
  };

  const increaseHearts = () => {
    setPlayerState((prevState) => {
      if (prevState.hearts < 5) {
        return { ...prevState, hearts: prevState.hearts + 1, timer: 3600 };
      }
      return prevState;
    });
  };

  useEffect(() => {
    // Load the last session data
    const loadLastSessionData = async () => {
      const lastTime = await AsyncStorage.getItem("lastTime");
      const currentTime = new Date().getTime();

      if (lastTime !== null) {
        const timePassed = Math.floor(
          (currentTime - JSON.parse(lastTime)) / 1000
        );
        let heartIncreases = Math.floor(timePassed / 3600);
        heartIncreases = Math.min(heartIncreases, 5 - playerState.hearts);

        for (let i = 0; i < heartIncreases; i++) {
          increaseHearts(); // This should also reset the timer to 3600 in increaseHearts method
        }
      }
    };

    loadLastSessionData();
  }, []);

  useEffect(() => {
    // Update timer every second
    const updateTimer = () => {
      setPlayerState((prevState) => {
        if (prevState.timer > 0) {
          return { ...prevState, timer: prevState.timer - 1 };
        } else {
          if (prevState.hearts < 5) {
            return { ...prevState, hearts: prevState.hearts + 1, timer: 3600 };
          }
          return { ...prevState, timer: 3600 }; // Reset timer even if hearts are not increased
        }
      });
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => {
      clearInterval(timerInterval);
      AsyncStorage.setItem("lastTime", JSON.stringify(new Date().getTime()));
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const addCoins = (amount) => {
    setPlayerState((prevState) => {
      return { ...prevState, ...{ coins: prevState.coins + amount } };
    });
  };

  // Utility function to get unlocked rooms
  const getUnlockedRooms = (playerLevel) => {
    return Object.values(backgrounds).filter(
      (room) => room.levelRequired <= playerLevel
    );
  };

  const resetPlayerConfig = () => {
    setPlayerState(defaultPlayerState);
  };

  return (
    <PlayerConfigContext.Provider
      value={{
        ...playerState,
        updatePlayerConfig,
        addXP,
        decreaseHearts,
        increaseHearts,
        timer: playerState.timer,
        addCoins,
        getUnlockedRooms,
        resetPlayerConfig,
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
  increaseHearts: PlayerConfigProvider.increaseHearts,
  addCoins: PlayerConfigProvider.addCoins,
  resetPlayerConfig: PlayerConfigProvider.resetPlayerConfig,
});

export const usePlayerConfig = () => useContext(PlayerConfigContext);