import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import requiredXP from "./levelUpConfig";
import { backgrounds } from "./backgroundsConfig";
import { plants } from "../states/plantsConfig";

const HEART_INCREASE_INTERVAL = 3599; // Interval in seconds for heart increase
const MAX_HEARTS = 5;

const defaultPlantProgress = () => {
  let plantProgress = {};
  Object.entries(plants).forEach(([k, v]) => (plantProgress[v.plantID] = 0));
  return plantProgress;
};

const defaultPlayerState = {
  hearts: 5,
  xp: 0,
  level: 1,
  coins: 10,
  unlockedBackgrounds: [],
  plantProgress: defaultPlantProgress(),
  timer: null,
  lastUpdated: Date.now(), // Timestamp to track the last update
};

export const PlayerConfigContext = createContext();

export const PlayerConfigProvider = ({ children, initialPlayerState }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [playerState, setPlayerState] = useState(
    initialPlayerState || defaultPlayerState
  );
  const updatePlayerState = (newState) => {
    setPlayerState(newState);
    AsyncStorage.setItem("playerState", JSON.stringify(newState));
  };

  // Use this function to update the state instead of setPlayerState directly

  useEffect(() => {
    const loadStateFromStorage = async () => {
      const storedState = await AsyncStorage.getItem("playerState");
      if (storedState) {
        const savedState = JSON.parse(storedState);
        const currentTime = Date.now();
        const elapsedTime = Math.floor(
          (currentTime - savedState.lastUpdated) / 1000
        );

        // Calculate the potential heart increase
        const heartIncrease = Math.floor(elapsedTime / HEART_INCREASE_INTERVAL);

        // Calculate new hearts considering the maximum limit
        let newHearts = savedState.hearts;
        let lastUpdated = savedState.lastUpdated;
        if (heartIncrease > 0 && savedState.hearts < MAX_HEARTS) {
          newHearts = Math.min(savedState.hearts + heartIncrease, MAX_HEARTS);
          lastUpdated = currentTime; // Update only if hearts were increased
        }

        // Calculate the timer for the next heart increase
        const newTimer =
          newHearts < MAX_HEARTS
            ? HEART_INCREASE_INTERVAL - (elapsedTime % HEART_INCREASE_INTERVAL)
            : 0;

        setPlayerState({
          ...savedState,
          hearts: newHearts,
          timer: newTimer,
          lastUpdated,
        });
      }
      setIsLoaded(true);
    };

    loadStateFromStorage();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const timerInterval = setInterval(() => {
        // Capture the current state in a variable
        const currentState = playerState;

        let newState = currentState; // Start with the current state

        if (currentState.hearts < MAX_HEARTS) {
          // If there's time left in the timer, decrement it
          if (currentState.timer > 0) {
            newState = {
              ...currentState,
              timer: currentState.timer - 1, // Decrement the timer
            };
          } else {
            // If timer has reached zero, increase hearts and reset timer
            const newHearts = Math.min(currentState.hearts + 1, MAX_HEARTS);
            newState = {
              ...currentState,
              hearts: newHearts,
              timer: HEART_INCREASE_INTERVAL, // Reset the timer
              lastUpdated: Date.now(), // Update last updated only when hearts increase
            };
          }
        }

        // Now we pass the new state object to updatePlayerState
        updatePlayerState(newState);
      }, 1000); // Update timer every second

      return () => clearInterval(timerInterval);
    }
  }, [isLoaded, playerState]); // Dependency on isLoaded and playerState

  const updatePlayerConfig = (newConfig) => {
    setPlayerState((prevState) => ({ ...prevState, ...newConfig }));
  };

  const decreaseHearts = () => {
    setPlayerState((prevState) => {
      if (prevState.hearts > 0) {
        const newHearts = prevState.hearts - 1;

        // Reset the timer only when the heart count goes from MAX_HEARTS to MAX_HEARTS - 1
        const shouldResetTimer = prevState.hearts === MAX_HEARTS;

        return {
          ...prevState,
          hearts: newHearts,
          lastUpdated: shouldResetTimer ? Date.now() : prevState.lastUpdated,
          timer: shouldResetTimer ? HEART_INCREASE_INTERVAL : prevState.timer,
        };
      }
      return prevState;
    });
  };

  const addXP = (amount) => {
    setPlayerState((prevState) => {
      const newXP = prevState.xp + amount;
      let newLevel = prevState.level;

      // Convert requiredXP object to an array of levels sorted by required XP
      const levels = Object.entries(requiredXP)
        .map(([level, { xpRequired }]) => ({
          level: parseInt(level),
          xpRequired,
        }))
        .sort((a, b) => a.xpRequired - b.xpRequired);

      // Find the highest level the player has reached with the new XP
      for (let i = 0; i < levels.length; i++) {
        if (newXP >= levels[i].xpRequired) {
          newLevel = levels[i].level;
        } else {
          break; // Break the loop once the player's XP does not meet the next level's requirement
        }
      }

      // Update the player's state with the new XP and level
      return { ...prevState, xp: newXP, level: newLevel };
    });
  };

  const addCoins = (amount) => {
    setPlayerState((prevState) => ({
      ...prevState,
      coins: prevState.coins + amount,
    }));
  };

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
        decreaseHearts,
        addXP,
        addCoins,
        getUnlockedRooms,
        resetPlayerConfig,
      }}
    >
      {children}
    </PlayerConfigContext.Provider>
  );
};

export const usePlayerConfig = () => useContext(PlayerConfigContext);
