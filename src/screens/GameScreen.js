import React, { useState, useEffect, useContext } from "react";
import { View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import TouchableScale from "react-native-touchable-scale";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";

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
import GameStatsButton from "../components/GameStatsComponent";
import { usePlayerConfig } from "../states/playerConfigContext";

const GameScreen = ({ route }) => {
  const navigation = useNavigation();

  const [menuVisible, setMenuVisible] = useState(false);

  const { level, getUnlockedRooms, hearts, increaseHearts } = usePlayerConfig();
  const unlockedRooms = getUnlockedRooms(level);

  const increasePlayerHearts = () => {
    if (hearts + 1 <= 5) {
      increaseHearts();
    }
  };

  useEffect(() => {
    const interval = setInterval(increasePlayerHearts, 60000); // Call increasePlayerHearts every 1 minute (60,000 milliseconds)
    
    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleToggleMenu = () => {
    setMenuVisible(toggleMenu(menuVisible));
  };

  useEffect(() => {
    setupPlayer().then(() => {
      console.log("Audio player is set up.");
    });

    playRandomBackgroundMusic();

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
        <XPBar />
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
    </View>
  );
};

export default GameScreen;
