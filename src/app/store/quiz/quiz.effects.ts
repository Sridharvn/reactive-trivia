import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, pipe } from 'rxjs';
import * as QuizActions from './quiz.actions';
import { QuizService } from '../../services/quiz.service';

@Injectable()
export class QuizEffects {
  constructor(private actions$: Actions, private quizService: QuizService) {}

  loadQuestions$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(QuizActions.loadQuestions),
      switchMap((action) =>
        this.quizService.getQuestions(action.params).pipe(
          map((response) =>
            QuizActions.loadQuestionsSuccess({ questions: response.results })
          ),
          catchError((error) => of(QuizActions.loadQuestionsFailure({ error })))
        )
      )
    );
  });
}
