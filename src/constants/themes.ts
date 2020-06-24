import { StyleSheet } from "react-native";
import { ThemeType } from "../store/types";

export const light = {
  primary: "#333",
  secondary: "#001ca8",
  tertiary: "#b5c1ff",
  background: "#fff",
};

export const dark = {
  primary: "#b5c1ff",
  secondary: "#fff",
  tertiary: "transparent",
  background: "#333",
};

const lightTheme = StyleSheet.create({
  primary: {
    color: light.primary,
  },
  secondary: {
    color: light.secondary,
  },
  tertiary: {
    color: light.tertiary,
  },
  background: {
    backgroundColor: light.background,
  },
  button: {
    color: light.background,
    backgroundColor: light.secondary,
    borderColor: light.tertiary,
    borderWidth: 3,
  },
});

const darkTheme = StyleSheet.create({
  primary: {
    color: dark.primary,
  },
  secondary: {
    color: dark.secondary,
  },
  tertiary: {
    color: dark.tertiary,
  },
  background: {
    backgroundColor: dark.background,
  },
  button: {
    color: dark.primary,
    backgroundColor: dark.tertiary,
    borderColor: dark.primary,
    borderWidth: 5,
  },
});

type ThemeColors = "primary" | "secondary" | "tertiary" | "background";
type ThemeProps = ThemeColors | "button";

export default function theme(setting: ThemeType) {
  return (light: ThemeProps, dark?: ThemeProps) => {
    if (!dark) {
      return setting === "light" ? lightTheme[light] : darkTheme[light];
    }
    return setting === "light" ? lightTheme[light] : darkTheme[dark];
  };
}

export function color(setting: ThemeType) {
  return (lightColor: ThemeColors, darkColor?: ThemeColors): string => {
    if (!darkColor) {
      return setting === "light" ? light[lightColor] : dark[lightColor];
    }
    return setting === "light" ? light[lightColor] : dark[darkColor];
  };
}
