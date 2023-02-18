import { PlayerPageable } from './../models/player';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, retry, tap, throwError } from 'rxjs';
import { API_CONFIG } from 'src/app/core/config/api.config';

import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class PlayerService {
  private players!: PlayerPageable;

  constructor(private http: HttpClient) {}

  read() {
    return this.http
      .get<PlayerPageable>(`${API_CONFIG.baseUrl}/players?size=1000`)
      .pipe(
        tap((players) => (this.players = players)),
        retry(2),
        catchError(this.handleError)
      );
  }

  readOne(id: any) {
    return this.http.get<Player>(`${API_CONFIG.baseUrl}/players/${id}`);
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
