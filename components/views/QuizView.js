import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
// import Card from "../card/card";
import MainButton from "../Button/CustomButton";
import AppBackground from "../appBackground/AppBackground";

const DATA = {
  question: "What is React?",
  answer: "A library for managing user interfaces",
};

// displays a card question
// an option to view the answer (flips the card)
// a "Correct" button
// an "Incorrect" button
// the number of cards left in the quiz
// Displays the percentage correct once the quiz is complete

const QuizView = () => {
  const rotation = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const [flipped, setFlipped] = useState(false);
  const animationDuration = 500;

  const flipCard = () => {
    // delay the statechange
    // setTimeout(() => {
    //   setFlipped(true);
    // }, animationDuration / 2);
    setFlipped(true);

    Animated.timing(rotation, {
      toValue: 1,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();
    Animated.timing(opacity, {
      toValue: 1,
      duration: animationDuration * 2,
      useNativeDriver: true,
    }).start();
  };

  const reset = () => {
    // setTimeout(() => {
    //   setFlipped(false);
    // }, animationDuration);
    setFlipped(false);
    Animated.timing(rotation, {
      toValue: 0,
      duration: animationDuration,
      useNativeDriver: true,
    }).start();
  };

  return (
    <AppBackground>
      <Text>{`question 1 of 2`}</Text>
      <View style={styles.mainContent}>
        <TouchableWithoutFeedback onPress={flipCard}>
          <Animated.View
            style={[
              styles.card,
              {
                transform: [
                  {
                    rotateY: rotation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["0deg", "360deg"],
                    }),
                  },
                ],
              },
              { perspective: 1000 },
            ]}
            backfaceVisibility="visible"
          >
            {flipped ? (
              <Animated.View style={[styles.cardContent, { opacity: opacity }]}>
                <Text>{`${DATA.question}`}</Text>
                <Text style={styles.textMain}>{DATA.answer}</Text>
              </Animated.View>
            ) : (
              <Text style={styles.textMain}>{`${DATA.question}`}</Text>
            )}
          </Animated.View>
        </TouchableWithoutFeedback>

        <View style={styles.btnContainer}>
          <MainButton style={styles.btnCorrect} title="correct" />
          <MainButton style={styles.btnIncorrect} title="incorrect" />
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
    marginBottom: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  textMain: {
    fontSize: 25,
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
  },
  btnCorrect: {
    backgroundColor: "green",
    width: "45%",
    marginRight: "5%",
  },
  btnIncorrect: {
    width: "45%",
  },
});

export default QuizView;
