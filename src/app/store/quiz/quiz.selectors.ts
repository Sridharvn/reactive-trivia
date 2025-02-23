import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QuizState } from './quiz.state';

export const selectQuizState = createFeatureSelector<QuizState>('quiz');

export const selectQuestions = createSelector(
  selectQuizState,
  (state) => state.questions
);

export const selectQuestionsLoading = createSelector(
  selectQuizState,
  (state) => state.loading
);
export const selectQuestionsError = createSelector(
  selectQuizState,
  (state) => state.error
);
