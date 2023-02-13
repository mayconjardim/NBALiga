import { Injectable } from '@angular/core';
import { PlayoffStats } from '../models/playoffstats';
import { catchError, of, retry, tap, throwError } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Playoffs } from '../models/playoffs';

@Injectable({
  providedIn: 'root',
})
export class PlayoffsService {
  playoffStats: PlayoffStats[] = [];
  playoffs: Playoffs[] = [];

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

  readOnePlayoffStats(id: any) {
    return this.http.get<PlayoffStats[]>(
      `${API_CONFIG.baseUrl}/playoffstats/${id}`
    );
  }

  readPlayoffs() {
    if (this.playoffs.length) {
      return of(this.playoffs);
    }

    return this.http.get<Playoffs[]>(`${API_CONFIG.baseUrl}/playoffs`).pipe(
      tap((playoffs) => (this.playoffs = playoffs)),
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
