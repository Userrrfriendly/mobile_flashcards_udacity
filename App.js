import React from "react";
import AppNavigator from "./navigation/appNavigator";
import { enableScreens } from "react-native-screens";
import Store from "./store/store";

enableScreens();

export default function App() {
  return (
    <Store>
      <AppNavigator />
    </Store>
  );
}
