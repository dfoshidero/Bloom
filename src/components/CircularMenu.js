import React, { useState, useRef } from "react";
import { View, StyleSheet, Animated, Easing, Image } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import Icon from "react-native-vector-icons/FontAwesome";

export function handleButtonPress(setFloatingMenuVisible) {
    setFloatingMenuVisible(false);
}


const FloatingMenu = ({ onPress, menuItems }) => {
  const [pop, setPop] = useState(false);
  setPop(pop);

  const scaleValue = useRef(new Animated.Value(0)).current;

  const popIn = () => {
    setPop(true);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const popOut = () => {
    setPop(false);
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 500,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const getTransformStyle = (index) => {
    const numberOfItems = menuItems.length;
    const angle = (index * 2 * Math.PI) / numberOfItems;

    const translateX = scaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 80 * Math.cos(angle)], // Adjust the radius of the circle (80 in this case)
    });

    const translateY = scaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 80 * Math.sin(angle)], // Adjust the radius of the circle (80 in this case)
    });

    return {
      transform: [
        { scale: pop ? 1 : 0 },
        { translateX },
        { translateY },
      ],
    };
  };

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <Animated.View key={index} style={[styles.circle, getTransformStyle(index)]}>
          <TouchableScale onPress={() => onPress(item)}>
            {item.isImage ? (
              <Image source={item.icon} style={styles.iconImage} />
            ) : (
              <Icon name={item.icon} size={25} color="#FFFF" />
            )}
          </TouchableScale>
        </Animated.View>
      ))}
    </View>
  );
};

export default FloatingMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    backgroundColor: "#f52d56",
    width: 60,
    height: 60,
    position: "absolute",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  centerButton: {
    bottom: 40, // Adjust this value based on your design
    right: 40, // Adjust this value based on your design
  },
  iconImage: {
    width: 25,
    height: 25,
  },
});
