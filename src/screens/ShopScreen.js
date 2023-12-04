import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  Modal,
} from "react-native";
import { usePlayerConfig } from "../states/playerConfigContext";
import { RFValue } from "react-native-responsive-fontsize";
import GameText from "../styles/GameText";
import TouchableScale from "react-native-touchable-scale";
import shopBackgroundImage from "../assets/backgrounds/misc/menu_bg.png";

import CoinDisplay from "../components/CoinComponent";

import { PlantDataContext } from "../states/plantsDataContext";


const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

  const aspectRatio = screenHeight / screenWidth;
  let itemsTop;
  let itemsPad;
  let itemsRight;
  let itemsGap;
  let textTop;
  let coinsBot;

  if (aspectRatio < 2.1) {
    // Adjust the top position for wider aspect ratios
    itemsTop = "4%";
    itemsPad = "25%";
    itemsRight = "20%";
    itemsGap = "105%";
    textTop = "77%";
    coinsBot = "140%";
  } else {
    // Adjust the top position for narrower aspect ratios
    itemsTop = "8%";
    itemsPad = "30%";
  itemsRight = "15%";
  itemsGap = "105%";
  textTop = "110%";
  coinsBot = "140%";
  }


// Example: setting textSize to be 2% of the screen height
const textSize = RFValue(screenHeight * 0.01);

// Example: setting buttonFontSize to be 1.5% of the screen height
const buttonFontSize = RFValue(screenHeight * 0.0075);

const numColumns = 3;
const windowWidth = Dimensions.get("window").width;
const itemWidth = windowWidth / numColumns - 20; // Adjust this as needed for padding/margin

const totalItemHorizontalMargin = numColumns * 3 * 2;

const flatListWidth = (itemWidth * numColumns) + totalItemHorizontalMargin;

const ShopScreen = ({ navigation }) => {
  const { playerState, updatePlayerConfig, coins, hearts } = usePlayerConfig();
  

  const [items, setItems] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [purchaseType, setPurchaseType] = useState(""); // 'skin' or 'heart'
  const [purchaseItem, setPurchaseItem] = useState(null); // Item to be purchased

  const [showOnlyUnowned, setShowOnlyUnowned] = useState(false); // New state variable

    const { savePlantsConfig, plantsConfig } = useContext(PlantDataContext);

  useEffect(() => {
    if (plantsConfig) {
      let allItems = [];
      const plantsArray = Object.values(plantsConfig);

      plantsArray.forEach((plant) => {
        plant.skins.forEach((skin) => {
          const isOwned = plant.skinsOwned.includes(skin.name);
          const isSelected = plant.selectedSkin === skin.name;
          if (!showOnlyUnowned || !isOwned) {
            // Filter based on showOnlyUnowned
            allItems.push({
              name: `${capitalizeFirstLetter(
                skin.name === "default" ? "Basic" : skin.name
              )} ${capitalizeFirstLetter(plant.name)}`,
              image: skin.growth[skin.growth.length - 1].imagePath,
              owned: isOwned,
              applied: isSelected,
              plantId: plant.plantID,
              skinId: skin.name,
              unlockCondition: skin.unlockCondition,
            });
          }
        });
      });

      setItems(formatData(allItems, numColumns));
    }
  }, [plantsConfig, showOnlyUnowned]);

  const toggleShowOnlyUnowned = () => {
    setShowOnlyUnowned(!showOnlyUnowned);
  };

  const renderGridItem = ({ item }) => {
    if (item.empty) {
      return <View style={[styles.itemContainer, styles.itemPlaceholder]} />;
    }

    if (selectedPlant === null || selectedPlant === item.plantId) {
      let buttonStyle = styles.button; // Default button style
      let buttonText = "";

      if (!item.owned) {
        // If the item is not owned
        buttonStyle = styles.buttonNotOwned; // Apply different style
        buttonText = `${
          plantsConfig[item.plantId].skins.find(
            (skin) => skin.name === item.skinId
          )?.unlockCondition
        } Coins`;
      } else if (item.owned && !item.applied) {
        // If the item is owned but not applied
        buttonStyle = styles.buttonOwnedNotApplied; // Apply a different style
        buttonText = "Apply";
      } else {
        buttonText = "Applied";
      }

      return (
        <TouchableScale style={styles.itemContainer}>
          <Image source={item.image} style={styles.itemImage} />
          <GameText style={styles.itemName}>{item.name}</GameText>
          <View style={styles.buttonContainer}>
            <TouchableScale
              style={buttonStyle} // Use the dynamically determined style
              onPress={() => handleSkinAction(item)}
            >
              <GameText style={styles.buttonText}>{buttonText}</GameText>
            </TouchableScale>
          </View>
        </TouchableScale>
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

   const handleBuyHearts = async (heartsToBuy) => {
     const costPerHeart = 10; // Assuming each heart costs 10 coins
     const totalCost = costPerHeart * heartsToBuy;

     if (coins >= totalCost) {
       setPurchaseType("heart");
       setPurchaseItem({ heartsToBuy, totalCost }); // Save purchase details
       setShowModal(true); // Show confirmation modal
     } else {
       // Handle not enough coins scenario
     }
   };
   const handleSkinAction = async (item) => {
     const plant = plantsConfig[item.plantId];
     const skin = plant.skins.find((s) => s.name === item.skinId);
     const skinCost = skin.unlockCondition; // Cost from the skin's unlock condition

     if (!plant.skinsOwned.includes(skin.name) && coins >= skinCost) {
       setPurchaseType("skin");
       setPurchaseItem(item); // Save the selected item
       setShowModal(true); // Show confirmation modal
     } else if (plant.skinsOwned.includes(skin.name)) {
       // If the skin is already owned, apply it
       plantsConfig[item.plantId].selectedSkin = item.skinId; // Apply the new skin
       const updatedPlants = { ...plantsConfig }; // Create a new object to trigger state update
       updatedPlants[item.plantId].selectedSkin = item.skinId;
       await savePlantsConfig(updatedPlants);
     }
   };

    const confirmPurchase = async () => {
      if (purchaseType === "skin") {
        const updatedCoins = coins - purchaseItem.unlockCondition;
        const newOwnedSkins = [
          ...plantsConfig[purchaseItem.plantId].skinsOwned,
          purchaseItem.skinId,
        ];
        plantsConfig[purchaseItem.plantId].skinsOwned = newOwnedSkins; // Update the skinsOwned array for the plant
        plantsConfig[purchaseItem.plantId].selectedSkin = purchaseItem.skinId; // Apply the new skin

        const updatedPlants = { ...plantsConfig }; // Create a new object to trigger state update
        updatedPlants[purchaseItem.plantId].selectedSkin = purchaseItem.skinId;
        await savePlantsConfig(updatedPlants);

        await updatePlayerConfig({ ...playerState, coins: updatedCoins });
        
      } else if (purchaseType === "heart") {
        const updatedCoins = coins - purchaseItem.totalCost;
        const updatedHearts = hearts + purchaseItem.heartsToBuy;

        await updatePlayerConfig({
          ...playerState,
          coins: updatedCoins,
          hearts: updatedHearts,
        });
      }

      setShowModal(false); // Close the modal after purchase
    };

   const ConfirmationModal = () => (
     <Modal
       animationType="fade"
       transparent={true}
       visible={showModal}
       onRequestClose={() => {
         setShowModal(!showModal);
       }}
     >
       <View style={styles.centeredView}>
         <View style={styles.modalView}>
           <GameText style={styles.modalText}>
             Are you sure you want to make this purchase?
           </GameText>
           <View style={styles.modalButtonContainer}>
             <TouchableScale
               style={[styles.button, styles.buttonClose]}
               onPress={() => confirmPurchase()}
             >
               <GameText style={styles.textStyle}>Yes</GameText>
             </TouchableScale>
             <TouchableScale
               style={[styles.button, styles.buttonClose]}
               onPress={() => setShowModal(false)}
             >
               <GameText style={styles.textStyle}>No</GameText>
             </TouchableScale>
           </View>
         </View>
       </View>
     </Modal>
   );


  return (
    <View style={styles.container}>
      <ConfirmationModal />
      <ImageBackground
        source={shopBackgroundImage}
        style={styles.backgroundImage}
      >
        <View style={styles.switchContainer}>
          <TouchableScale
            style={{ left: itemsGap, bottom: coinsBot, position: "absolute" }}
          >
            <CoinDisplay />
          </TouchableScale>

          <TouchableScale
            style={[
              styles.toggleButton,
              {
                backgroundColor: showOnlyUnowned ? "#4CAF50" : "#008000",
              },
            ]}
            onPress={toggleShowOnlyUnowned}
          >
            <GameText style={styles.buttonText}>
              {showOnlyUnowned ? "Hiding Applied Skins" : "Showing All Skins"}
            </GameText>
          </TouchableScale>
        </View>

        {/* Rest of the content below the Coin Display */}
        <View style={styles.contentContainer}>
          <View style={styles.bigTop}>
            <TouchableScale
              style={styles.bigButton}
              onPress={() => handleBuyHearts(1)}
            >
              <GameText style={styles.buttonText}>
                Buy Heart for 10 Coins
              </GameText>
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
                      backgroundColor:
                        selectedPlant === null ? "#4CAF50" : "#aaa",
                    },
                  ]}
                  onPress={handleShowAll}
                >
                  <GameText style={styles.buttonText}>All</GameText>
                </TouchableScale>

                {Object.values(plantsConfig).map((plant) => (
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
                    <GameText style={styles.buttonText}>{plant.name}</GameText>
                  </TouchableScale>
                ))}
              </ScrollView>
            </View>
          </View>

          <FlatList
            data={items}
            renderItem={renderGridItem}
            keyExtractor={(item, index) =>
              `${item.plantId}-${item.skinId}-${index}`
            }
            numColumns={numColumns}
            contentContainerStyle={styles.itemListContainer}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

function capitalizeFirstLetter(string) {
  return string.replace(/\b(\w)/g, (s) => s.toUpperCase());
}

function formatData(data, numColumns) {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({
      empty: true,
      plantId: `blank-${numberOfElementsLastRow}`,
      skinId: "blank",
    });
    numberOfElementsLastRow++;
  }
  return data;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent", // Changed to transparent
  },
  coinDisplayContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    paddingTop: itemsPad,
  },
  buttonNotOwned: {
    backgroundColor: "firebrick", // Change this to the color you want
    paddingVertical: 10, // Customize as needed
    paddingHorizontal: 15, // Customize as needed
    borderRadius: 5, // Customize as needed
    alignItems: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonOwnedNotApplied: {
    backgroundColor: "darkgreen", // Change this to the color you want
    paddingVertical: 10, // Customize as needed
    paddingHorizontal: 15, // Customize as needed
    borderRadius: 5, // Customize as needed
    alignItems: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  toggleButton: {
    backgroundColor: "#008000", // Dark green for initial state
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  switchContainer: {
    position: "absolute",
    right: itemsRight,
    top: itemsTop,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 10, // Adjust the padding as needed
    marginTop: 10,
    zIndex: 5,
  },
  backgroundImage: {
    position: "absolute", // Set position to absolute
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.9,
    resizeMode: "cover", // Ensure the background image covers the whole screen
  },
  itemContainer: {
    width: itemWidth,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    margin: 5,
  },
  itemPlaceholder: {
    backgroundColor: "transparent",
  },
  itemListContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
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
  bigButton: {
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
    width: flatListWidth,
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: buttonFontSize, // Standardized font size
    fontWeight: "500",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemImage: {
    width: 90, // Adjusted for consistent size
    height: 90,
    borderRadius: 45, // Circular images
    overflow: "hidden",
    marginBottom: 5, // Space between image and text
  },
  itemName: {
    fontSize: textSize / 1.3, // Slightly smaller for fitting in grid layout
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1, // Make the button container take up remaining vertical space
    justifyContent: "flex-end", // Position buttons at the bottom
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    maxWidth: "80%", // Ensuring it doesn't stretch too wide on larger screens
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: textSize * 1.5, // Adjust based on your font size preferences
    color: "#333", // Dark text for readability
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%", // Full width of the modal
  },
  buttonClose: {
    backgroundColor: "#4CAF50", // A green color to match the theme
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    minWidth: 100, // Minimum width for each button
    justifyContent: "center", // Centering text
    alignItems: "center", // Centering text
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: buttonFontSize * 1.3,
  },
});


export default ShopScreen;
