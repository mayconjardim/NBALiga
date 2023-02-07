import { Component, Input, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { Player } from 'src/app/features/player/models/player';

@Component({
  selector: 'player-ratings',
  templateUrl: './player-ratings.component.html',
  styleUrls: ['./player-ratings.component.scss'],
})
export class PlayerRatingsComponent implements OnInit {
  @Input() player!: Player;
  ratings: any[] = [];
  season = localStorage.getItem('season');

  ngOnInit(): void {
    this.ratings.push(this.player);
  }

  displayedColumns: string[] = [
    'SEASON',
    'overallRating',
    'insideScoring',
    'jumpShot',
    'freeThrowShot',
    'threePointShot',
    'handling',
    'passing',
    'offensiveRebounding',
    'defensiveRebounding',
    'postDefense',
    'perimeterDefense',
    'stealing',
    'shotBlocking',
  ];

  getSeason() {
    let item = localStorage.getItem('season');
    let seasonNumber = Number(item);
    let seasonString = (seasonNumber + 1).toString();
    seasonString = seasonString.substring(2);
    return seasonNumber + '-' + seasonString;
  }

  public radarChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      r: {
        ticks: {
          display: true,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
      },
    },

    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };
  public radarChartLabels: string[] = [
    'INS',
    'JPS',
    'FTS',
    '3PS',
    'HND',
    'PAS',
    'ORB',
    'DRB',
  ];

  public radarChartData: ChartData<'radar'> = {
    labels: this.radarChartLabels,
    datasets: [{ data: [65, 59, 90, 81, 56, 55, 40] }],
  };
  public radarChartType: ChartType = 'radar';
}
