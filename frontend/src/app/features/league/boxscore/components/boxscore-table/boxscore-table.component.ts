import { Schedule } from 'src/app/features/league/schedule/models/schedule';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'boxscore-table',
  templateUrl: './boxscore-table.component.html',
  styleUrls: ['./boxscore-table.component.scss'],
})
export class BoxscoreTableComponent {
  @Input() game!: Schedule;
  imgLogo = 'assets/images/logos/';
}
