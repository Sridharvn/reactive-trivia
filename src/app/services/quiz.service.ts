// src/app/services/quiz.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private api: ApiService) {}

  getQuestions(params: any): Observable<any> {
    debugger;
    const url = '';
    return this.api.get('quiz', url, params);
  }
}
