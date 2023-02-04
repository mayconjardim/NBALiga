import { SeasonInfo } from './../models/seasonInfo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, retry, tap, throwError } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable({
  providedIn: 'root',
})
export class SeasonInfoService {
  private infos: SeasonInfo[] = [];

  constructor(private http: HttpClient) {}

  read() {
    if (this.infos.length) {
      return of(this.infos);
    }

    return this.http.get<SeasonInfo[]>(`${API_CONFIG.baseUrl}/seasoninfo`).pipe(
      tap((infos) => (this.infos = infos)),
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
