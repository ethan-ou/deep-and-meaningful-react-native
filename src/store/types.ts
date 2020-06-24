export const LOAD_QUESTIONS = "LOAD_QUESTIONS";
export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const SELECT_CATEGORY = "SELECT_CATEGORY";
export const SWITCH_THEME = "SWITCH_THEME";
export const SET_LOADED = "SET_LOADED";

interface LoadQuestionsAction {
  type: typeof LOAD_QUESTIONS;
}

interface AddQuestionsAction {
  type: typeof ADD_QUESTIONS;
}

interface SelectCategoryAction {
  type: typeof SELECT_CATEGORY;
  category: number;
}

interface SwitchThemeAction {
  type: typeof SWITCH_THEME;
  theme?: ThemeType;
}

export interface Question {
  question: string;
  level: number;
  category: string;
}

export type ActionTypes =
  | SelectCategoryAction
  | LoadQuestionsAction
  | AddQuestionsAction
  | SwitchThemeAction;

export type ThemeType = "light" | "dark";

export interface AppState {
  theme: ThemeType;
  category: number;
  questions: Question[];
}
