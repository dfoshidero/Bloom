import React, { createContext, useState, useContext } from "react";

const PlayerConfigContext = createContext();

export const usePlayerConfig = () => useContext(PlayerConfigContext);

export const PlayerConfigProvider = ({ children }) => {
  const [playerConfig, setPlayerConfig] = useState({
    hearts: 5, // Initial number of hearts
    xp: 0, // Experience points
    level: 1, // Player level
    // Add additional player-related properties here
  });

  // Function to update player config
  const updatePlayerConfig = (newConfig) => {
    setPlayerConfig({ ...playerConfig, ...newConfig });
  };

  const decreaseHearts = () => {
    if (playerConfig.hearts > 0) {
      setPlayerConfig({ ...playerConfig, hearts: playerConfig.hearts - 1 });
    }
  };

  return (
    <PlayerConfigContext.Provider
      value={{ playerConfig, updatePlayerConfig, decreaseHearts }}
    >
      {children}
    </PlayerConfigContext.Provider>
  );
};
