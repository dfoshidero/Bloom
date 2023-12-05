import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {plants} from "../states/plantsConfig";
import { usePlantContext } from "./plantsDataContext";

export const SpeciesProgressProvider = ({ children }) => {
    const { plantsConfig } = usePlantContext();
    const defaultSpeciesProgress = {};
    for (let key in plantsConfig) {
        let speciesID = plantsConfig[key].plantID;
        defaultSpeciesProgress[speciesID] = 0;
    };

    const [speciesProgress, setSpeciesProgress] = useState(defaultSpeciesProgress);
  
    const updateSpeciesProgress = (speciesID, newProgress) => {
        setSpeciesProgress(prevState => {
            prevState[speciesID] = newProgress;
            AsyncStorage.setItem("speciesProgress", JSON.stringify(prevState));
            return prevState;
        });
    };
  
    return (
        <SpeciesProgressContext.Provider value={{speciesProgress, updateSpeciesProgress}}>
            {children}
        </SpeciesProgressContext.Provider>
    );
};

export const SpeciesProgressContext = createContext({
    speciesProgress: SpeciesProgressProvider.speciesProgress,
    updateSpeciesProgress: SpeciesProgressProvider.updateSpeciesProgress
});

export const useProgressContext = () => useContext(SpeciesProgressContext);