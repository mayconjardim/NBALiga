import { SeasonStats } from './seasonStats';

export interface Player {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  height: number;
  weight: number;
  age: number;
  birthMonth: number;
  birthDay: number;
  birthYear: number;
  currentLeague: string;
  currentLeagueId: number;
  currentTeam: string;
  currentTeamId: number;
  contractTeam: string;
  contractTeamId: number;
  injury: string;
  timeInjured: number;
  inactive: boolean;
  positionNumber: number;
  experience: number;
  college: string;
  city: string;
  state: string;
  greed: number;
  happiness: number;
  loyalty: number;
  winner: number;
  insideScoring: string;
  jumpShot: string;
  freeThrowShot: string;
  threePointShot: string;
  handling: string;
  passing: string;
  offensiveRebounding: string;
  defensiveRebounding: string;
  postDefense: string;
  perimeterDefense: string;
  stealing: string;
  shotBlocking: string;
  quickness: string;
  strength: string;
  stamina: string;
  jumping: string;
  pot_inside: string;
  pot_jumpShot: string;
  pot_freeThrow: string;
  pot_3pShot: string;
  pot_handling: string;
  pot_passing: string;
  pot_oRebounding: string;
  pot_dRebounding: string;
  pot_postDefense: string;
  pot_perimeterDefense: string;
  pot_stealing: string;
  pot_blocking: string;
  currentRating: string;
  futureRating: string;
  overallRating: string;
  overallPotential: string;
  championships: number;
  playerOfGame: number;
  playerOfWeek: number;
  playerOfMonth: number;
  contract1: number;
  contract2: number;
  contract3: number;
  contract4: number;
  contract5: number;
  birdYears: any;
  rebsPerGame: number;
  assistsPerGame: number;
  pointsPerGame: number;
  contractLength: number;
  playerTs: number;
  playerFgPct: number;
  seasonStats: SeasonStats[];
}
