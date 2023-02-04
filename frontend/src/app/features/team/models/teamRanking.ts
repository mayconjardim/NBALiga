export interface TeamRanking {
  [index: string]: any;
  id: any;
  league: any;
  cityName: string;
  name: string;
  city: string;
  homeWins: number;
  homeLosses: number;
  roadWins: number;
  roadLosses: number;
  points: number;
  allowedPoints: number;
  rebounds: number;
  assists: number;
  rpg: number;
  apg: number;
  totalWins: number;
  totalLosses: number;
  pointsFor: number;
  teamName: string;
  pointsDiff: number;
  pointsAgainst: number;
  totalGames: number;
}
