import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Import default plantsConfig if necessary
import { plants as defaultPlantsConfig } from "./plantsConfig";

// Provider component
export const PlantDataProvider = ({ children }) => {
  const [plantData, setPlantData] = useState([]);
  const [plantsConfig, setPlantsConfig] = useState(defaultPlantsConfig); // Initialize with default config

  // Function to update plant instance properties
  const updatePlantData = (modifiedData) => {
    setPlantData(modifiedData);
    AsyncStorage.setItem("savedPlants", JSON.stringify(modifiedData));
  };

  // Function to save plantsConfig data
  const savePlantsConfig = async (updatedConfig) => {
    try {
      await AsyncStorage.setItem("plantsConfig", JSON.stringify(updatedConfig));
      setPlantsConfig(updatedConfig); // Update state after saving to AsyncStorage
    } catch (error) {
      console.error("Error saving plantsConfig:", error);
    }
  };

  // Function to update plantsConfig state
  const updatePlantsConfig = (newConfig) => {
    setPlantsConfig(newConfig);
  };

  return (
    <PlantDataContext.Provider
      value={{
        plantData,
        updatePlantData,
        savePlantsConfig,
        plantsConfig,
        updatePlantsConfig,
      }}
    >
      {children}
    </PlantDataContext.Provider>
  );
};

export const PlantDataContext = createContext({
  plantData: [],
  updatePlantData: () => {},
  savePlantsConfig: () => {},
  plantsConfig: defaultPlantsConfig,
  updatePlantsConfig: () => {},
});

export const usePlantContext = () => useContext(PlantDataContext);
