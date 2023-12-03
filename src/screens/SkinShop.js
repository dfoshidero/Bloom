import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { useShopContext } from "../states/shopDataContext";
import { plants } from "../states/plantsConfig";

const SkinShop = () => {
  const { state, dispatch } = useShopContext();
  const [selectedPlantId, setSelectedPlantId] = useState(null);
  const [appliedSkin, setAppliedSkin] = useState(null);

  const applySkin = (plantId, skinId) => {
    dispatch({ type: "APPLY_SKIN", plantId, skinName: skinId });
  };

  const buySkin = (plantId, skinId) => {
    dispatch({ type: "BUY_SKIN", plantId, skinId });
  };

  const handleBuyOrApply = (skinId) => {
    const selectedPlant = plants[selectedPlantId];
    const isSkinApplied = selectedPlant.selectedSkin === skinId;
    const isSkinOwned = selectedPlant.ownedSkins.includes(skinId);

    if (isSkinApplied) return;
    else if (isSkinOwned && !isSkinApplied) {
      // Apply the skin
      applySkin(selectedPlantId, skinId);
      console.log("selected plant id ", selectedPlantId);
      console.log("skin id ", skinId);
      // setSelectedSkin(skinId);
      // setAppliedSkin(skinId);
    } else if (!isSkinApplied && !isSkinOwned) {
      // Buy the skin for 10 coins
      const skinPrice = 10;
      if (state.coins >= skinPrice) {
        buySkin(selectedPlantId, skinId);
        applySkin(selectedPlantId, skinId);
        // setSelectedSkin(skinId);
        // setAppliedSkin(skinId);
      }
    }
  };

  const renderPlantButton = ({ item }) => {
    const isSelected = selectedPlantId === item.plantID;
    return (
      <TouchableOpacity
        style={[styles.plantButton, isSelected && styles.selectedPlant]}
        onPress={() => setSelectedPlantId(item.plantID)}
      >
        <Text style={styles.plantButtonText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderSkin = ({ item }) => {
    const selectedPlant = plants[selectedPlantId];
    const isSkinApplied = selectedPlant.selectedSkin === item.name;
    const isSkinOwned = selectedPlant.ownedSkins.includes(item.name);

    return (
      <TouchableOpacity
        style={styles.skinItem}
        onPress={() => handleBuyOrApply(item.name)}
      >
        <Text style={styles.skinName}>{item.name}</Text>
        <Image source={item.growth[0].imagePath} style={styles.skinImage} />
        <Text style={styles.skinPrice}>
          {isSkinApplied ? "Applied" : isSkinOwned ? "Apply" : "Buy"}
        </Text>
        <TouchableOpacity
          style={[
            styles.buyOrApplyButton,
            isSkinApplied && { backgroundColor: "#2ecc71" },
          ]}
          onPress={() => handleBuyOrApply(item.name)}
          disabled={isSkinApplied}
        >
          <Text style={styles.buttonText}>
            {isSkinApplied ? "Applied" : isSkinOwned ? "Apply" : "Buy"}
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const skins = selectedPlantId ? plants[selectedPlantId].skins : [];

  return (
    <View style={styles.container}>
      <Text style={styles.coinsText}>Coins: {state.coins}</Text>

      <FlatList
        data={Object.values(plants)}
        renderItem={renderPlantButton}
        keyExtractor={(item) => item.plantID}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={skins}
        renderItem={renderSkin}
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  coinsText: {
    fontSize: 20,
    marginBottom: 20,
  },
  plantButton: {
    padding: 20,
    margin: 5,
    marginTop: 50,
    height: 100,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#3498db",
  },
  selectedPlant: {
    backgroundColor: "#3498db",
  },
  plantButtonText: {
    color: "black",
  },
  skinItem: {
    backgroundColor: "#e0e0e0",
    padding: 10,
    margin: 5,
    borderRadius: 8,
    alignItems: "center",
  },
  skinName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  skinImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 5,
  },
  skinPrice: {
    color: "#555", // Adjust color as needed
    marginBottom: 5,
  },
  buyOrApplyButton: {
    backgroundColor: "#3498db", // Adjust color as needed
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff", // Adjust color as needed
    textAlign: "center",
  },
});

export default SkinShop;
