import produce from "immer";

import {
  START_QUIZ,
  ANSWER_CORRECT,
  ANSWER_INCORRECT,
} from "../actions/actionTypes";

const initialState = {
  quiz: {},
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_QUIZ:
      return produce(state, (draft) => {
        draft.quiz = action.deck;
      });
    case ANSWER_CORRECT:
      return produce(state, (draft) => {
        draft.quiz.questions[action.index].correct = true;
      });
    case ANSWER_INCORRECT:
      return produce(state, (draft) => {
        draft.quiz.questions[action.index].correct = false;
      });
    default:
      return state;
  }
};

export default quizReducer;
