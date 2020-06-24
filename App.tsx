import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { registerRootComponent } from "expo";

import AppProvider from "./src/store";
import Home from "./src/screens/HomeScreen";
import Menu from "./src/screens/MenuScreen";
import Question from "./src/screens/QuestionScreen";
import { StackParamList } from "./src/types";

export default function App() {
  const Stack = createStackNavigator<StackParamList>();

  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode={"none"}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Question" component={Question} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
}

registerRootComponent(App);
