import React, { useState, useEffect, useCallback } from "react";
import { View, Image, Modal, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import TouchableScale from "react-native-touchable-scale";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swiper from "react-native-swiper";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import CoinDisplay from "../components/CoinComponent";
import XPBar from "../components/XPBarComponent";
import Header from "../components/HeaderComponent";
import { backgrounds } from "../states/backgroundsConfig";
import MenuComponent from "../components/MenuComponent";
import TwoDimSpace from "../components/2DSpaceComponent";
import { toggleMenu } from "../utilities/menuUtilities";
import gameStyles from "../styles/GameScreenStyles";
import Oracle from "../components/OracleComponent";
import HeartsDisplay from "../components/HeartsComponent";
import {
  playRandomBackgroundMusic,
  pauseBackgroundMusic,
  stopBackgroundMusic,
  setupPlayer,
} from "../utilities/backgroundMusic";
import CollectionButton from "../components/CollectionComponent";
import GameText from "../styles/GameText";
import GameStatsButton from "../components/GameStatsComponent";
import { usePlayerConfig } from "../states/playerConfigContext";

const GameScreen = ({ route }) => {
  const navigation = useNavigation();
  const [musicEnabled, setMusicEnabled] = useState(true);

  const [menuVisible, setMenuVisible] = useState(false);

  const [levelUpModalVisible, setLevelUpModalVisible] = useState(false);
  const [shouldShowLevelUpModal, setShouldShowLevelUpModal] = useState(false);

  const [forceUpdate, setForceUpdate] = useState(false);

  const { level, getUnlockedRooms, hearts, increaseHearts } = usePlayerConfig();
  const unlockedRooms = getUnlockedRooms(level);

  const checkLevelUp = async () => {
    try {
      const storedLevelString = await AsyncStorage.getItem("storedLevel");
      const storedLevel = storedLevelString ? parseInt(storedLevelString) : 0;

      if (level > storedLevel && level != 1) {
        setLevelUpModalVisible(true);
        await AsyncStorage.setItem("storedLevel", level.toString());
      }
    } catch (error) {
      console.error("Failed to read or update level from storage", error);
    }
  };

  // Modified useEffect using useFocusEffect
  useFocusEffect(
    React.useCallback(() => {
      checkLevelUp(); // Call this function whenever the screen is focused
    }, [level]) // Dependency on level
  );

  const handleToggleMenu = () => {
    setMenuVisible(toggleMenu(menuVisible));
  };

  // Function to load and apply the music setting
  const applyMusicSetting = async () => {
    try {
      const savedMusicSetting = await AsyncStorage.getItem('musicEnabled');
      // Use the saved setting if available, otherwise default to true
      const isMusicEnabled = savedMusicSetting !== null ? savedMusicSetting === 'true' : true;
      setMusicEnabled(isMusicEnabled);

      if (savedMusicSetting !== null && isMusicEnabled) {
        playRandomBackgroundMusic();
      } else if (savedMusicSetting !== null) {
        stopBackgroundMusic();
      } else {
        playRandomBackgroundMusic();
      }
    } catch (error) {
      console.error("Failed to load music setting from storage", error);
    }
  };


  // useEffect to setup the player
  useEffect(() => {
    setupPlayer().then(() => {});
    applyMusicSetting();

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
      <TouchableScale style={gameStyles.collectionIcon}>
        <CollectionButton />
      </TouchableScale>
      <TouchableScale style={gameStyles.gameStatsIcon}>
        <GameStatsButton />
      </TouchableScale>
      <TouchableScale
        style={gameStyles.coinIcon}
        onPress={() => {
          navigation.navigate("ShopScreen");
        }}
      >
        <CoinDisplay />
      </TouchableScale>
      <View style={gameStyles.xpBar}>
        <XPBar animateLevelUp={false} />
      </View>
      <MenuComponent
        menuVisible={menuVisible}
        closeMenu={() => setMenuVisible(false)}
      />

      {/* Swiper for different rooms */}
      <Swiper loop={false} style={gameStyles.swiper}>
        {unlockedRooms.map((room, index) => (
          <TwoDimSpace
            key={room.id}
            backgroundImage={room.image}
            plantPositions={room.plantPositions}
            roomID={room.id}
          />
        ))}
      </Swiper>

      {/* Level Up Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={levelUpModalVisible}
        onRequestClose={() => {
          setLevelUpModalVisible(!levelUpModalVisible);
        }}
      >
        <View style={gameStyles.centeredView}>
          <View style={gameStyles.modalView}>
            <GameText style={gameStyles.modalText}>
              Congrats! You are now level {level}!
            </GameText>
            <View style={{ bottom: "0%" }}>
              <XPBar animateLevelUp={true} />
            </View>
            <TouchableScale
              style={gameStyles.button}
              onPress={() => setLevelUpModalVisible(!levelUpModalVisible)}
            >
              <GameText style={gameStyles.textStyle}>Close</GameText>
            </TouchableScale>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GameScreen;
