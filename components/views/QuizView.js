import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { TOMATO, SUCCESS_GREEN } from "../../utils/colors";
import MainButton from "../Button/CustomButton";
import AppBackground from "../appBackground/AppBackground";
import { useSelector, useDispatch } from "react-redux";
import {
  answerCorrect,
  answerIncorrect,
  startQuiz,
} from "../../store/actions/actions";
import GameOverScreen from "../GameOverScreen/GameOverScreen";

const QuizView = (props) => {
  const dispatch = useDispatch();
  const [quizOver, setQuizOver] = useState(false);
  const [index, setIndex] = useState(0); //index of the current question
  const deck = props.route.params.deck;
  const quiz = useSelector((state) => state.quiz.quiz);
  const question = quiz.questions[index].question;
  const answer = quiz.questions[index].answer;

  const rotation = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  const [flipped, setFlipped] = useState(false);
  const animationDuration = 500;

  const flipCard = () => {
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

  const resetAnimation = () => {
    setFlipped(false);
    Animated.timing(rotation, {
      toValue: 0,
      duration: 0, //make it instant,
      useNativeDriver: true,
    }).start();
  };

  const calcAnswers = () => {
    const result = {};
    result.correct = quiz.questions.reduce((a, c) => {
      return c.correct ? a + 1 : a + 0;
    }, 0);

    result.length = quiz.questions.length;
    return result;
  };

  const handleCorrectPress = () => {
    if (index < quiz.questions.length) {
      dispatch(answerCorrect(index));
      if (index < quiz.questions.length - 1) {
        resetAnimation();
        setIndex(index + 1);
      } else {
        setQuizOver(true);
      }
    }
  };

  const handleIncorrectPress = () => {
    if (index < quiz.questions.length) {
      dispatch(answerIncorrect(index));
      if (index < quiz.questions.length - 1) {
        resetAnimation();
        setIndex(index + 1);
      } else {
        setQuizOver(true);
      }
    }
  };

  const goBack = () => props.navigation.goBack();
  const restart = () => {
    dispatch(startQuiz(deck));
    props.navigation.replace("Quiz", { deck });
  };

  return (
    <AppBackground>
      {quizOver ? (
        <GameOverScreen
          goBack={goBack}
          restart={restart}
          results={calcAnswers()}
        />
      ) : (
        <>
          <Text>{`question ${index + 1} of ${quiz.questions.length}`}</Text>
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
                  <Animated.View
                    style={[styles.cardContent, { opacity: opacity }]}
                  >
                    <Text style={styles.textSecondary}>{question}</Text>
                    <Text style={styles.textMain}>{answer}</Text>
                  </Animated.View>
                ) : (
                  <Text style={styles.textMain}>{question}</Text>
                )}
              </Animated.View>
            </TouchableWithoutFeedback>

            <View style={styles.btnContainer}>
              <MainButton
                style={styles.btnCorrect}
                title="correct"
                onPress={handleCorrectPress}
              />
              <MainButton
                style={styles.btnIncorrect}
                title="incorrect"
                onPress={handleIncorrectPress}
              />
            </View>
          </View>
        </>
      )}
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
    justifyContent: "space-around",
    flexGrow: 1,
  },
  textMain: {
    fontSize: 22,
    textAlign: "center",
    marginHorizontal: 5,
  },
  textSecondary: {
    paddingHorizontal: 10,
    color: "grey",
    textAlign: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    marginVertical: "5%",
  },
  btnCorrect: {
    backgroundColor: SUCCESS_GREEN,
    width: "45%",
    marginRight: "5%",
  },
  btnIncorrect: {
    width: "45%",
    backgroundColor: TOMATO,
  },
});

export default QuizView;
