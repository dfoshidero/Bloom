import React, { useContext } from "react";
import { View, StyleSheet, Dimensions, ImageBackground } from "react-native";
import PagerView from "react-native-pager-view";
import { PlantDataContext } from "../states/plantsDataContext";
import Plant from "../components/PlantComponent";
import menuBackgroundImage from "../assets/backgrounds/misc/menu_bg.png";
import GameText from "../styles/GameText";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CollectionScreen = () => {
  const { plantData } = useContext(PlantDataContext);

  const archivedPlants = plantData.filter(
    (plant) => plant.archiveID !== "null"
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={menuBackgroundImage}
        style={styles.backgroundImage}
      />
      <View style={styles.titleContainer}>
        <GameText style={styles.title}>Collection</GameText>
      </View>
      <PagerView style={styles.pagerView} initialPage={0} >
        {archivedPlants.map((plant, index) => (
          <View key={plant.archiveID} style={styles.page}>
            <Plant
              id={plant.archiveID}
              isArchived={true}
              style={[styles.plant]}
            />
          </View>
        ))}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  pagerView: {
    flex: 1,
    width: windowWidth,
    height: windowHeight * 0.6, // Adjust the height as needed
  },
  plant: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    width: windowWidth * 0.6,
    height: windowHeight * 0.4,
    marginHorizontal: 30,
  },
  backgroundImage: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.5,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  titleContainer: {
    top: "20%",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: "#fff",
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  firstPlant: {},
});

export default CollectionScreen;
