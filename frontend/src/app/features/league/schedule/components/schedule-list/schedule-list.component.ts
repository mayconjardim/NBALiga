import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from 'src/app/features/league/schedule/models/schedule';

@Component({
  selector: 'schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.scss'],
})
export class ScheduleListComponent implements OnInit {
  @Input() schedule!: Schedule[];
  preseason!: Schedule[];
  regular!: Schedule[];
  playoffs!: Schedule[];
  teamLogo = 'assets/images/logos/';

  ngOnInit(): void {
    this.getGameType();
  }

  getGameType() {
    this.preseason = this.schedule.filter((x) => x.day >= 1 && x.day <= 14);
    this.regular = this.schedule.filter((x) => x.day >= 15 && x.day <= 186);
    this.playoffs = this.schedule.filter((x) => x.day >= 187);
  }

  gamesByDayPre(day: any) {
    return this.preseason.filter((g) => g.day === day);
  }

  gamesByDayReg(day: any) {
    return this.regular.filter((g) => g.day === day);
  }

  gamesByDayOff(day: any) {
    return this.playoffs.filter((g) => g.day === day);
  }

  getUniqueDays(games: any) {
    return Array.from(new Set(games.map((game: { day: any }) => game.day)));
  }

  getGameTypeName(day: any) {
    if (day >= 1 && day <= 14) {
      return 'PRESEASON';
    } else if (day >= 15 && day <= 186) {
      return 'REGULAR SEASON';
    } else {
      return 'PLAYOFFS';
    }
  }
}
