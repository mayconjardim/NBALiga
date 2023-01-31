import { API_CONFIG } from './../../../config/api.config';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Standings } from './../models/standings';
import { Injectable } from '@angular/core';
import { catchError, of, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StandingsService {
  private standings: Standings[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.standings.length) {
      return of(this.standings);
    }

    return this.http.get<Standings[]>(`${API_CONFIG.baseUrl}/standings`).pipe(
      tap((standings) => {
        this.standings = standings;
      }),
      retry(2),
      catchError(this.handleError)
    );
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
