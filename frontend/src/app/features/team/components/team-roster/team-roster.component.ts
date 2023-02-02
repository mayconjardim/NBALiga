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

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }
}
