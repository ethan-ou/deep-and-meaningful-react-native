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
import { color } from "../constants/themes";
import { useAppContext } from "../store";

import Moon from "../assets/icons/MoonSolid";
import Chat from "../assets/icons/ChatBold";
import Undo from "../assets/icons/UndoAltSolid";

interface Props {
  themeHandler: (event: GestureResponderEvent) => void;
  menuHandler: (event: GestureResponderEvent) => void;
  undoHandler: (event: GestureResponderEvent) => void;
}

export default function MenuBar(props: Props) {
  const [state, dispatch] = useAppContext();
  const theme = color(state.theme);

  return (
    <View style={[styles.navigation, styles.marginT1p5, styles.marginH1]}>
      <TouchableOpacity
        onPress={props.themeHandler}
        style={[styles.height5, styles.width6h]}
      >
        <Moon color={theme("secondary", "primary")} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.menuHandler}
        style={[styles.height5, styles.width7h]}
      >
        <Chat color={theme("secondary", "primary")} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.undoHandler}
        style={[styles.height5, styles.width6h]}
      >
        <Undo color={theme("secondary", "primary")} />
      </TouchableOpacity>
    </View>
  );
}
