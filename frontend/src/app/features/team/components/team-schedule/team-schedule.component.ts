import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import { Schedule } from 'src/app/features/league/schedule/models/schedule';

import { Team } from '../../models/team';

@Component({
  selector: 'team-schedule',
  templateUrl: './team-schedule.component.html',
  styleUrls: ['./team-schedule.component.scss'],
})
export class TeamScheduleComponent {
  @Input() team!: Team;
  @Input() schedule!: Schedule[];
  teamLogo = 'assets/images/logos/';

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe((result) => {
      this.displayedColumns = result.matches
        ? ['day', 'opp', 'result']
        : ['day', 'opp', 'playerOfGame', 'result'];
    });
  }

  displayedColumns: string[] = ['day', 'opp', 'playerOfGame', 'result'];

  getGameType(day: number) {
    if (day >= 1 && day <= 14) {
      return 'Preseason';
    } else if (day >= 15 && day <= 186) {
      return 'Regular Season';
    } else {
      return 'Playoffs';
    }
  }

  getHomeOrAway(away: string, home: string) {
    if (this.team.name == home) {
      return 'vs ' + away;
    }
    return '@ ' + home;
  }

  getPicHomeOrAway(away: string, home: string) {
    if (this.team.name == home) {
      return away;
    }
    return home;
  }

  getWinner(away: string, home: string, awayScore: number, homeScore: number) {
    if (awayScore === 0) return '';

    const isAway = this.team.name === away;
    const isHome = this.team.name === home;

    if (!isAway && !isHome) return '-';

    return awayScore > homeScore
      ? isAway
        ? 'W '
        : 'L '
      : isAway
      ? 'L '
      : 'W ';
  }
}
