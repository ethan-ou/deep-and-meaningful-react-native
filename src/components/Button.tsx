import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  GestureResponderEvent,
} from "react-native";
import styles from "../constants/styles";

interface Props {
  onPress: (event?: GestureResponderEvent) => void;
  text: string;
}

export default function (props: Props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text
        style={[
          styles.button,
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
