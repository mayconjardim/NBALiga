import { StatsService } from './../../services/stats.service';
import { Component } from '@angular/core';
import { Stats } from '../../models/stats';

@Component({
  selector: 'stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  stats!: Stats[];

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    let season = parseInt(localStorage.getItem('season')!);
    this.statsService.read(season).subscribe((res) => {
      if (res.length > 0) {
        this.stats = res;
      } else {
        this.statsService.read(season - 1).subscribe((res) => {
          this.stats = res;
        });
      }
    });
  }
}
