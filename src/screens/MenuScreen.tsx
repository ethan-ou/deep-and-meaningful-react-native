import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import styles from "../constants/styles";
import { categories } from "../constants/categories";
import StepSelector from "../components/StepSelector";
import { useAppContext } from "../store";
import { selectCategory, loadQuestions } from "../store/actions";
import { StackParamList, Routes } from "../types";
import Button from "../components/Button";

interface Props {
  navigation: StackNavigationProp<StackParamList, Routes>;
}

export default function Menu(props: Props) {
  const [state, dispatch] = useAppContext();
  const [currentPage, setCurrentPage] = useState(0);

  const onStepPress = (position: number) => {
    setCurrentPage(position);
  };

  const navigateQuestions = () => {
    dispatch(selectCategory(currentPage));
    dispatch(loadQuestions());
    props.navigation.navigate("Question");
  };

  const CategoryImage = (state: number) => {
    switch (state) {
      case 0: {
        return (
          <Image
            source={require("../assets/categories/dance.png")}
            style={[{ width: 40, height: 40 }, styles.marginHCenter]}
          />
        );
      }
      case 1: {
        return (
          <Image
            source={require("../assets/categories/park.png")}
            style={[{ width: 40, height: 40 }, styles.marginHCenter]}
          />
        );
      }
      case 2: {
        return (
          <Image
            source={require("../assets/categories/neptune.png")}
            style={[{ width: 40, height: 40 }, styles.marginHCenter]}
          />
        );
      }
      case 3: {
        return (
          <Image
            source={require("../assets/categories/snuggle.png")}
            style={[{ width: 40, height: 40 }, styles.marginHCenter]}
          />
        );
      }
      default: {
        return null;
      }
    }
  };

  return (
    <View style={[styles.container, styles.colorBackground]}>
      <Text
        style={[
          styles.marginT4,
          styles.marginB2,
          styles.fontSize6,
          styles.fontBold,
          styles.colorSecondary,
          styles.textCenter,
        ]}
      >
        What style of questions?
      </Text>
      {CategoryImage(currentPage)}
      <Text
        style={[
          styles.fontSize4,
          styles.colorSecondary,
          styles.textCenter,
          styles.fontBold,
        ]}
      >
        {categories[currentPage].name}
      </Text>
      <View style={[styles.paddingT1, styles.paddingBVW4, styles.paddingH6]}>
        <StepSelector
          onPress={onStepPress}
          currentPosition={currentPage}
          stepCount={4}
        />
      </View>
      <Text
        style={[
          styles.textCenter,
          styles.colorSecondary,
          styles.fontSize1,
          styles.marginH16,
        ]}
      >
        {categories[currentPage].description}
      </Text>
      <View style={styles.bottom}>
        <Button onPress={navigateQuestions} text="Begin!" />
      </View>
    </View>
  );
}
