import { Injectable } from '@angular/core';
import { PlayoffStats } from '../models/playoffstats';
import { catchError, of, retry, tap, throwError } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlayoffsService {
  playoffStats: PlayoffStats[] = [];

  constructor(private http: HttpClient) {}

  readOffStats(season: number) {
    if (this.playoffStats.length) {
      return of(this.playoffStats);
    }

    return this.http
      .get<PlayoffStats[]>(
        `${API_CONFIG.baseUrl}/playoffstats/season/${season}`
      )
      .pipe(
        tap((stats) => (this.playoffStats = stats)),
        retry(2),
        catchError(this.handleError)
      );
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
