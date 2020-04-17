import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import deckReducer from "./reducers/deckReducer";
import quizReducer from "./reducers/quizReducer";
import { Provider } from "react-redux";
import logger from "../utils/loggerMiddleware";

const rootReducer = combineReducers({
  decks: deckReducer,
  quiz: quizReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

const Store = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Store;
