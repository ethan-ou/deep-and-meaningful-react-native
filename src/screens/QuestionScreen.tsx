import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

import { capitalise } from "../utils";
import styles from "../constants/styles";
import MenuBar from "../components/MenuBar";
import { useAppContext } from "../store";
import { addQuestions, loadQuestions, switchTheme } from "../store/actions";
import { StackParamList, Routes } from "../types";
import Button from "../components/Button";
import theme from "../constants/themes";

// back arrow instead of refresh
// home icon instead of speech bubble

//Change background to a moving gradient

interface Props {
  navigation: StackNavigationProp<StackParamList, Routes>;
}

export default function Question(props: Props) {
  const [state, dispatch] = useAppContext();
  const [count, setCount] = useState(0);

  const themeStyle = theme(state.theme);

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

  const storeTheme = async (value: string) => {
    try {
      await AsyncStorage.setItem("theme", value);
    } catch (e) {}
  };

  const handleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    storeTheme(JSON.stringify(newTheme));
    dispatch(switchTheme(newTheme));
  };

  const navigateMenu = () => props.navigation.navigate("Menu");

  return (
    <View
      style={[
        styles.container,
        themeStyle("background") as {
          backgroundColor: string;
        },
      ]}
    >
      <MenuBar
        themeHandler={handleTheme}
        menuHandler={navigateMenu}
        undoHandler={decrementCount}
      />
      <View style={styles.top}>
        <Text
          style={[
            themeStyle("primary"),
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
            themeStyle("primary", "secondary"),
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
