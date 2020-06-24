import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from "react-native";
import styles from "../constants/styles";

interface Props {
  themeHandler: (event: GestureResponderEvent) => void;
  menuHandler: (event: GestureResponderEvent) => void;
  undoHandler: (event: GestureResponderEvent) => void;
}

export default function MenuBar(props: Props) {
  return (
    <View style={styles.navigation}>
      <TouchableOpacity onPress={props.themeHandler}>
        <Image
          source={require("../assets/moon-solid-night.png")}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.menuHandler}>
        <Image
          source={require("../assets/chat-bold-night.png")}
          style={{ width: 53, height: 45 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={props.undoHandler}>
        <Image
          source={require("../assets/undo-solid-night.png")}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
    </View>
  );
}
