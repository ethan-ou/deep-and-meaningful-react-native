import React, { useState } from "react";
import { Text, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "../constants/styles";
import categories from "../constants/categories";
import StepSelector from "../components/StepSelector";
import { useAppContext } from "../store";
import { selectCategory, loadQuestions } from "../store/actions";
import { StackParamList, Routes } from "../types";
import Button from "../components/Button";
import theme, { color } from "../constants/themes";

import Dance from "../assets/icons/Dance";
import Park from "../assets/icons/Park";
import Neptune from "../assets/icons/Neptune";
import Snuggle from "../assets/icons/Snuggle";
import AsyncStorage from "@react-native-community/async-storage";

interface Props {
  navigation: StackNavigationProp<StackParamList, Routes>;
}

export default function Menu(props: Props) {
  const [state, dispatch] = useAppContext();
  const [currentPage, setCurrentPage] = useState(state.category);

  const themeStyle = theme(state.theme);
  const colorStyle = color(state.theme);

  const storeCategory = async (value: string) => {
    try {
      await AsyncStorage.setItem("category", value);
    } catch (e) {}
  };

  const onStepPress = (position: number) => {
    setCurrentPage(position);
  };

  const navigateQuestions = () => {
    storeCategory(JSON.stringify(currentPage));
    dispatch(selectCategory(currentPage));
    dispatch(loadQuestions());
    props.navigation.navigate("Question");
  };

  const CategoryImage = (state: number) => {
    switch (state) {
      case 0: {
        return <Dance color={colorStyle("primary")} />;
      }
      case 1: {
        return <Park color={colorStyle("primary")} />;
      }
      case 2: {
        return <Neptune color={colorStyle("primary")} />;
      }
      case 3: {
        return <Snuggle color={colorStyle("primary")} />;
      }
      default: {
        return null;
      }
    }
  };

  return (
    <View
      style={[
        styles.container,
        themeStyle("background") as {
          backgroundColor: string;
        },
      ]}
    >
      <Text
        style={[
          styles.marginT4,
          styles.marginB2,
          styles.fontSize6,
          styles.fontBold,
          themeStyle("primary", "secondary"),
          styles.textCenter,
        ]}
      >
        What style of questions?
      </Text>
      <View style={[styles.alignCenter, styles.height15, styles.marginV2]}>
        {CategoryImage(currentPage)}
      </View>
      <Text
        style={[
          styles.fontSize4,
          themeStyle("primary", "secondary"),
          styles.textCenter,
          styles.fontBold,
        ]}
      >
        {categories[currentPage].name}
      </Text>
      <View
        style={[
          styles.paddingT1,
          styles.paddingBVW4,
          styles.paddingH6,
          styles.marginT1p5,
        ]}
      >
        <StepSelector
          onPress={onStepPress}
          currentPosition={currentPage}
          stepCount={4}
        />
      </View>
      <Text
        style={[
          styles.textCenter,
          themeStyle("primary", "secondary"),
          styles.fontSize1,
          styles.marginH12,
        ]}
      >
        {categories[currentPage].description}
      </Text>
      <View style={[styles.bottom, styles.paddingV2]}>
        <Button onPress={navigateQuestions} text="Begin!" />
      </View>
    </View>
  );
}
