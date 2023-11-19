import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


import { backgrounds } from '../states/backgroundsConfig';
import MenuComponent from '../components/MenuComponent'; // Adjust the import path as needed
import BackgroundImageComponent from '../components/BackgroundImageComponent'; // Adjust the import path as needed
import { toggleMenu } from '../utilities/menuUtilities'; // Adjust the import path as needed
import gameStyles from '../styles/GameScreenStyles';

const GameScreen = () => {
    const [currentBackground, setCurrentBackground] = useState(backgrounds.background2);
    const backgroundImage = currentBackground.image;
    const [menuVisible, setMenuVisible] = useState(false);

    const handleToggleMenu = () => {
        setMenuVisible(toggleMenu(menuVisible));
    };

    return (
      <View style={gameStyles.container}>
        <TouchableOpacity
          style={gameStyles.settingsIcon}
          onPress={handleToggleMenu}
        >
          <Icon
            name="bars"
            size={25}
            color="black"
            borderColor="white"
            borderRadius="5px"
            style={{ zIndex: 1, top: 45, left: 40 }}
          />
          <Image
            source={require("../assets/oracle_edit/sun_normal.png")}
            style={[{ width: 60, height: 60, position: "absolute" }]}
          />
        </TouchableOpacity>

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
