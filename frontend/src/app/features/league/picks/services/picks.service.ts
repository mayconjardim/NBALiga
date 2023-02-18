import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DraftPicks } from './../models/picks';
import { Injectable } from '@angular/core';
import { catchError, of, retry, tap, throwError } from 'rxjs';
import { API_CONFIG } from 'src/app/core/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class PicksService {
  private picks: DraftPicks[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.picks.length) {
      return of(this.picks);
    }

    return this.http.get<DraftPicks[]>(`${API_CONFIG.baseUrl}/picks`).pipe(
      tap((picks) => (this.picks = picks)),
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
