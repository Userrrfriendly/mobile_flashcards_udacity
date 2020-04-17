import {
  START_QUIZ,
  ANSWER_INCORRECT,
  ANSWER_CORRECT,
  CREATE_DECK,
  CREATE_QUESTION,
} from "./actionTypes";

/* QUIZ ACTIONS */
export const startQuiz = (deck) => {
  return {
    type: START_QUIZ,
    deck,
  };
};

export const answerCorrect = (index) => {
  return {
    type: ANSWER_CORRECT,
    index,
  };
};

export const answerIncorrect = (index) => {
  return {
    type: ANSWER_INCORRECT,
    index,
  };
};

export const createDeck = (id, name) => {
  return {
    type: CREATE_DECK,
    id,
    name,
  };
};

export const createQuestion = (id, question, answer) => {
  return {
    type: CREATE_QUESTION,
    id,
    question,
    answer,
  };
};
