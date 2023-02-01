import { Team } from './../../models/team';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'team-header',
  templateUrl: './team-header.component.html',
  styleUrls: ['./team-header.component.scss'],
})
export class TeamHeaderComponent {
  @Input() team!: Team;
  logo = 'assets/images/logos/';

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }
}
