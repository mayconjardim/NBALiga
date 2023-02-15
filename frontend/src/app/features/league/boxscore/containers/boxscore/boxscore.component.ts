import { PlayerGameStats } from './../../models/playerGameStats';
import { BoxscoreService } from './../../services/boxscore.service';
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
  homeStarter!: PlayerGameStats[];
  homeBench!: PlayerGameStats[];
  awayStarter!: PlayerGameStats[];
  awayBench!: PlayerGameStats[];

  constructor(
    private route: ActivatedRoute,
    private scheduleService: ScheduleService,
    private boxScoreService: BoxscoreService
  ) {}

  ngOnInit(): void {
    const boxname = this.route.snapshot.paramMap.get('id');
    this.scheduleService.readOneBoxScore(boxname).subscribe((game) => {
      this.game = game;
      this.getBoxStats();
    });
  }

  getBoxStats() {
    let home = this.game.home;
    let away = this.game.away;
    let day = this.game.day;
    this.boxScoreService.readPGS(home, day).subscribe((res) => {
      this.homeStarter = res.filter((x) => x.starter == 1);
      this.homeBench = res.filter((x) => x.starter == 0);
    });

    this.boxScoreService.readPGS(away, day).subscribe((res) => {
      this.awayStarter = res.filter((x) => x.starter == 1);
      this.awayBench = res.filter((x) => x.starter == 0);
    });
  }
}
