import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import TouchableScale from "react-native-touchable-scale";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import Header from "../components/HeaderComponent";
import { backgrounds } from "../states/backgroundsConfig";
import MenuComponent from "../components/MenuComponent";
import BackgroundImageComponent from "../components/BackgroundImageComponent";
import { toggleMenu } from "../utilities/menuUtilities";
import gameStyles from "../styles/GameScreenStyles";
import Oracle from "../components/OracleComponent"
import HeartsDisplay from "../components/HeartsComponent";
import {
  playBackgroundMusic,
  pauseBackgroundMusic,
  stopBackgroundMusic,
  setupPlayer,
} from "../utilities/backgroundMusic";

const GameScreen = ({route}) => {
  //const { updatedList } = route.params;
  const [currentBackground, setCurrentBackground] = useState(
    backgrounds.background4
  );
  const backgroundImage = currentBackground.image;
  const [menuVisible, setMenuVisible] = useState(false);


  useEffect(() => {
    const loadCurrentBackground = async () => {
      try {
        const savedBackground = await AsyncStorage.getItem('currentBackground');
        if (savedBackground) {
          setCurrentBackground(JSON.parse(savedBackground));
        }
      } catch (error) {
        console.log('Failed to load the current background:', error);
      }
    };

    loadCurrentBackground();
  }, []);
  useEffect(() => {
    const saveCurrentBackground = async () => {
      try {
        await AsyncStorage.setItem('currentBackground', JSON.stringify(currentBackground));
        console.log('Current background saved:', currentBackground);
      } catch (error) {
        console.log('Failed to save the current background:', error);
      }
    };
  
    saveCurrentBackground();
  }, [currentBackground]);

  const handleToggleMenu = () => {
    setMenuVisible(toggleMenu(menuVisible));
  };

  useEffect(() => {
    setupPlayer().then(() => {
      console.log("Audio player is set up.");
    });

    playBackgroundMusic();

    return () => {
      stopBackgroundMusic();
    };
  }, []);

  return (
    <View style={gameStyles.container}>
      <Header />
      <TouchableScale
        style={gameStyles.settingsIcon}
        onPress={handleToggleMenu}
      >
        <Icon
          name="bars"
          size={25}
          color="black"
          borderColor="black"
          borderRadius="5px"
          style={{ top: 35, left: 35 }}
        />
        <Oracle />
      </TouchableScale>

      <TouchableScale style={gameStyles.heartsIcon}>
        <HeartsDisplay />
      </TouchableScale>

      <MenuComponent
        menuVisible={menuVisible}
        closeMenu={() => setMenuVisible(false)}
      />

      <BackgroundImageComponent
        //updatedList = {updatedList}
        backgroundImage={backgroundImage}
        plantPositions={currentBackground.plantPositions}
      />
    </View>
  );
};

export default GameScreen;
