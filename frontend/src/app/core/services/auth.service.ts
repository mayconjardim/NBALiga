import { API_CONFIG } from 'src/app/core/config/api.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Creds } from './../../private/login/models/creds';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      Authorization: API_CONFIG.Token,
      Accept: '*/*',
    }),
  };

  constructor(private http: HttpClient) {}

  authenticate(creds: Creds) {
    const body = new HttpParams()
      .set('username', creds.user)
      .set('password', creds.password)
      .set('grant_type', 'password');

    return this.http.post(
      `${API_CONFIG.baseUrl}/oauth/token`,
      body,
      this.httpOptions
    );
  }

  successfulLogin(
    access_token: string,
    User: string,
    UserId: string,
    Team: string
  ) {
    localStorage.setItem('token', access_token);
    localStorage.setItem('userName', User);
    localStorage.setItem('userId', UserId);
    localStorage.setItem('team', Team);
  }

  logout() {
    localStorage.clear();
  }
}
