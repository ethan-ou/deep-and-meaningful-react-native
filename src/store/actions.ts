import {
  LOAD_QUESTIONS,
  SELECT_CATEGORY,
  ADD_QUESTIONS,
  ActionTypes,
  SWITCH_THEME,
  ThemeType,
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

export function switchTheme(theme?: ThemeType): ActionTypes {
  return {
    type: SWITCH_THEME,
    theme: theme,
  };
}
