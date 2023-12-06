import React, { useState, useEffect, useRef } from "react";
import { Image, View, StyleSheet, Animated } from "react-native";

const EvolveAnimation = ({ currentImage, nextImage }) => {
  const [current, setCurrent] = useState(true);
  const [hasSlidIn, setHasSlidIn] = useState(false);
  const slideAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    // Slide in animation
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => setHasSlidIn(true)); // Set hasSlidIn to true after animation
  }, []);

  useEffect(() => {
    if (hasSlidIn) {
      const interval = setInterval(() => {
        setCurrent((prev) => !prev);
      }, 500); // Change the image every 500ms

      return () => clearInterval(interval);
    }
  }, [hasSlidIn]);

  const slidingStyle = {
    transform: [
      {
        translateY: slideAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [-300, 0], // Adjust values for desired sliding effect
        }),
      },
    ],
    opacity: slideAnim,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.imageContainer, slidingStyle]}>
        {current ? (
          <Image source={currentImage} style={styles.image} />
        ) : (
          <Image source={nextImage} style={styles.image} />
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300, // Set as per your requirement
    height: 300, // Set as per your requirement
    bottom: "0%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default EvolveAnimation;
