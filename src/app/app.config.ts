import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { QuizReducer } from './store/quiz/quiz.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ quiz: QuizReducer }),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideAnimationsAsync(),
  ],
};
