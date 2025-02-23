// src/app/services/quiz.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { QuizParams } from '../models/quiz-params.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private api: ApiService) {}

  getQuestions(params: QuizParams): Observable<any> {
    // https://opentdb.com/api.php?amount=10&category=10&difficulty=medium&type=multiple
    const url = `?amount=${params.amount ?? ''}&category=${
      params.category ?? ''
    }&difficulty=${params.difficulty ?? ''}&type=${params.type ?? ''}`;
    return this.api.get('quiz', url);
  }
}
