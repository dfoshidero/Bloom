// PlantDataContext.js
import React, { createContext, useState, useContext } from "react";

// Create the context
export const PlantDataContext = createContext();

// Provider component
export const PlantDataProvider = ({ children }) => {
  const [plantData, setPlantData] = useState([]);

  // Function to update plant data
  const updatePlantData = (data) => {
    setPlantData(data);
  };

  return (
    <PlantDataContext.Provider value={{ plantData, updatePlantData }}>
      {children}
    </PlantDataContext.Provider>
  );
};
