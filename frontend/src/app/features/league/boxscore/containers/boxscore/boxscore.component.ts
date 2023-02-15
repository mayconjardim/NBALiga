import { Schedule } from 'src/app/features/league/schedule/models/schedule';
import { Component } from '@angular/core';
import { ScheduleService } from '../../../schedule/services/schedule.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'boxscore',
  templateUrl: './boxscore.component.html',
  styleUrls: ['./boxscore.component.scss'],
})
export class BoxscoreComponent {
  game!: Schedule;

  constructor(
    private route: ActivatedRoute,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    const boxname = this.route.snapshot.paramMap.get('id');
    this.scheduleService.readOneBoxScore(boxname).subscribe((game) => {
      this.game = game;
    });
  }
}
