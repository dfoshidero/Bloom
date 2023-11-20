import React, { useState, useRef } from "react";
import { View, StyleSheet, Animated, Image } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import Icon from "react-native-vector-icons/FontAwesome";

const FloatingMenu = ({ onPress, menuItems }) => {
  const [pop, setPop] = useState(false);

  const scaleValue = useRef(new Animated.Value(0)).current;

  const popIn = () => {
    setPop(true);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const popOut = () => {
    setPop(false);
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <Animated.View
          key={index}
          style={[
            styles.circle,
            {
              transform: [
                {
                  scale: scaleValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 1],
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableScale onPress={onPress}>
            {item.isImage ? (
              <Image source={item.icon} style={styles.iconImage} />
            ) : (
              <Icon name={item.icon} size={25} color="#FFFF" />
            )}
          </TouchableScale>
        </Animated.View>
      ))}
      <TouchableScale
        style={[styles.circle, styles.centerButton]}
        onPress={() => {
            popOut();
        }}
      >
        <Icon name="plus" size={25} color="#FFFF" />
      </TouchableScale>
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
