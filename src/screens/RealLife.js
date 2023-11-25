import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const GridOfButtons = () => {
  const buttonsData = [
    { id: 1, label: 'Button 1' },
    { id: 2, label: 'Button 2' },
    { id: 3, label: 'Button 3' },
    { id: 4, label: 'Button 4' },
    // Add more buttons as needed
  ];

  const handleButtonPress = (buttonId) => {
    // Handle button press based on buttonId
    console.log(`Button ${buttonId} pressed`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {buttonsData.map((button) => (
          <TouchableOpacity
            key={button.id}
            style={styles.button}
            onPress={() => handleButtonPress(button.id)}
          >
            <Text style={styles.buttonText}>{button.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '80%', // Adjust the width as needed
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default RealLife;