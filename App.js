import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import DeckListView from "./components/views/DeckListView";
import DeckView from "./components/views/DeckView";
import QuizView from "./components/views/QuizView";
import NewDeckView from "./components/views/NewDeckView";
import NewQuestionView from "./components/views/NewQuestionView";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/CROP_Cardboard_06-min.jpg")}
        style={styles.image}
      >
        {/* <DeckListView /> */}
        {/* <DeckView /> */}
        {/* <QuizView /> */}
        {/* <NewDeckView /> */}
        <NewQuestionView />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
    // width: Dimensions.get("window").width,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
