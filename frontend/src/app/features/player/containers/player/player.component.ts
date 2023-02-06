import { StatsService } from './../../../league/stats/services/stats.service';
import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';
import { ActivatedRoute } from '@angular/router';
import { Stats } from 'src/app/features/league/stats/models/stats';

@Component({
  selector: 'player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent implements OnInit {
  player!: Player;
  playerStats!: Stats[];

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerService,
    private statsService: StatsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.playerService.readOne(id).subscribe((player) => {
      this.player = player;
    });
    this.statsService.readOne(id).subscribe((stats) => {
      this.playerStats = stats;
    });
  }
}
