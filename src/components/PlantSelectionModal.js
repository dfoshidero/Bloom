// PlantSelectionModal.js
import React from "react";
import { Modal, ScrollView, Text, View, Image } from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { usePlantContext } from "../states/plantsDataContext";
import styles from "../styles/PlantStyles";
import GameText from "../styles/GameText";

const archiveIcon = require("../assets/icons/collection_icon.png");

const SelectPlantModal = ({ visible, onClose, handleSelectPlant, handleSelectFromArchive }) => {

  const { plantsConfig } = usePlantContext();

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableScale
        style={styles.modalSelectPlantOverlay}
        onPressOut={onClose}
      >
        <TouchableScale
          onPress={() => handleSelectFromArchive()}
          style={styles.archiveButton}
        >
          <View style={styles.archiveButton}>
            <Image
              source={archiveIcon}
              style={{ width: "65%", height: "65%", top: "40%", left: "5%" }}
            />
            <GameText
              style={{
                top: "35%",
                left: "5%",
                fontSize: 10,
                textAlign: "center",
              }}
            >
              Collection
            </GameText>
          </View>
        </TouchableScale>
        <View style={styles.modalSelectPlantView}>
          <ScrollView horizontal={true} style={styles.scrollViewStyle}>
            {Object.entries(plantsConfig).map(([key, plant]) => (
              <TouchableScale
                key={plant.plantID}
                onPress={() => handleSelectPlant(plant.plantID)}
              >
                <View style={styles.plantCard}>
                  <Image
                    source={plant.iconPath}
                    style={{ width: "80%", height: "80%" }}
                  />
                  <GameText style={{ fontSize: 10, textAlign: "center" }}>
                    {plant.name}
                  </GameText>
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
