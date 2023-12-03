import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { plants } from "../states/plantsConfig";
import { usePlayerConfig } from "../states/playerConfigContext";

import TouchableScale from "react-native-touchable-scale";

const ShopScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const { coins, addCoins } = usePlayerConfig();

  useEffect(() => {
    if (plants) {
      let allItems = [];
      const plantsArray = Object.values(plants);

      plantsArray.forEach((plant) => {
        plant.skins.forEach((skin) => {
          const isOwned = plant.skinsOwned.includes(skin.name);
          const isSelected = plant.selectedSkin === skin.name;
          allItems.push({
            name: `${capitalizeFirstLetter(
              skin.name === "default" ? "Basic" : skin.name
            )} - ${capitalizeFirstLetter(plant.name)}`,
            image: skin.growth[skin.growth.length - 1].imagePath,
            owned: isOwned,
            applied: isSelected,
            plantId: plant.plantID,
            skinId: skin.name,
          });
        });
      });

      setItems(allItems);
    }
  }, [plants]);

  const renderGridItem = ({ item }) => {
    if (selectedPlant === null || selectedPlant === item.plantId) {
      return (
        <View style={styles.itemContainer}>
          <Image source={item.image} style={styles.itemImage} />
          <Text style={styles.itemName}>{item.name}</Text>

          {/* Create a button container to position buttons at the bottom */}
          <View style={styles.buttonContainer}>
            <TouchableScale
              style={styles.button}
              onPress={() => handleSkinAction(item)}
            >
              <Text style={styles.buttonText}>
                {item.owned ? (item.applied ? "Applied" : "Apply") : "Buy"}
              </Text>
            </TouchableScale>
          </View>
        </View>
      );
    } else {
      return null;
    }
  };

  const handlePlantPress = (plantId) => {
    setSelectedPlant(plantId);
  };

  const handleShowAll = () => {
    setSelectedPlant(null); // Set selectedPlant to null to show all items
  };

  return (
    <View style={styles.container}>
      <Text style={styles.coinsText}>Coins: {coins}</Text>
      <TouchableScale
        style={styles.button}
        onPress={() => handleBuyHearts(2)}
      >
        <Text style={styles.buttonText}>Buy 2 Hearts for 20 Coins</Text>
      </TouchableScale>

      <View style={styles.scrollViewContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.plantButtonContainer}
        >
          {/* Add an "All" button */}
          <TouchableScale
            style={[
              styles.plantButton,
              {
                backgroundColor: selectedPlant === null ? "#4CAF50" : "#aaa",
              },
            ]}
            onPress={handleShowAll}
          >
            <Text style={styles.buttonText}>All</Text>
          </TouchableScale>

          {Object.values(plants).map((plant) => (
            <TouchableScale
              key={plant.plantID}
              style={[
                styles.plantButton,
                {
                  backgroundColor:
                    selectedPlant === plant.plantID ? "#4CAF50" : "#aaa",
                },
              ]}
              onPress={() => handlePlantPress(plant.plantID)}
            >
              <Text style={styles.buttonText}>{plant.name}</Text>
            </TouchableScale>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={items}
        renderItem={renderGridItem}
        keyExtractor={(item, index) => item.plantId + item.skinId + index}
        numColumns={3}
      />
    </View>
  );
};

function capitalizeFirstLetter(string) {
  return string.replace(/\b(\w)/g, (s) => s.toUpperCase());
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Consistent light background for contrast
    padding: 10, // Adjusted padding for overall spacing
  },
  coinsText: {
    fontSize: 20, // Slightly smaller for uniformity
    color: "#333", // Consistent text color
    marginTop: 15,
    marginBottom: 15,
    alignSelf: "center", // Center-aligned
  },
  plantButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10, // Add padding to the bottom for separation
  },
  plantButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    margin: 5,
    marginRight: 10, // Add right margin for separation between buttons
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  allButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    margin: 5,
    marginRight: 10, // Add right margin for separation between buttons
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: "#4CAF50", // Unified green color for buttons
    paddingVertical: 10, // Slightly reduced padding
    paddingHorizontal: 15,
    borderRadius: 5, // Rounded corners
    alignItems: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 18, // Slightly smaller for uniformity
    backgroundColor: "#ddd", // Consistent background color
    padding: 10,
    textTransform: "uppercase", // Capitalize section headers
  },
  buttonText: {
    color: "white",
    fontSize: 16, // Standardized font size
    fontWeight: "500",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  itemContainer: {
    flex: 1 / 3, // Adjusted for three columns
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    padding: 8, // Adjusted padding
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 5,
  },
  itemImage: {
    width: 90, // Adjusted for consistent size
    height: 90,
    borderRadius: 45, // Circular images
    overflow: "hidden",
    marginBottom: 5, // Space between image and text
  },
  itemName: {
    fontSize: 14, // Slightly smaller for fitting in grid layout
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1, // Make the button container take up remaining vertical space
    justifyContent: "flex-end", // Position buttons at the bottom
  },
});

export default ShopScreen;
