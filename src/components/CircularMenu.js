import React, { useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  Image,
  Modal,
  Dimensions,
} from "react-native";
import TouchableScale from "react-native-touchable-scale";
import Icon from "react-native-vector-icons/FontAwesome";

const windowWidth = Dimensions.get("window").width;
const iconSize = windowWidth * 0.15; // 15% of screen width

const FloatingMenu = ({ visible, onPress, menuItems, centralIconIndex }) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: visible ? 1 : 0,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [visible, scaleValue]);

  const getTransformStyle = (item, index) => {
    if (index === centralIconIndex) {
      // Central icon positioning
      return {
        position: "absolute",
        transform: [{ scale: scaleValue }],
      };
    }

    // For other icons
    const angleInRadians = (item.angle * Math.PI) / 180; // Convert angle to radians

    const radius = 80; // Circle radius

    const translateX = scaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, radius * Math.cos(angleInRadians)],
    });

    const translateY = scaleValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, radius * Math.sin(angleInRadians)],
    });

    return {
      transform: [
        { translateX: translateX },
        { translateY: translateY },
        { scale: scaleValue },
      ],
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
            style={[styles.circle, getTransformStyle(item, index)]}
          >
            <TouchableScale onPress={() => onPress(item)}>
              {item.isImage ? (
                <Image
                  source={item.icon}
                  style={
                    index === centralIconIndex
                      ? styles.centralIconImage
                      : styles.iconImage
                  }
                />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: "5%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  iconImage: {
    width: iconSize,
    height: iconSize,
  },
  centralIconImage: {
    width: iconSize * 1.5,
    height: iconSize * 1.5,
  },
  // ... (other styles)
});

export default FloatingMenu;
