// PlantSelectionModal.js
import React from "react";
import { Modal, ScrollView, Text, View, Image } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { plants } from "../states/plantsConfig";
import styles from "../styles/PlantStyles";

const archiveIcon = require("../assets/icon_container.png");

const SelectPlantModal = ({ visible, onClose, handleSelectPlant, handleSelectFromArchive }) => {

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
              <TouchableScale
                key={0}
                onPress={() => handleSelectFromArchive()}
              >
                <View style={styles.plantCard}>
                  <Image
                        source={archiveIcon}
                        style={{ width: "80%", height: "80%" }}
                      />
                  <Text>From archive...</Text>
                </View>
              </TouchableScale>
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
