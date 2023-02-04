import { TeamRanking } from './../../models/teamRanking';
import { Team } from './../../models/team';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'team-header',
  templateUrl: './team-header.component.html',
  styleUrls: ['./team-header.component.scss'],
})
export class TeamHeaderComponent {
  @Input() team!: Team;
  @Input() rank!: TeamRanking[];
  logo = 'assets/images/logos/';

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }

  findRank(prop: keyof TeamRanking): any {
    if (this.team.points <= 0) {
      return '-';
    }

    let sortedTeams = this.rank.slice().sort((a, b) => b[prop] - a[prop]);

    if (prop === 'pointsAgainst') {
      sortedTeams = sortedTeams.reverse();
    }

    const position = sortedTeams.findIndex(
      (t) => t.name === this.team.name && t[prop] === this.team[prop]
    );

    return `${position + 1}th`;
  }
}
