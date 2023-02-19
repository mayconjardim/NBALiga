import { API_CONFIG } from 'src/app/core/config/api.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Creds } from './../../private/login/models/creds';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtService: JwtHelperService = new JwtHelperService();

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

  isAuthenticated() {
    let token = localStorage.getItem('token');
    if (token != null) {
      return !this.jwtService.isTokenExpired(token);
    }
    return false;
  }

  logout() {
    localStorage.clear();
  }
}
