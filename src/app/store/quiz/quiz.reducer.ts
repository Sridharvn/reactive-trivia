import { createReducer, on } from '@ngrx/store';
import { QuizState } from './quiz.state';
import {
  loadQuestions,
  loadQuestionsFailure,
  loadQuestionsSuccess,
} from './quiz.actions';

export const initialState: QuizState = {
  questions: [],
  loading: false,
  error: null,
};

export const QuizReducer = createReducer(
  initialState,
  on(loadQuestions, (state) => ({ ...state, loading: true })),
  on(loadQuestionsSuccess, (state, { questions }) => ({
    ...state,
    questions,
    loading: false,
  })),
  on(loadQuestionsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
