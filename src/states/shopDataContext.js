import React, { createContext, useReducer, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { plants } from "../states/plantsConfig";

// Define the shop reducer to handle state changes
const shopReducer = (state, action) => {
  switch (action.type) {
    case "APPLY_SKIN":
      const { plantId: appliedPlantId, skinName } = action;
      console.log("Applying skin:", skinName, "to plant ID:", appliedPlantId);
      const updatedPlantsApply = {
        ...state.plants,
        [appliedPlantId]: {
          ...state.plants[appliedPlantId],
          selectedSkin: skinName,
        },
      };
      console.log("Updated plants after applying skin:", updatedPlantsApply);
      return { ...state, plants: updatedPlantsApply };

    case "BUY_SKIN":
      const { plantId, skinId } = action;
      const updatedPlantsBuy = {
        ...state.plants,
        [plantId]: {
          ...state.plants[plantId],
          ownedSkins: [...state.plants[plantId].ownedSkins, skinId],
        },
      };
      return { ...state, plants: updatedPlantsBuy };

    // Add other cases as needed
    default:
      return state;
  }
};

// Create the ShopContext
const ShopContext = createContext();

// Create the ShopProvider component
export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, { plants });

  // Save state to AsyncStorage whenever it changes
  // Load state from AsyncStorage whenever the component mounts
  useEffect(() => {
    const loadShopState = async () => {
      try {
        const storedState = await AsyncStorage.getItem("shopState");
        if (storedState) {
          dispatch({ type: "LOAD_STATE", state: JSON.parse(storedState) });
        }
      } catch (error) {
        console.error("Error loading shop state from AsyncStorage:", error);
      }
    };

    loadShopState();
  }, []); // Updated here
  useEffect(() => {
    AsyncStorage.setItem("shopState", JSON.stringify(state));
  }, [state]);

  const value = { state, dispatch };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// Create a custom hook to use the shop context
export const useShopContext = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShopContext must be used within a ShopProvider");
  }
  return context;
};
