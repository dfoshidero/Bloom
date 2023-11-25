import React, { useContext } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
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

  const renderArchivedPlant = ({ item, index }) => (
    <Plant
      key={item.archiveID}
      id={item.archiveID}
      style={[styles.plant, index === 0 && styles.firstPlant]}
      isArchived={true}
    />
  );

  const itemWidth = (windowWidth * 0.8) / 3 - 20;
  const totalWidth =
    archivedPlants.length * itemWidth + (archivedPlants.length - 1) * 60;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={menuBackgroundImage}
        style={styles.backgroundImage}
      />
      <View style={styles.titleContainer}>
        <GameText style={styles.title}>Collection</GameText>
      </View>
      <FlatList
        data={archivedPlants}
        renderItem={renderArchivedPlant}
        keyExtractor={(item) => item.archiveID}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast" // Faster deceleration for more pronounced paging effect
        snapToInterval={itemWidth + 60} // The width of each item plus the margin
        snapToAlignment="start" // Start scrolling immediately when you release the touch
        style={[styles.flatList, { width: totalWidth }]}
        contentContainerStyle={styles.flatListContent}
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
  flatList: {
    alignSelf: "center",
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
    width: (windowWidth * 0.8) / 3 - 20,
    height: windowHeight * 0.2,
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
  flatListContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  firstPlant: {},
});

export default CollectionScreen;
