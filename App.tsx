import React from "react";
import "react-native-gesture-handler";
import { AppearanceProvider } from "react-native-appearance";
import { registerRootComponent } from "expo";

import AppProvider from "./src/store";
import Index from "./src";

export default function App() {
  return (
    <AppProvider>
      <AppearanceProvider>
        <Index />
      </AppearanceProvider>
    </AppProvider>
  );
}

registerRootComponent(App);
