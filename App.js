import React, { useEffect } from "react";
import AppNavigator from "./navigation/appNavigator";
import { enableScreens } from "react-native-screens";
import Store from "./store/store";
import { setLocalNotification } from "./utils/notifications";

enableScreens(); //optimization for navigation

export default function App() {
  useEffect(() => {
    setLocalNotification();
  }, []);

  return (
    <Store>
      <AppNavigator />
    </Store>
  );
}
