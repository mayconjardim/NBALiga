import { Component, Input } from '@angular/core';
import { Team } from '../../models/team';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'team-draftpicks',
  templateUrl: './team-draftpicks.component.html',
  styleUrls: ['./team-draftpicks.component.scss'],
})
export class TeamDraftpicksComponent {
  @Input() team!: Team;
  teamLogo = 'assets/images/logos/';
  picks!: any[];

  constructor(private breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(['(max-width: 600px)']).subscribe((result) => {
      this.displayedColumns = result.matches
        ? ['year', 'round', 'team']
        : ['year', 'round', 'ownedby', 'team'];
    });
  }

  ngOnInit(): void {
    this.picks = this.team.picks;
  }

  displayedColumns: string[] = ['year', 'round', 'ownedby', 'team'];
}
