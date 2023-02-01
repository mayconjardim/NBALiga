import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, retry, tap, throwError } from 'rxjs';

import { Champs } from '../models/champs';
import { API_CONFIG } from './../../../config/api.config';

@Injectable({
  providedIn: 'root',
})
export class ChampsService {
  private champs: Champs[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.champs.length) {
      return of(this.champs);
    }

    return this.http.get<Champs[]>(`${API_CONFIG.baseUrl}/champs`).pipe(
      tap((champs) => {
        this.champs = champs;
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
