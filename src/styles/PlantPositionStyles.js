import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modalSelectPlantOverlay: {
    flex: 1,
    justifyContent: "flex-end", // Align the modal to the bottom
  },

  modalSelectPlantView: {
    opacity: 0.8,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    padding: 20,
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
  // modalView: {
  //   backgroundColor: "white",
  //   borderTopLeftRadius: 20,
  //   borderTopRightRadius: 20,
  //   padding: 10,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: -2, // Shadow for the top side of the modal
  //   },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.84,
  //   elevation: 5,
  //   maxHeight: "40%", // Adjust this to control the modal height
  // },

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
    width: 60,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  addButton: {
    // Add your styles for the add button here
    position: "absolute",
    right: 15, // Adjust as needed to float the button
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  plantImage: {
    width: 200,
    height: 200,
    opacity: 0.85,
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
    width: 60,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  touchPlantImageContainer: {
    position: "absolute",
  },

});

export default styles;