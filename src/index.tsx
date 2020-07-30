import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Appearance } from "react-native-appearance";
import * as SplashScreen from "expo-splash-screen";

import { useAppContext } from "./store";
import Home from "./screens/HomeScreen";
import Menu from "./screens/MenuScreen";
import Question from "./screens/QuestionScreen";
import { StackParamList } from "./types";
import { switchTheme, selectCategory } from "./store/actions";
import AsyncStorage from "@react-native-community/async-storage";
import { SafeAreaView, StatusBar } from "react-native";
import { color } from "./constants/themes";

const getThemeFromStorage = async () => {
  try {
    const value = await AsyncStorage.getItem("theme");
    if (value !== null) {
      return value;
    }

    const theme = Appearance.getColorScheme();
    if (theme !== null && (theme === "light" || theme === "dark")) {
      return theme;
    }
  } catch (e) {}
};

const getCategoryFromStorage = async () => {
  try {
    const value = await AsyncStorage.getItem("category");
    if (value !== null) {
      return value;
    }
  } catch (e) {}
};

const delaySplashScreen = async () => {
  try {
    await SplashScreen.preventAutoHideAsync();
  } catch (e) {
    console.warn(e);
  }
};

const showSplashScreen = async () => {
  setTimeout(async () => {
    await SplashScreen.hideAsync();
  }, 100);
};

export default function Index() {
  const [state, dispatch] = useAppContext();
  const [matchTheme, setMatchTheme] = useState("");
  const colorStyle = color(state.theme);

  const _isMounted = useRef(false);

  useEffect(() => {
    _isMounted.current = true;

    delaySplashScreen().then(() => {
      getThemeFromStorage().then((value) => {
        if (value && _isMounted.current) {
          dispatch(switchTheme(JSON.parse(value)));
          setMatchTheme(JSON.parse(value));
        }
      });

      getCategoryFromStorage().then((value) => {
        if (value && _isMounted.current) {
          dispatch(selectCategory(JSON.parse(value)));
        }
      });
    });

    return () => {
      _isMounted.current = false;
    };
  }, []);

  if (matchTheme === state.theme) {
    showSplashScreen();
  }

  const Stack = createStackNavigator<StackParamList>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        backgroundColor={colorStyle("background")}
        barStyle={state.theme === "light" ? "dark-content" : "light-content"}
      />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode={"none"}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Question"
            component={Question}
            options={{
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
