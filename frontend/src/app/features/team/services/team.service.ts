import { Team } from './../models/team';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of, retry, tap, throwError } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private teams: Team[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.teams.length) {
      return of(this.teams);
    }

    return this.http.get<Team[]>(`${API_CONFIG.baseUrl}/teams`).pipe(
      tap((teams) => {
        this.teams = teams;
      }),
      retry(2),
      catchError(this.handleError)
    );
  }

  readOne(id: number) {
    return this.read().pipe(
      map((teams) => {
        const team = teams.find((team: Team) => team.id === id);
        return team;
      }),
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
