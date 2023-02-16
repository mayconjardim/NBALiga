import { Schedule } from 'src/app/features/league/schedule/models/schedule';
import { Component, Input } from '@angular/core';
import { PlayerGameStats } from '../../models/playerGameStats';

@Component({
  selector: 'boxscore-table',
  templateUrl: './boxscore-table.component.html',
  styleUrls: ['./boxscore-table.component.scss'],
})
export class BoxscoreTableComponent {
  @Input() game!: Schedule;
  @Input() homeStarter!: PlayerGameStats[];
  @Input() homeBench!: PlayerGameStats[];
  @Input() awayStarter!: PlayerGameStats[];
  @Input() awayBench!: PlayerGameStats[];

  displayedColumns: string[] = [
    'playerName',
    'minutes',
    'points',
    'rebounds',
    'assists',
    'steals',
    'blocks',
    'turnovers',
    'fouls',
    'fg',
    '3pt',
    'ft',
    'plusMinus',
  ];

  imgLogo = 'assets/images/logos/';

  getPosition(position: number) {
    switch (position) {
      case 5:
        return 'PG';
      case 4:
        return 'SG';
      case 3:
        return 'SF';
      case 2:
        return 'PF';
      default:
        return 'C';
    }
  }
}
