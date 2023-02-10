import { BreakpointObserver } from '@angular/cdk/layout';
import { DraftPicks } from './../../models/picks';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'picks-list',
  templateUrl: './picks-list.component.html',
  styleUrls: ['./picks-list.component.scss'],
})
export class PicksListComponent {
  @Input() picks!: DraftPicks[];
  teamLogo = 'assets/images/logos/';

  displayedColumns: string[] = ['year', 'round', 'ownedby', 'team'];
}
