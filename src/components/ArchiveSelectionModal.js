// SelectFromArchiveModal.js
import React, { useContext } from "react";
import {
  Modal,
  ScrollView,
  Text,
  View,
  Image,
} from "react-native";
import styles from "../styles/PlantStyles";
import { usePlantContext } from "../states/plantsDataContext";
import GameText from "../styles/GameText";

import TouchableScale from "react-native-touchable-scale";

const SelectFromArchiveModal = ({
  visible,
  onClose,
  handleRemoveFromArchive,
}) => {
  const { plantData, plantsConfig } = usePlantContext();

  for (let i = 0; i < plantData.length; i++){
    let plantSpecies = plantsConfig[parseInt(plantData[i].plantID)];
    plantData[i].iconPath = plantSpecies.iconPath;
    plantData[i].name = plantSpecies.name;
  }

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableScale
        style={styles.modalSelectPlantOverlay}
        onPressOut={onClose}
      >
        <View style={styles.modalSelectPlantView}>
          <ScrollView horizontal={true} style={styles.scrollViewStyle}>
            {Object.entries(plantData)
              .filter(([key, plant]) => plant.archiveID !== "null")
              .map(([key, plant]) => (
                <TouchableScale
                  key={plant.archiveID}
                  onPress={() =>
                    handleRemoveFromArchive(plant.archiveID, plant.plantID)
                  }
                >
                  <View style={styles.plantCard}>
                    <Image
                      source={plant.iconPath}
                      style={{ width: "80%", height: "80%" }}
                    />
                    <GameText style={{fontSize: 10, textAlign: "center"}}>{plant.name}</GameText>
                  </View>
                </TouchableScale>
              ))}
          </ScrollView>
        </View>
      </TouchableScale>
    </Modal>
  );
};

export default SelectFromArchiveModal;
