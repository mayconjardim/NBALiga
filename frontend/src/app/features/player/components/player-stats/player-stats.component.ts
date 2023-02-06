import { Component, Input } from '@angular/core';
import { Stats } from 'src/app/features/league/stats/models/stats';

@Component({
  selector: 'player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss'],
})
export class PlayerStatsComponent {
  @Input() playerStats!: Stats[];
}
