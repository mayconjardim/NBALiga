export interface PlayerGameStats {
  id: number;
  seasonDay: number;
  league: number;
  team: string;
  opponent: number;
  minutes: number;
  fgm: number;
  fga: number;
  ftm: number;
  fta: number;
  threePm: number;
  threePa: number;
  offensiveRebounds: number;
  rebounds: number;
  assists: number;
  steals: number;
  blocks: number;
  turnovers: number;
  points: number;
  fouls: number;
  plusMinus: number;
  position: number;
  starter: number;
  playerName: string;
}
