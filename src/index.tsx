import React, { useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { Appearance } from "react-native-appearance";

import { useAppContext } from "./store";
import Home from "./screens/HomeScreen";
import Menu from "./screens/MenuScreen";
import Question from "./screens/QuestionScreen";
import { StackParamList } from "./types";
import { switchTheme } from "./store/actions";
import AsyncStorage from "@react-native-community/async-storage";

export default function Index() {
  const [state, dispatch] = useAppContext();
  const _isMounted = useRef(false);

  const getTheme = async () => {
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

  useEffect(() => {
    _isMounted.current = true;

    getTheme().then((value) => {
      if (value && _isMounted.current) {
        dispatch(switchTheme(JSON.parse(value)));
      }
    });

    return () => {
      _isMounted.current = false;
    };
  }, []);

  const Stack = createStackNavigator<StackParamList>();
  return (
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
  );
}
