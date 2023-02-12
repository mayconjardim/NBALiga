import { Stats } from '../../league/stats/models/stats';

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
  insideScoring: number;
  jumpShot: number;
  freeThrowShot: number;
  threePointShot: number;
  handling: number;
  passing: number;
  offensiveRebounding: number;
  defensiveRebounding: number;
  postDefense: number;
  perimeterDefense: number;
  stealing: number;
  shotBlocking: number;
  quickness: number;
  strength: number;
  stamina: number;
  jumping: number;
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
  overallRating: number;
  overallPotential: number;
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
  seasonStats: Stats[];
  overallPhysical: number;
  overallDefense: number;
  overallMental: number;
  overallOffense: number;
  positionName: string;
  playerTeam: string;
  expiring: string;
}

export interface PlayerPageable {
  content: Player[];
  pageable: Pageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort2;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageSize: number;
  pageNumber: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface Sort2 {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
