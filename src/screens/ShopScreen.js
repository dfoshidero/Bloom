import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SectionList,
  Image,
} from "react-native";
import { plants } from "../states/plantsConfig";
import { usePlayerConfig } from "../states/playerConfigContext";

const ShopScreen = ({ navigation }) => {
  const [sections, setSections] = useState([]);
  const { coins, addCoins } = usePlayerConfig();

  useEffect(() => {
    if (plants) {
      const plantsArray = Object.values(plants);
      const groupedByPlant = plantsArray.reduce((acc, plant) => {
        const plantName = plant.name;
        if (!acc[plantName]) {
          acc[plantName] = [];
        }
        plant.skins.forEach((skin) => {
          const isOwned = plant.skinsOwned.includes(skin.name);
          const isSelected = plant.selectedSkin === skin.name;
          acc[plantName].push({
            name: capitalizeFirstLetter(
              `${skin.name === "default" ? "Basic" : skin.name}`
            ),
            image: skin.growth[skin.growth.length - 1].imagePath,
            owned: isOwned,
            applied: isSelected,
            plantId: plant.plantID,
            skinId: skin.name,
          });
        });
        return acc;
      }, {});

      const sectionArray = Object.keys(groupedByPlant).map((plantName) => ({
        title: plantName,
        data: groupedByPlant[plantName],
      }));

      setSections(sectionArray);
    }
  }, []);

     const renderItem = ({ item }) => (
       <View style={styles.itemContainer}>
         <Image source={item.image} style={styles.itemImage} />
         <Text style={styles.itemName}>{item.name}</Text>
         <TouchableOpacity
           style={styles.button}
           onPress={() => handleSkinAction(item)}
         >
           <Text style={styles.buttonText}>
             {item.owned ? (item.applied ? "Applied" : "Apply") : "Buy"}
           </Text>
         </TouchableOpacity>
       </View>
     );

     const renderSectionHeader = ({ section: { title } }) => (
       <Text style={styles.sectionHeader}>{title}</Text>
     );

     return (
       <View style={styles.container}>
         <Text style={styles.coinsText}>Coins: {coins}</Text>
         <TouchableOpacity
           style={styles.button}
           onPress={() => handleBuyHearts(2)}
         >
           <Text style={styles.buttonText}>Buy 2 Hearts for 20 Coins</Text>
         </TouchableOpacity>

         <SectionList
           sections={sections}
           renderItem={renderItem}
           renderSectionHeader={renderSectionHeader}
           keyExtractor={(item, index) => item + index}
           numColumns={3} // Displaying three items per row
         />
       </View>
     );
};


// Utility function to capitalize the first letter of each word
function capitalizeFirstLetter(string) {
  return string.replace(/\b(\w)/g, s => s.toUpperCase());
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Light background color for better contrast
    padding: 20,
  },
  coinsText: {
    fontSize: 22,
    color: "#333", // Darker color for text
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center", // Centering the coins text
  },
  button: {
    backgroundColor: "#4CAF50", // A green color for buttons
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5, // Rounded corners
    alignItems: "center",
    margin: 5,
    shadowColor: "#000", // Adding a shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: "#ddd",
    padding: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  itemContainer: {
    flex: 1/3, // Each item takes half the width of the screen
    flexDirection: "column", // Stack elements vertically
    alignItems: "center", // Center items horizontally
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 5,
  },
  itemImage: {
    width: 100, // Adjust image size
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
  itemName: {
    fontSize: 16,
    textAlign: "center", // Center text
    marginTop: 5, // Add spacing between image and text
  },
});

export default ShopScreen;
