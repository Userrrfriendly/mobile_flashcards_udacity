import React from "react";
import AppNavigator from "./navigation/appNavigator";
import { enableScreens } from "react-native-screens";

enableScreens();

export default function App() {
  return <AppNavigator></AppNavigator>;
}
