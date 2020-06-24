import {
  SELECT_CATEGORY,
  ActionTypes,
  LOAD_QUESTIONS,
  AppState,
  ADD_QUESTIONS,
  Question,
} from "./types";
import initialState from "./state";
import questions from "../data/questions.json";
import { shuffle } from "../utils";

const loadQuestions = (state: AppState, questionArr: Question[]) => {
  return shuffle(
    questionArr.filter(
      (item) =>
        item.level === state.category ||
        (state.category === 3 && item.level === 2)
    )
  );
};

export default (state = initialState, action: ActionTypes): AppState => {
  switch (action.type) {
    case SELECT_CATEGORY: {
      return {
        ...state,
        category: action.category,
      };
    }

    case LOAD_QUESTIONS: {
      return {
        ...state,
        questions: loadQuestions(state, questions),
      };
    }

    case ADD_QUESTIONS: {
      return {
        ...state,
        questions: state.questions.concat(loadQuestions(state, questions)),
      };
    }

    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};
