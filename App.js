import React from "react";
import { StyleSheet, View } from "react-native";

import DeckListView from "./components/views/defaultView/deckListView";

export default function App() {
  return (
    <View style={styles.container}>
      <DeckListView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },
});
