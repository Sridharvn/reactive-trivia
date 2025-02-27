import { createAction, props } from '@ngrx/store';
import { Questions } from '../../models/question.model';

export const loadQuestions = createAction(
  '[Quiz] Load Questions',
  props<{ params: any }>()
);

export const loadQuestionsSuccess = createAction(
  '[Quiz] Load Questions Success',
  props<{ questions: Questions[] }>()
);

export const loadQuestionsFailure = createAction(
  '[Quiz] Load Questions Failure',
  props<{ error: any }>()
);
