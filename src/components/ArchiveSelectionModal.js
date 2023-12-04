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

  // Function to get the stage 4 growth image path for the selected skin
  const getStage4ImagePath = (plantID) => {
    const plant = plantsConfig[plantID];
    const selectedSkin = plant.skins.find(
      (skin) => skin.name === plant.selectedSkin
    );
    return selectedSkin.growth.find((g) => g.growthStage === 1.0).imagePath;
  };

  for (let i = 0; i < plantData.length; i++) {
    let plantID = parseInt(plantData[i].plantID);
    plantData[i].iconPath = getStage4ImagePath(plantID); // Update the iconPath
    plantData[i].name = plantsConfig[plantID].name;
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
                      source={plant.iconPath} // Updated image source
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

export default SelectFromArchiveModal;
