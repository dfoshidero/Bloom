// PlantSelectionModal.js
import React from "react";
import { Modal, ScrollView, Text, View, Image } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { plants } from "../states/plantsConfig";
import styles from "../styles/PlantStyles";

const SelectPlantModal = ({ visible, onClose, handleSelectPlant }) => {
  return (
    <Modal
        visible={visible}
        transparent
        animationType="slide"
      >
        <TouchableScale
          style={styles.modalSelectPlantOverlay}
          onPressOut={onClose}
        >
          <View style={styles.modalSelectPlantView}>
            <ScrollView horizontal={true} style={styles.scrollViewStyle}>
              {Object.entries(plants).map(([key, plant]) => (
                <TouchableScale
                  key={plant.plantID}
                  onPress={() => handleSelectPlant(plant.plantID)}
                >
                  <View style={styles.plantCard}>
                    <Image
                      source={plant.iconPath}
                      style={{ width: "80%", height: "80%" }}
                    />
                    <Text>{plant.name}</Text>
                  </View>
                </TouchableScale>
              ))}
            </ScrollView>
          </View>
        </TouchableScale>
      </Modal>
  );
};
      
export default SelectPlantModal;
