import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import styles from "../constants/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList, Routes } from "../types";
import Button from "../components/Button";

interface Props {
  navigation: StackNavigationProp<StackParamList, Routes>;
}

export default function Home(props: Props) {
  const navigateMenu = () => props.navigation.navigate("Menu");
  return (
    <View style={[styles.container, styles.colorBackground]}>
      <View style={[styles.top, styles.paddingH6]}>
        <Image
          source={require("../assets/conversation-night-bold.png")}
          style={[
            {
              aspectRatio: 3 / 2,
              width: 120,
              height: 120,
            },
            styles.marginHCenter,
            styles.paddingT5,
          ]}
        />
        <Text
          style={[
            styles.fontBold,
            styles.colorPrimary,
            styles.textCenter,
            styles.fontSize8,
            styles.marginT4,
            styles.marginB2,
          ]}
        >
          Deep and Meaningful
        </Text>
        <Text
          style={[
            styles.fontSize3,
            styles.colorSecondary,
            styles.textCenter,
            styles.marginT1p5,
          ]}
        >
          Ask someone you care about a question.
        </Text>
      </View>
      <View style={styles.bottom}>
        <Button onPress={navigateMenu} text="Next" />
      </View>
    </View>
  );
}
