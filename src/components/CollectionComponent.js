import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import GameText from "../styles/GameText";
import {useNavigation} from "@react-navigation/native";

import TouchableScale from "react-native-touchable-scale";


const collectionIcon = require("../assets/icons/collection_icon.png");

const CollectionButton = ({style}) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('CollectionScreen');
    };

    return (
        <TouchableScale onPress={handlePress} style={[styles.container, style]}>
            <Image
                source={collectionIcon}
                style={{ width: 62, height: 62 }}
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

export default CollectionButton;


