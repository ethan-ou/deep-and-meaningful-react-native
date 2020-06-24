import React from "react";
import { Text, View } from "react-native";
import styles from "../constants/styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList, Routes } from "../types";
import Button from "../components/Button";
import theme, { color } from "../constants/themes";
import Conversation from "../assets/icons/ConversationBold";
import { useAppContext } from "../store";

interface Props {
  navigation: StackNavigationProp<StackParamList, Routes>;
}

export default function Home(props: Props) {
  const [state, dispatch] = useAppContext();
  const themeStyle = theme(state.theme);
  const colorStyle = color(state.theme);

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
      <View style={[styles.top, styles.paddingH6]}>
        <View style={[styles.alignCenter, styles.height14, styles.marginT4]}>
          <Conversation color={colorStyle("secondary", "primary")} />
        </View>
        <Text
          style={[
            styles.fontBold,
            themeStyle("primary"),
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
            themeStyle("primary", "secondary"),
            styles.textCenter,
            styles.marginT1p5,
          ]}
        >
          Ask someone you care about a question.
        </Text>
      </View>
      <View style={[styles.bottom, styles.paddingV2]}>
        <Button onPress={navigateMenu} text="Next" />
      </View>
    </View>
  );
}
