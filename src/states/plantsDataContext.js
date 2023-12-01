// PlantDataContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Provider component
export const PlantDataProvider = ({ children }) => {
  const [plantData, setPlantData] = useState([]);

  const updatePlantData = (modifiedData) => {
    setPlantData(modifiedData);
    AsyncStorage.setItem("savedPlants", JSON.stringify(modifiedData));
  };

  return (
    <PlantDataContext.Provider value={{ plantData, updatePlantData }}>
      {children}
    </PlantDataContext.Provider>
  );
};

export const PlantDataContext = createContext({
  plantData: PlantDataProvider.plantData,
  updatePlantData: PlantDataProvider.updatePlantData
});

export const usePlantContext = () => useContext(PlantDataContext);