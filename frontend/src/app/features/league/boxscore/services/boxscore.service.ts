import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from 'src/app/config/api.config';

import { PlayerGameStats } from './../models/playerGameStats';

@Injectable({
  providedIn: 'root',
})
export class BoxscoreService {
  constructor(private http: HttpClient) {}

  readPGS(team: string, day: number) {
    return this.http.get<PlayerGameStats[]>(
      `${API_CONFIG.baseUrl}/playergamestats?team=${team}&day=${day}`
    );
  }
}
