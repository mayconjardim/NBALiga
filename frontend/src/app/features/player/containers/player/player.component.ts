import { AwardsService } from './../../../league/awards/services/awards.service';
import { StatsService } from './../../../league/stats/services/stats.service';
import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { ActivatedRoute } from '@angular/router';
import { Stats } from 'src/app/features/league/stats/models/stats';
import { PlayoffStats } from 'src/app/features/league/stats/models/playoffStats';
import { PlayerAwards } from 'src/app/features/league/awards/models/playerAwards';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  player!: Player;
  playerStats!: Stats[];
  playerOffStats!: PlayoffStats[];
  awards!: PlayerAwards[];

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private statsService: StatsService,
    private awardService: AwardsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.playerService.readOne(id).subscribe((player) => {
      this.player = player;
      this.getAwards(id);
    });
    this.statsService.readOne(id).subscribe((stats) => {
      this.playerStats = stats;
    });

    this.statsService.readOnePlayoffs(id).subscribe((offStats) => {
      this.playerOffStats = offStats;
    });
  }

  getAwards(id: any) {
    this.awardService.readOne(id).subscribe((awards) => {
      this.awards = awards;
    });
  }
}
