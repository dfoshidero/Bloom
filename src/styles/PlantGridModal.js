// PlantGridModal.js
import React, { useState, useContext } from "react";
import { Modal, View, Text, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlantDataContext } from "../states/plantsDataContext"; // Update the path

const PlantGridModal = ({ visible, onClose, onPlantSelect }) => {
  const { plantData } = useContext(PlantDataContext);
  const renderPlantItem = ({ item }) => (
    <TouchableOpacity
      style={{ padding: 16, borderBottomWidth: 1, borderColor: "#ccc" }}
      onPress={() => onPlantSelect(item.id)}
    >
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 16,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>
            Select Plant Skin
          </Text>
          <FlatList
            data={plantData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPlantItem}
          />
          <TouchableOpacity
            style={{
              marginTop: 16,
              padding: 12,
              backgroundColor: "#3498db",
              borderRadius: 8,
              alignItems: "center",
            }}
            onPress={onClose}
          >
            <Text style={{ color: "black" }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default PlantGridModal;
