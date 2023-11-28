// PlantDataContext.js
import React, { createContext, useState, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create the context
export const PlantDataContext = createContext();

// Provider component
export const PlantDataProvider = ({ children }) => {
  const [plantData, setPlantData] = useState([]);

  // Function to update plant data
  const updatePlantData = (data) => {
    if (data != plantData) {
      setPlantData(data);
      AsyncStorage.setItem("savedPlants", JSON.stringify(data));
    };
  };

  return (
    <PlantDataContext.Provider value={{ plantData, updatePlantData }}>
      {children}
    </PlantDataContext.Provider>
  );
};
