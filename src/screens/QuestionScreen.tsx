import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { shuffle, capitalise } from "../utils";
import styles from "../constants/styles";
import MenuBar from "../components/MenuBar";
import { useAppContext } from "../store";
import { addQuestions, loadQuestions } from "../store/actions";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList, Routes } from "../types";
import Button from "../components/Button";

// back arrow instead of refresh
// home icon instead of speech bubble

//Change background to a moving gradient

interface Props {
  navigation: StackNavigationProp<StackParamList, Routes>;
}

export default function Question(props: Props) {
  const [state, dispatch] = useAppContext();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (state.questions.length === 0) {
      dispatch(loadQuestions());
    }
  }, []);

  const incrementCount = () => {
    if (count === state.questions.length - 1) {
      dispatch(addQuestions());
    }
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const navigateMenu = () => props.navigation.navigate("Menu");

  return (
    <View style={[styles.container, styles.colorBackground]}>
      <MenuBar
        themeHandler={() => {}}
        menuHandler={navigateMenu}
        undoHandler={decrementCount}
      />
      <View style={styles.top}>
        <Text
          style={[
            styles.colorPrimary,
            styles.fontSize7,
            styles.fontBold,
            styles.marginT4,
          ]}
        >
          {capitalise(state.questions[count].category)}
        </Text>

        <Text
          style={[
            styles.marginB2,
            styles.colorSecondary,
            styles.fontSize3,
            styles.marginT1p5,
          ]}
        >
          {state.questions[count].question}
        </Text>
      </View>
      <View style={[styles.bottom, styles.paddingV2]}>
        <Button onPress={incrementCount} text="Next" />
      </View>
    </View>
  );
}
