import { PlayoffStats } from '../../models/playoffstats';
import { PlayoffsService } from './../../services/playoffs.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'playoffstats',
  templateUrl: './playoffstats.component.html',
  styleUrls: ['./playoffstats.component.scss'],
})
export class PlayoffstatsComponent implements OnInit {
  offstats!: PlayoffStats[];

  constructor(private offsService: PlayoffsService) {}

  ngOnInit(): void {
    let season = parseInt(localStorage.getItem('season')!);
    this.offsService.readOffStats(season).subscribe((res) => {
      if (res.length > 0) {
        this.offstats = res;
      } else {
        this.offsService.readOffStats(season - 1).subscribe((res) => {
          this.offstats = res;
        });
      }
    });
  }
}
