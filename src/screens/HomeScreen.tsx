import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import styles, { colorNightPrimary } from "../constants/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList, Routes } from "../types";
import Button from "../components/Button";

import Conversation from "../assets/icons/ConversationBold";

interface Props {
  navigation: StackNavigationProp<StackParamList, Routes>;
}

export default function Home(props: Props) {
  const navigateMenu = () => props.navigation.navigate("Menu");
  return (
    <View style={[styles.container, styles.colorBackground]}>
      <View style={[styles.top, styles.paddingH6]}>
        <View style={[styles.alignCenter, styles.height14, styles.marginT4]}>
          <Conversation color={colorNightPrimary} />
        </View>
        <Text
          style={[
            styles.fontBold,
            styles.colorPrimary,
            styles.textCenter,
            styles.fontSize8,
            styles.marginT1p5,
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
