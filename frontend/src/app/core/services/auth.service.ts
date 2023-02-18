import { API_CONFIG } from 'src/app/config/api.config';
import { HttpClient } from '@angular/common/http';
import { Creds } from './../../private/login/models/creds';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(creds: Creds) {
    return this.http.post(`${API_CONFIG.baseUrl}/login`, creds, {
      observe: 'response',
      responseType: 'text',
    });
  }
}
