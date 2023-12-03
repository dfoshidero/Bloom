// ShopScreen.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useShopContext } from "../states/shopDataContext";

const ShopScreen = ({ navigation }) => {
  const { state, dispatch } = useShopContext();

  const handleBuyHearts = (amount) => {
    dispatch({ type: "BUY_HEARTS", amount });
  };

  const handleBuySkin = (plantId, skinId) => {
    dispatch({ type: "BUY_SKIN", plantId, skinId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.coinsText}>Coins: {state.coins}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleBuyHearts(2)}
      >
        <Text style={styles.buttonText}>Buy 2 Hearts for 20 Coins</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleBuyHearts(5)}
      >
        <Text style={styles.buttonText}>Buy 5 Hearts for 50 Coins</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SkinShop")}
      >
        <Text style={styles.buttonText}>Buy Skins</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default ShopScreen;
