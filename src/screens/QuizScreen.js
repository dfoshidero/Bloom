import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

//Get the questions and answers for this quiz
const getTriviaAnswers = () => {
    // Mock data
    return Promise.resolve([
        {index: 1, answer: 'Well-draining mix', correct: true},
        {index: 2, answer: 'Sand mix', correct: false},
        {index: 3, answer: 'Bark mix', correct: false},
        {index: 4, answer: 'Volcanic rock mix', correct: false}
    ]);
  };

const QuizScreen = ({ navigation, route }) => {
    const [triviaAnswers, setTriviaAnswers] = useState([]);
    useEffect(() => {
        getTriviaAnswers().then(setTriviaAnswers);
      }, []);
    const renderAnswer = ({ item }) => (
      <TouchableOpacity style={styles.itemContainer}>
        <Text style={styles.plantName}>{item.answer}</Text>
      </TouchableOpacity>
    );
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Question 2 of 3</Text>
        <FlatList
            data={triviaAnswers}
            renderItem={renderAnswer}
            keyExtractor={(item) => item.index}
        />
      </View>
    );
  };

//These styles were copied from LevelSelectScreen.js
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    itemContainer: {
      padding: 10,
      marginVertical: 8,
      backgroundColor: "#f9f9f9",
      borderRadius: 5,
      width: "100%",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    plantName: {
      fontSize: 18,
      fontWeight: "bold",
    },
    level: {
      fontSize: 14,
      color: "#666",
    },
    progressBarBackground: {
      height: 20,
      width: "100%",
      backgroundColor: "#ddd",
      borderRadius: 10,
      marginTop: 10,
    },
    progressBarFill: {
      height: "100%",
      backgroundColor: "green",
      borderRadius: 10,
    },
  });

export default QuizScreen;