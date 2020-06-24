import {
  LOAD_QUESTIONS,
  SELECT_CATEGORY,
  ADD_QUESTIONS,
  ActionTypes,
} from "./types";

export function loadQuestions(): ActionTypes {
  return {
    type: LOAD_QUESTIONS,
  };
}

export function addQuestions(): ActionTypes {
  return {
    type: ADD_QUESTIONS,
  };
}

export function selectCategory(category: number): ActionTypes {
  return {
    type: SELECT_CATEGORY,
    category,
  };
}
