import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, retry, tap, throwError } from 'rxjs';
import { API_CONFIG } from 'src/app/core/config/api.config';

import { Stats } from './../models/stats';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private stats: Stats[] = [];

  constructor(private http: HttpClient) {}

  read(season: number) {
    if (this.stats.length) {
      return of(this.stats);
    }

    return this.http
      .get<Stats[]>(`${API_CONFIG.baseUrl}/stats/season/${season}`)
      .pipe(
        tap((stats) => (this.stats = stats)),
        retry(2),
        catchError(this.handleError)
      );
  }

  readOne(id: any) {
    return this.http.get<Stats[]>(`${API_CONFIG.baseUrl}/stats/${id}`);
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
