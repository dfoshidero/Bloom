import React, { useEffect, useRef } from "react";
import {
  Modal,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
} from "react-native";

const Overlay = ({ isVisible, onClose, children }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity

  useEffect(() => {
    if (isVisible) {
      // Fade in
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Reset to zero but without animation
      fadeAnim.setValue(0);
    }
  }, [isVisible, fadeAnim]);

  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalOverlay}
        onPress={onClose}
        activeOpacity={1}
      >
        <Animated.View style={[styles.modalView, { opacity: fadeAnim }]}>
          <ScrollView horizontal={true} style={styles.scrollViewStyle}>
            {children}
          </ScrollView>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "30%",
    width: "100%",
  },
  scrollViewStyle: {
    flexDirection: "row",
  },
  // ... Add any additional styles
});

export default Overlay;
