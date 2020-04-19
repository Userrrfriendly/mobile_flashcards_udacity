import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import MainButton from "../Button/CustomButton";
import AppBackground from "../appBackground/AppBackground";
import { useDispatch, useSelector } from "react-redux";
import { startQuiz } from "../../store/actions/actions";

const DeckView = (props) => {
  const decks = useSelector((state) => state.decks.decks);
  const deck = decks.find((d) => d.id === props.route.params.id);
  const dispatch = useDispatch();

  const createAlert = () =>
    Alert.alert(
      "Ooops!",
      "The quiz is empty, add some questions first.",
      [
        {
          text: "OK",
        },
      ],
      { cancelable: false }
    );

  const handleQuizNavigation = () => {
    if (deck.questions.length > 0) {
      dispatch(startQuiz(deck));
      props.navigation.navigate("Quiz", { deck, id: props.route.params.id });
    } else {
      createAlert();
    }
  };

  const handleAddQuestionNavigation = () => {
    props.navigation.navigate("Create Question", { id: props.route.params.id });
  };

  return (
    <AppBackground style={styles.root}>
      <Text style={styles.deckTitle}>{deck.name}</Text>
      <Text style={styles.cardsNum}>{`${deck.questions.length} cards`}</Text>
      <View style={styles.btnContainer}>
        <View style={styles.btnWrapper}>
          <MainButton
            title="start quiz"
            style={{ paddingVertical: 20 }}
            onPress={handleQuizNavigation}
          />
        </View>
        <View style={styles.btnWrapper}>
          <MainButton
            title="Add question"
            style={{ paddingVertical: 20 }}
            onPress={handleAddQuestionNavigation}
          />
        </View>
      </View>
    </AppBackground>
  );
};

// export const screenOptions = (navData) => {
//   const name = navData.route.params.name;
//   return {
//     headerTitle: `Deck: ${name}`,
//   };
// };

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
});

export default DeckView;
