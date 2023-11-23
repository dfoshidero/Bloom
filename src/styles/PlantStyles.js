import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalSelectPlantOverlay: {
    flex: 1,
    justifyContent: "flex-end", // Align the modal to the bottom
  },

  modalSelectPlantView: {
    zIndex: 0,
    opacity: 0.8,
    bottom: "3%",
    margin: "5%",
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2, // Shadow for the top side of the modal
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxHeight: "40%", // Adjust this to control the modal height
  },

  modalPlantMenuOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    right: 20,
  },

  modalPlantMenuView: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "white",
  },

  scrollViewStyle: {
    flexDirection: "row", // Ensures horizontal layout
    width: "100%", // Ensure full width within modal
  },

  archiveButton: {
    zIndex: 1,
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 10,
  },

  plantCard: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 10,
    // Add other styling as needed
  },

  plantPosition: {
    width: "15%",
    height: "5.5%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  plantImage: {
    width: 200,
    height: 200,
    opacity: 0.95,
    justifyContent: "center",
    alignContent: "center",
  },

  plusIcon: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    elevation: 5,
    width: "85%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  touchPlantImageContainer: {
    position: "absolute",
  },
});

export default styles;