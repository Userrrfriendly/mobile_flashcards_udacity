import produce from "immer";
import { DECKS } from "../../dummyData/data";
import {
  LOAD_INITIAL_DATA,
  CREATE_QUESTION,
  CREATE_DECK,
} from "../actions/actionTypes";
const initialState = {
  decks: DECKS,
};

const deckReducer = (state = initialState, action) => {
  switch (action.type) {
    // case LOAD_INITIAL_DATA:
    //   return { ...state, decks: [...DECKS] };
    case CREATE_QUESTION:
      return produce(state, (draft) => {
        const deckIndex = draft.decks.findIndex((d) => d.id === action.id);
        draft.decks[deckIndex].questions.push({
          question: action.question,
          answer: action.answer,
        });
      });
    case CREATE_DECK:
      return produce(state, (draft) => {
        draft.decks.push({ id: action.id, name: action.name, questions: [] });
      });
    default:
      return state;
  }
};

export default deckReducer;
