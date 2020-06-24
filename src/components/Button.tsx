import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";
import { useAppContext } from "../store";
import theme from "../constants/themes";
import styles from "../constants/styles";

interface Props {
  onPress: (event?: GestureResponderEvent) => void;
  text: string;
}

export default function Button(props: Props) {
  const [state, dispatch] = useAppContext();
  const themeStyle = theme(state.theme);

  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text
        style={[
          styles.button,
          themeStyle("button"),
          styles.fontSize4,
          styles.marginV2,
          styles.textCenter,
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}
