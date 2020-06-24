import React, { useEffect } from "react";
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

export default function Index() {
  const [state, dispatch] = useAppContext();

  const getTheme = async () => {
    const theme = Appearance.getColorScheme();
    if (theme !== null && (theme === "light" || theme === "dark")) {
      dispatch(switchTheme(theme));
    }
  };

  useEffect(() => {
    getTheme();
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
