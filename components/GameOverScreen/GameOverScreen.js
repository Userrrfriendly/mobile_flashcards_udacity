import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainButton from "../Button/CustomButton";
import AppBackground from "../appBackground/AppBackground";

const GameOverScreen = (props) => {
  return (
    <AppBackground>
      <View style={styles.mainContent}>
        <View style={[styles.card]}>
          <View style={styles.cardContent}>
            <Text
              style={styles.textMain}
            >{`You answered correctly to ${props.results.correct} of ${props.results.length} questions`}</Text>
            <Text style={styles.textMain}>🎉🎉🎉</Text>
          </View>
        </View>

        <View style={styles.btnContainer}>
          <MainButton
            style={styles.btnRestart}
            title="Restart Quiz"
            onPress={props.restart}
          />
          <MainButton
            style={styles.btnBackToDeck}
            title="Back to Deck"
            onPress={props.goBack}
          />
        </View>
      </View>
    </AppBackground>
  );
};

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  card: {
    width: "90%",
    minHeight: 150,
    maxHeight: "80%",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F4D8CD",
    overflow: "hidden",
    marginVertical: "5%",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  textMain: {
    fontSize: 22,
    textAlign: "center",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    marginVertical: "5%",
  },
  btnRestart: {
    width: "45%",
    marginRight: "5%",
  },
  btnBackToDeck: {
    width: "45%",
  },
});

export default GameOverScreen;
