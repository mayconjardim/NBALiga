import { Schedule } from 'src/app/features/league/schedule/models/schedule';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss'],
})
export class ScheduleListComponent {
  @Input() schedule!: Schedule[];
  teamLogo = 'assets/images/logos/';

  getGameType(day: number) {
    if (day >= 1 && day <= 14) {
      return 'Preseason';
    } else if (day >= 15 && day <= 186) {
      return 'Regular Season';
    } else {
      return 'Playoffs';
    }
  }
}
