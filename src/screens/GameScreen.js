import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import TouchableScale from "react-native-touchable-scale";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from "../components/HeaderComponent";
import { backgrounds } from "../states/backgroundsConfig";
import MenuComponent from "../components/MenuComponent";
import BackgroundImageComponent from "../components/BackgroundImageComponent";
import { toggleMenu } from "../utilities/menuUtilities";
import gameStyles from "../styles/GameScreenStyles";
import HeartsDisplay from "../components/HeartsComponent";
import {
  playBackgroundMusic,
  pauseBackgroundMusic,
  stopBackgroundMusic,
  setupPlayer,
} from "../utilities/backgroundMusic";

const GameScreen = () => {
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

  const oracleNormal = require("../assets/oracle_edit/sun_normal.png");
  const oracleSmile1 = require("../assets/oracle_edit/sun_smile_1.png");
  const oracleSmile2 = require("../assets/oracle_edit/sun_smile_2.png");
  const oracleBigSmile1 = require("../assets/oracle_edit/sun_big_smile_1.png");
  const oracleBigSmile2 = require("../assets/oracle_edit/sun_big_smile_2.png");
  const oracleSad = require("../assets/oracle_edit/sun_sad.png");
  const oracleSurprise = require("../assets/oracle_edit/sun_surprise.png");

  const [oracleImage, setOracleImage] = useState(oracleNormal);

  const handleToggleMenu = () => {
    setMenuVisible(toggleMenu(menuVisible));
  };

  const oracleImages = [
    oracleNormal,
    oracleBigSmile1,
    oracleBigSmile2,
    oracleSurprise,
  ];
  const blinkImages = [oracleSmile1, oracleSmile2];

  const getRandomImage = () => {
    return oracleImages[Math.floor(Math.random() * oracleImages.length)];
  };

  const getRandomBlinkImage = () => {
    return blinkImages[Math.floor(Math.random() * blinkImages.length)];
  };

  const getCooldownDuration = (imageType) => {
    switch (imageType) {
      case "blink":
        return Math.random() * 200 + 100;
      case "normal":
        return Math.random() * 5000 + 3000;
      default:
        return 3000;
    }
  };

  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    setupPlayer().then(() => {
      console.log("Audio player is set up.");
    });

    playBackgroundMusic();

    const changeImage = () => {
      if (!isBlinking) {
        const nextImage = getRandomImage();
        setOracleImage(nextImage);

        setTimeout(() => {
          setOracleImage(oracleNormal);
        }, 2000); // Display time for regular image
      }

      setTimeout(changeImage, (Math.random() * 25000) + 7000); // Schedule next regular image change
    };

    const performBlink = () => {
      const nextBlinkImage = getRandomBlinkImage();
      setOracleImage(nextBlinkImage); // Start blink

      setTimeout(() => {
        setOracleImage(oracleNormal); // End blink
        // Wait a bit after the blink ends before allowing another image change
        setTimeout(() => setIsBlinking(false), 3000);
      }, Math.random() * 300 + 100); // Blink duration (100 to 400 milliseconds)
    };

    const blink = () => {
      setIsBlinking(true);
      performBlink();

      const blinkTwiceChance = Math.random();
      if (blinkTwiceChance < 0.1) {
        // 10% chance to blink twice
        setTimeout(() => {
          setIsBlinking(true);
          performBlink();
        }, 400); // Wait a bit before the second blink
      }

      setTimeout(blink, Math.random() * 8000 + 2000); // Random interval for next blink (2 to 10 seconds)
    };

    changeImage(); // Start changing images
    blink(); // Start blinking

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
        <Image
          source={oracleImage}
          style={[{ width: 50, height: 50, position: "absolute" }]}
        />
      </TouchableScale>

      <TouchableScale style={gameStyles.heartsIcon}>
        <HeartsDisplay />
      </TouchableScale>

      <MenuComponent
        menuVisible={menuVisible}
        closeMenu={() => setMenuVisible(false)}
      />

      <BackgroundImageComponent
        backgroundImage={backgroundImage}
        plantPositions={currentBackground.plantPositions}
      />
    </View>
  );
};

export default GameScreen;
