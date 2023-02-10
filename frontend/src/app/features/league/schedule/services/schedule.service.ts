import { Injectable } from '@angular/core';
import { Schedule } from '../models/schedule';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, of, retry, tap, throwError } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';
import { SchedulePaged } from '../models/schedulePaged';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private schedules!: SchedulePaged;

  constructor(private http: HttpClient) {}

  read() {
    return this.http.get<SchedulePaged>(`${API_CONFIG.baseUrl}/schedules`).pipe(
      tap((schedules) => (this.schedules = schedules)),
      retry(2),
      catchError(this.handleError)
    );
  }

  readOne(team: any) {
    return this.http.get<Schedule[]>(`${API_CONFIG.baseUrl}/schedules/${team}`);
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
