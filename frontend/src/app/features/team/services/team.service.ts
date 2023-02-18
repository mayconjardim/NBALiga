import { TeamRanking } from './../models/teamRanking';
import { Team } from './../models/team';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, retry, tap, throwError } from 'rxjs';
import { API_CONFIG } from 'src/app/core/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teams: Team[] = [];
  private teamsRank: TeamRanking[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.teams.length) {
      return of(this.teams);
    }

    return this.http.get<Team[]>(`${API_CONFIG.baseUrl}/teams`).pipe(
      tap((teams) => (this.teams = teams)),
      retry(2),
      catchError(this.handleError)
    );
  }

  readRank() {
    if (this.teamsRank.length) {
      return of(this.teamsRank);
    }

    return this.http
      .get<TeamRanking[]>(`${API_CONFIG.baseUrl}/teams/rankings`)
      .pipe(
        tap((teamsRank) => (this.teamsRank = teamsRank)),
        retry(2),
        catchError(this.handleError)
      );
  }

  readOne(id: any) {
    return this.http.get<Team>(`${API_CONFIG.baseUrl}/teams/${id}`);
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
