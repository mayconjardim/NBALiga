export interface Team {
  [index: string]: any;
  id?: number;
  league: number;
  cityName: string;
  name: string;
  city: string;
  state: string;
  conference: string;
  division: string;
  teamRating: number;
  championships: number;
  playoffs: number;
  totalSalary: number;
  numPlayers: number;
  oldWinRating: number;
  streak: number;
  homeWins: number;
  homeLosses: number;
  roadWins: number;
  roadLosses: number;
  winPct: number;
  totalWins: number;
  totalLosses: number;
  playoffWins: number;
  playoffLosses: number;
  finalsAppearances: number;
  points: number;
  allowedPoints: number;
  steals: number;
  allowedSteals: number;
  rebounds: number;
  allowedRebounds: number;
  assists: number;
  allowedAssists: number;
  blocks: number;
  allowedBlocks: number;
  turnovers: number;
  allowedTurnovers: number;
  fga: number;
  fgm: number;
  allowedFga: number;
  allowedFgm: number;
  threePa: number;
  threePm: number;
  allowed3pa: number;
  allowed3pm: number;
  ftm: number;
  fta: number;
  allowedFtm: number;
  allowedFta: number;
  lastPlayoffYear: number;
  isHuman: boolean;
  gb: number;
  confGb: number;
  divRank: number;
  confRank: number;
  arenaName: string;
  pointsFor: number;
  teamName: string;
  totalGames: number;
  pointsDiff: number;
  strk: string;
  pointsAgainst: 107.3;
  ppg: number;
  oppg: number;
  apg: number;
  rpg: number;
  rebsPerGame: number;
  pointsPerGame: number;
  assistsPerGame: number;
  players: any[];
  picks: any[];
}
