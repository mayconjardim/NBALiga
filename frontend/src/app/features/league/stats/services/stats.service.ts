import { PlayoffStats } from './../models/playoffStats';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Stats } from './../models/stats';
import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/app/config/api.config';
import { catchError, of, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatsService {
  private stats: Stats[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.stats.length) {
      return of(this.stats);
    }

    return this.http.get<Stats[]>(`${API_CONFIG.baseUrl}/stats`).pipe(
      tap((stats) => (this.stats = stats)),
      retry(2),
      catchError(this.handleError)
    );
  }

  readOne(id: any) {
    return this.http.get<Stats[]>(`${API_CONFIG.baseUrl}/stats/${id}`);
  }

  readOnePlayoffs(id: any) {
    return this.http.get<PlayoffStats[]>(
      `${API_CONFIG.baseUrl}/playoffstats/${id}`
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
