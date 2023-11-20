import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Animated, Easing, Image } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import Icon from "react-native-vector-icons/FontAwesome";
import { Modal, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;

const iconSize = windowWidth * 0.15; // 10% of screen width, for example


const FloatingMenu = ({ visible, onPress, menuItems }) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 250,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 250,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }
  }, [visible, scaleValue]);

  const getTransformStyle = (index) => {
    const numberOfItems = menuItems.length;
    const angle = (index * 2 * Math.PI) / numberOfItems;

    const translateX = scaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 80 * Math.cos(angle)], // Radius of the circle
    });

    const translateY = scaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 80 * Math.sin(angle)], // Radius of the circle
    });

    return {
      transform: [{ scale: scaleValue }, { translateX }, { translateY }],
    };
  };

  return (
    <Modal visible={visible} transparent={true} animationType="none">
      <View
        style={[styles.container, visible ? {} : { pointerEvents: "none" }]}
      >
        {menuItems.map((item, index) => (
          <Animated.View
            key={index}
            style={[styles.circle, getTransformStyle(index)]}
          >
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
    </Modal>
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
    width: 40, // Set a fixed width
    height: 40, // Set a fixed height to match the width
    borderRadius: 25, // Half of the width/height to make it a circle
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    width: iconSize,
    height: iconSize,
  },
  // ... other styles
});



