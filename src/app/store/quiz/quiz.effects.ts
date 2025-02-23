import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as QuizActions from './quiz.actions';
import { QuizService } from '../../services/quiz.service';

@Injectable()
export class QuizEffects {
  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuizActions.loadQuestions),
      switchMap((action) =>
        this.quizService.getQuestions(action.params).pipe(
          map((response) =>
            QuizActions.loadQuestionsSuccess({ questions: response.results })
          ),
          catchError((error) => of(QuizActions.loadQuestionsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private quizService: QuizService) {}
}
