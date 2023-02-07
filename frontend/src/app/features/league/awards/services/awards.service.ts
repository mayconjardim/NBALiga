import { Injectable } from '@angular/core';
import { Awards } from '../models/awards';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, of, retry, tap, throwError } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class AwardsService {
  private awards: Awards[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.awards.length) {
      return of(this.awards);
    }

    return this.http.get<Awards[]>(`${API_CONFIG.baseUrl}/awards`).pipe(
      tap((awards) => (this.awards = awards)),
      retry(2),
      catchError(this.handleError)
    );
  }

  readOne(id: any) {
    return this.http.get<Awards[]>(`${API_CONFIG.baseUrl}/awards/${id}`);
  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof ErrorEvent) {
      console.warn('Cliente', err.message);
    } else {
      console.log('Server', err.status);
    }
    return throwError(() => new Error(err.message));
  }
}
