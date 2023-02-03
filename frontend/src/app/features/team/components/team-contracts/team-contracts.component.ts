import { Component, Input } from '@angular/core';
import { Team } from '../../models/team';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'team-contracts',
  templateUrl: './team-contracts.component.html',
  styleUrls: ['./team-contracts.component.scss'],
})
export class TeamContractsComponent {
  @Input() team!: Team;
  players!: any[];
  capSpace: number = 101962352;
  imgLocation = 'assets/images/players/';

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe((result) => {
      this.displayedColumns = result.matches
        ? [
            'name',
            'currentRating',
            'futureRating',
            'contract1',
            'contract2',
            'contract3',
            'contract4',
            'contract5',
          ]
        : [
            'name',
            'positionNumber',
            'currentRating',
            'futureRating',
            'age',
            'contract1',
            'contract2',
            'contract3',
            'contract4',
            'contract5',
          ];
    });
  }

  ngOnInit(): void {
    this.players = this.team.players;
  }

  displayedColumns: string[] = [
    'name',
    'positionNumber',
    'currentRating',
    'futureRating',
    'age',
    'contract1',
    'contract2',
    'contract3',
    'contract4',
    'contract5',
  ];

  getTotalSalary(contract: number) {
    let total;

    switch (contract) {
      case 1:
        total = this.team.players?.reduce((acc, cur) => acc + cur.contract1, 0);
        break;
      case 2:
        total = this.team.players?.reduce((acc, cur) => acc + cur.contract2, 0);
        break;
      case 3:
        total = this.team.players?.reduce((acc, cur) => acc + cur.contract3, 0);
        break;

      case 4:
        total = this.team.players?.reduce((acc, cur) => acc + cur.contract4, 0);
        break;

      case 5:
        total = this.team.players?.reduce((acc, cur) => acc + cur.contract5, 0);
        break;

      default:
        total = 0;
        break;
    }

    return total;
  }

  getCapSpace(total: any) {
    return this.capSpace - total;
  }

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

  ratingColors(rating: string) {
    switch (rating) {
      case 'A+':
        return 'assets/images/utils/aa.png';
      case 'A':
        return 'assets/images/utils/a.png';
      case 'B':
        return 'assets/images/utils/b.png';
      case 'C':
        return 'assets/images/utils/c.png';
      case 'D':
        return 'assets/images/utils/d.png';
      default:
        return 'assets/images/utils/f.png';
    }
  }

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }
}
