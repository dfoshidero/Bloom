import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TouchableScale from "react-native-touchable-scale";

import Header from '../components/HeaderComponent';
import { backgrounds } from '../states/backgroundsConfig';
import MenuComponent from '../components/MenuComponent'; // Adjust the import path as needed
import BackgroundImageComponent from '../components/BackgroundImageComponent'; // Adjust the import path as needed
import { toggleMenu } from '../utilities/menuUtilities'; // Adjust the import path as needed
import gameStyles from '../styles/GameScreenStyles';
import {
  playBackgroundMusic,
  pauseBackgroundMusic,
  stopBackgroundMusic,
  setupPlayer,
} from "../utilities/backgroundMusic";

const GameScreen = () => {
    const [currentBackground, setCurrentBackground] = useState(backgrounds.background4);
    const backgroundImage = currentBackground.image;
    const [menuVisible, setMenuVisible] = useState(false);

    const handleToggleMenu = () => {
        setMenuVisible(toggleMenu(menuVisible));
    };

     useEffect(() => {
       // Setup the player when the app loads
       setupPlayer().then(() => {
         console.log("Player is set up");
       });

       // Optionally, start playing music when the app loads
       playBackgroundMusic();

       return () => {
         // Stop and clean up on app unmount
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
            borderColor="white"
            borderRadius="5px"
            style={{ top: 35, left: 35 }}
          />
          <Image
            source={require("../assets/oracle_edit/sun_normal.png")}
            style={[{ width: 50, height: 50, position: "absolute" }]}
          />
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
