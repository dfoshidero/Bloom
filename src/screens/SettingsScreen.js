import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import {
    playBackgroundMusic,
    pauseBackgroundMusic,
    stopBackgroundMusic,
    setupPlayer,
} from "../utilities/backgroundMusic";

const SettingsScreen = () => {
  const [musicEnabled, setMusicEnabled] = useState(true);

  const toggleMusicSwitch = () => {
    setMusicEnabled((prevState) => {
        if (!prevState) {
          playBackgroundMusic();
        } else {
          stopBackgroundMusic();
        }
        return !prevState;
      });
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.settingContainer}>
        <Text style={styles.settingText}>Music</Text>
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
    fontSize: 24,
    fontWeight: "bold",
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
    fontSize: 18,
  },
});

export default SettingsScreen;