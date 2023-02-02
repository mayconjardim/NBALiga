import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../models/team';

@Component({
  selector: 'team-roster',
  templateUrl: './team-roster.component.html',
  styleUrls: ['./team-roster.component.scss'],
})
export class TeamRosterComponent implements OnInit {
  @Input() team!: Team;
  players!: any[];

  playerImg = 'assets/images/players/';
  error = 'assets/images/players/blank.png';

  ngOnInit(): void {
    this.players = this.team.players;
  }

  displayedColumns: string[] = [
    'name',
    'age',
    'positionNumber',
    'currentRating',
    'futureRating',
  ];

  getPlayerPic(firstName: string, lastName: string) {
    return {
      'background-image':
        'url(' + this.playerImg + firstName + '_' + lastName + '.png' + ')',
    };
  }

  getPosition(position: number) {
    switch (position) {
      case 5:
        return 'Point Guard';
      case 4:
        return 'Shooting guard';
      case 3:
        return 'Small forward';
      case 2:
        return 'Power forward';
      default:
        return 'Center';
    }
  }

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }
}
