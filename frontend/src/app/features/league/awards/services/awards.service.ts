import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, retry, tap, throwError } from 'rxjs';
import { API_CONFIG } from 'src/app/core/config/api.config';

import { PlayerAwards } from '../models/playerAwards';

@Injectable({
  providedIn: 'root',
})
export class AwardsService {
  private awards: PlayerAwards[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.awards.length) {
      return of(this.awards);
    }

    return this.http.get<PlayerAwards[]>(`${API_CONFIG.baseUrl}/awards`).pipe(
      tap((awards) => (this.awards = awards)),
      retry(2),
      catchError(this.handleError)
    );
  }

  readOne(id: any) {
    return this.http.get<PlayerAwards[]>(`${API_CONFIG.baseUrl}/awards/${id}`);
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
