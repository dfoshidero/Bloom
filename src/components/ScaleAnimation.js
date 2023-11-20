// ScaleAnimation.js
import React, { useState } from "react";
import { Animated, TouchableOpacity  } from "react-native";

const ScaleAnimation = ({ children }) => {
  // Define the scale animation value
const [scaleAnim] = useState(new Animated.Value(1)); // Initial value for scale: 1

// Function to scale in with a bounce
const scaleIn = () => {
  Animated.spring(scaleAnim, {
    toValue: 1.1, // scale up to 110%
    speed: 20,
    bounciness: 20,
    useNativeDriver: true,
  }).start();
};

// Function to scale out to original size
const scaleOut = () => {
  Animated.spring(scaleAnim, {
    toValue: 1, // scale back to 100%
    speed: 20,
    bounciness: 20,
    useNativeDriver: true,
  }).start();
};

  return (
    <TouchableOpacity activeOpacity={0.5}
    onPressIn={scaleIn} 
    onPressOut={scaleOut}>
<Animated.View 
    style={{ transform: [{ scale: scaleAnim }] }}
    >
      {children}
    </Animated.View>
    </TouchableOpacity>
  );
};

export default ScaleAnimation;
