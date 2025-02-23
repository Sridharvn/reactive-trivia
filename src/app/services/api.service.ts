import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrls = {
    quiz: 'https://opentdb.com/api.php',
    users: 'https://jsonplaceholder.typicode.com',
  };

  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) {}

  private getBaseUrl(apiType: 'quiz' | 'users'): string {
    return this.baseUrls[apiType];
  }

  get<T>(
    apiType: 'quiz' | 'users',
    endpoint: string,
    params?: HttpParams
  ): Observable<T> {
    const url = `${this.getBaseUrl(apiType)}${endpoint}`;
    return this.http.get<T>(url, { params, headers: this.headers });
  }

  post<T>(
    apiType: 'quiz' | 'users',
    endpoint: string,
    body: any
  ): Observable<T> {
    const url = `${this.getBaseUrl(apiType)}${endpoint}`;
    return this.http.post<T>(url, body, { headers: this.headers });
  }

  put<T>(
    apiType: 'quiz' | 'users',
    endpoint: string,
    body: any
  ): Observable<T> {
    const url = `${this.getBaseUrl(apiType)}${endpoint}`;
    return this.http.put<T>(url, body, { headers: this.headers });
  }

  delete<T>(apiType: 'quiz' | 'users', endpoint: string): Observable<T> {
    const url = `${this.getBaseUrl(apiType)}${endpoint}`;
    return this.http.delete<T>(url, { headers: this.headers });
  }
}
