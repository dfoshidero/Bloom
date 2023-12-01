import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {plants} from "../states/plantsConfig";

const defaultCompletedLevels = {};
for (let key in plants) {
    let speciesID = plants[key].plantID;
    defaultCompletedLevels[speciesID] = 0;
};

export const CompletedLevelsProvider = ({ children }) => {
    const [completedLevels, setCompletedLevels] = useState(defaultCompletedLevels);
  
    const updateCompletedLevels = (speciesID, newLevel) => {
        setCompletedLevels(prevState => {
            prevState[speciesID] = newLevel;
            AsyncStorage.setItem("completedLevels", JSON.stringify(prevState));
            return prevState;
        });
    };
  
    return (
      <CompletedLevelsContext.Provider
        value={{completedLevels, updateCompletedLevels}}
      >
        {children}
      </CompletedLevelsContext.Provider>
    );
};

export const CompletedLevelsContext = createContext({
    completedLevels: CompletedLevelsProvider.completedLevels,
    updateCompletedLevels: CompletedLevelsProvider.updateCompletedLevels
});

export const useCompletedLevelsContext = () => useContext(CompletedLevelsContext);