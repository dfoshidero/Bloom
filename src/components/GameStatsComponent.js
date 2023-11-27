import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import GameText from "../styles/GameText";
import {useNavigation} from "@react-navigation/native";

import TouchableScale from "react-native-touchable-scale";


const gameStatsIcon = require("../assets/icons/game_stats_icon.png");

const GameStatsButton = ({style}) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('GameStatsScreen');
    };

    return (
        <TouchableScale onPress={handlePress} style={[styles.container, style]}>
            <Image
                source={gameStatsIcon}
                style={{ width: 48, height: 48 }}
            />
        </TouchableScale>
    );
};
const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "32%",
        left: "4.5%",
    },
    text: {
        fontSize: 20,
        position: "absolute",
        left: 37,
        top: 27,
        textShadowRadius: 1,
        textShadowOffset: { width: -1, height: 1 },
    },
});

export default GameStatsButton;


