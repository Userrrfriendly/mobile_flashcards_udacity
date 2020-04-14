import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import MainButton from "../Button/CustomButton";

const DATA = {
  name: "React Dummy Deck ",
  questions: [
    {
      question: "What is React?",
      answer: "A library for managing user interfaces",
    },
    {
      question: "Where do you make Ajax requests in React?",
      answer: "The componentDidMount lifecycle event",
    },
  ],
};

// displays the title of the Deck
// displays the number of cards in the deck
// displays an option to start a quiz on this specific deck
// An option to add a new question to the deck

const DeckView = (props) => {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("../../assets/CROP_Cardboard_06-min.jpg")}
        style={styles.image}
      >
        <Text style={styles.deckTitle}>{DATA.name}</Text>
        <Text style={styles.cardsNum}>{`${DATA.questions.length} cards`}</Text>
        <View style={styles.btnContainer}>
          <View style={styles.btnWrapper}>
            <MainButton title="start quiz" style={{ paddingVertical: 20 }} />
          </View>
          <View style={styles.btnWrapper}>
            <MainButton title="Add question" style={{ paddingVertical: 20 }} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  deckTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  cardsNum: {
    fontSize: 18,
    paddingTop: 20,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    marginTop: 20,
    width: "100%",
  },
  btnWrapper: {
    minWidth: "40%",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  //
  box: {
    height: 100,
    width: 100,
    borderRadius: 5,
    marginVertical: 40,
    backgroundColor: "#61dafb",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "red",
    borderWidth: 10,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 8,
    color: "#000",
    textAlign: "center",
  },
});

export default DeckView;
