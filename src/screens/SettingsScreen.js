import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

import {
  playRandomBackgroundMusic,
  pauseBackgroundMusic,
  stopBackgroundMusic,
  setupPlayer,
} from "../utilities/backgroundMusic";

import GameText from "../styles/GameText";

const SettingsScreen = () => {
  const [musicEnabled, setMusicEnabled] = useState(true);

  const toggleMusicSwitch = () => {
    setMusicEnabled((prevState) => {
        if (!prevState) {
          playRandomBackgroundMusic();
        } else {
          stopBackgroundMusic();
        }
        return !prevState;
      });
  };



  return (
    <View style={styles.container}>
      <GameText style={styles.title}>Settings</GameText>
      <View style={styles.settingContainer}>
        <GameText style={styles.settingText}>Music</GameText>
        <Switch
          value={musicEnabled}
          onValueChange={toggleMusicSwitch}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={musicEnabled ? "#f5dd4b" : "#f4f3f4"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  settingContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  settingText: {
    fontSize: 16,
  },
});

export default SettingsScreen;