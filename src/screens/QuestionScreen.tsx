import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import Constants from "expo-constants";
import questionList from "../data/questionList";
import { shuffle, capitalise } from "../utils/utils";
import styles from "../constants/styles";

// back arrow instead of refresh
// home icon instead of speech bubble

//Change background to a moving gradient

export default function Question(props) {
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState(3);
  const [sortedQuestions, setSortedQuestions] = useState(null);

  const sortQuestionList = () => {
    const sortedIndex = questionList.filter(
      (item) => item.level === category || (category === 3 && item.level === 2)
    );
    let shuffledQuestions = shuffle(sortedIndex);
    return shuffledQuestions;
  };

  const questions = sortQuestionList();

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const navigateMenu = () => props.navigation.navigate("Menu");

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={decrementCount} style={styles.menuButton}>
          <Image
            source={require("../assets/moon-solid-night.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateMenu} style={styles.menuButton}>
          <Image
            source={require("../assets/chat-bold-night.png")}
            style={{ width: 53, height: 45 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={decrementCount} style={styles.menuButton}>
          <Image
            source={require("../assets/undo-solid-night.png")}
            style={{ width: 40, height: 40 }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.h1}>{capitalise(questions[count].category)}</Text>

      <Text style={styles.paragraph}>{questions[count].question}</Text>

      <View style={styles.bottom}>
        <TouchableOpacity onPress={incrementCount}>
          <Text style={styles.button}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
