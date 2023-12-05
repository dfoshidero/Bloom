import React, { createContext, useState, useContext, useEffect } from "react";
import requiredXP from "./levelUpConfig";
import { backgrounds } from "./backgroundsConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { plants } from "../states/plantsConfig";

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
};

export const PlayerConfigContext = createContext();

export const PlayerConfigProvider = ({ children, initialPlayerState }) => {
  const [playerState, setPlayerState] = useState(
    initialPlayerState || defaultPlayerState
  );

  useEffect(() => {
    AsyncStorage.setItem("playerState", JSON.stringify(playerState));
  }, [playerState]);

  useEffect(() => {
    AsyncStorage.setItem("playerState", JSON.stringify(playerState));
  }, [playerState]);

  const saveStateToStorage = async (newState) => {
    await AsyncStorage.setItem("playerState", JSON.stringify(newState));
  };

  const updatePlayerConfig = (newConfig) => {
    setPlayerState((prevState) => ({ ...prevState, ...newConfig }));
  };

  const addXP = (amount) => {
    setPlayerState((prevState) => {
      const newXP = prevState.xp + amount;
      let newLevel = prevState.level;
      while (newLevel < requiredXP.length && newXP >= requiredXP[newLevel]) {
        newLevel++;
      }
      return { ...prevState, xp: newXP, level: newLevel };
    });
  };

  const decreaseHearts = () => {
    setPlayerState((prevState) => {
      if (prevState.hearts > 0) {
        const newHearts = prevState.hearts - 1;
        const newState = {
          ...prevState,
          hearts: newHearts,
          timer: prevState.hearts === 5 ? 3599 : prevState.timer,
        };
        saveStateToStorage(newState);
        return newState;
      }
      return prevState;
    });
  };

  const increaseHearts = () => {
    setPlayerState((prevState) => {
      if (prevState.hearts < 5) {
        const newHearts = prevState.hearts + 1;
        const newTimer = newHearts === 5 ? null : 3599; ;
        const newState = {
          ...prevState,
          hearts: newHearts,
          timer: newTimer,
        };
        saveStateToStorage(newState);
        return newState;
      }
      return prevState;
    });
  };

   useEffect(() => {
     const loadLastSessionData = async () => {
       // Only load from AsyncStorage if initialPlayerState is not provided
       if (!initialPlayerState) {
         const storedState = await AsyncStorage.getItem("playerState");
         if (storedState) {
           const { lastHeartTime: storedLastHeartTime, hearts: storedHearts } =
             JSON.parse(storedState);
           const currentTime = new Date().getTime();
           const timeElapsed =
             (currentTime - (storedLastHeartTime || currentTime)) / 1000;
           let potentialHeartIncreases = Math.floor(timeElapsed / 3599);
           let newHearts = Math.min(storedHearts + potentialHeartIncreases, 5);
           let newTimer = newHearts < 5 ? 10 - (timeElapsed % 3599) : null;
           let newLastHeartTime =
             newHearts < 5
               ? storedLastHeartTime + potentialHeartIncreases * 3599 * 1000
               : currentTime;

           setPlayerState((prevState) => ({
             ...prevState,
             hearts: newHearts,
             timer: newTimer,
             lastHeartTime: newLastHeartTime,
           }));
         }
       }
     };

     loadLastSessionData();
   }, [initialPlayerState]);

  const getRemainingTimer = () => {
    return playerState.timer !== null ? playerState.timer : 0;
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
        addXP,
        decreaseHearts,
        increaseHearts,
        timer: getRemainingTimer(),
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
