export interface Standings {
  id: number;
  cityName: string;
  name: string;
  conference: string;
  streak: number;
  homeWins: number;
  homeLosses: number;
  roadWins: number;
  roadLosses: number;
  winPct: number;
  points: number;
  allowedPoints: number;
  isHuman: boolean;
  confGb: number;
  totalWins: number;
  totalLosses: number;
  gamesBehind: string;
  strk: string;
  pointsAgainst: number;
  pointsFor: number;
  pointsDiff: number;
  teamName: string;
  totalGames: number;
}
