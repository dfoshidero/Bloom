// ScaleAnimation.js
import React, { useState, useEffect } from "react";
import { Animated, TouchableOpacity, View } from "react-native";

const ScaleAnimation = ({ children, isActive }) => {
    const [scaleAnim] = useState(new Animated.Value(1)); // Initial value for scale: 1

    const opacity = scaleAnim.interpolate({
        inputRange: [1, 1.1],
        outputRange: [1, 0.5],
    });

    useEffect(() => {
        if (isActive) {
            scaleIn();
        } else {
            scaleOut();
        }
    }, [isActive]);

    const scaleIn = () => {
        Animated.spring(scaleAnim, {
            toValue: 1.1, // scale up to 110%
            speed: 20,
            bounciness: 20,
            useNativeDriver: true,
        }).start();
    };

    const scaleOut = () => {
        Animated.spring(scaleAnim, {
            toValue: 1, // scale back to 100%
            speed: 20,
            bounciness: 20,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View pointerEvents="none">
            <TouchableOpacity
                activeOpacity={opacity}
            >
                <Animated.View style={{ transform: [{ scale: scaleAnim }], opacity }}>
                    {children}
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

export default ScaleAnimation;
