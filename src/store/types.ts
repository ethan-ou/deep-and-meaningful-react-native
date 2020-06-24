import { Theme } from "@react-navigation/native";

export const LOAD_QUESTIONS = "LOAD_QUESTIONS";
export const ADD_QUESTIONS = "ADD_QUESTIONS";
export const SELECT_CATEGORY = "SELECT_CATEGORY";

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

export interface Question {
  question: string;
  level: number;
  category: string;
}

export type ActionTypes =
  | SelectCategoryAction
  | LoadQuestionsAction
  | AddQuestionsAction;

export interface AppState {
  category: number;
  questions: Question[];
}
