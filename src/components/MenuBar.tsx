import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  GestureResponderEvent,
} from "react-native";
import styles, { colorNightPrimary } from "../constants/styles";

import Moon from "../assets/icons/MoonSolid";
import Chat from "../assets/icons/ChatBold";
import Undo from "../assets/icons/UndoAltSolid";

interface Props {
  themeHandler: (event: GestureResponderEvent) => void;
  menuHandler: (event: GestureResponderEvent) => void;
  undoHandler: (event: GestureResponderEvent) => void;
}

export default function MenuBar(props: Props) {
  return (
    <View style={[styles.navigation, styles.marginT1]}>
      <TouchableOpacity
        onPress={props.themeHandler}
        style={[styles.height5, styles.width6h]}
      >
        <Moon color={colorNightPrimary} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.menuHandler}
        style={[styles.height5, styles.width6h]}
      >
        <Chat color={colorNightPrimary} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.undoHandler}
        style={[styles.height5, styles.width6h]}
      >
        <Undo color={colorNightPrimary} />
      </TouchableOpacity>
    </View>
  );
}
