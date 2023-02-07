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

  atributes1: number[] = [];
  atributes2: number[] = [];

  ngOnInit(): void {
    this.ratings.push(this.player);
    this.atributes1.push(
      this.player.insideScoring,
      this.player.jumpShot,
      this.player.freeThrowShot,
      this.player.threePointShot,
      this.player.handling,
      this.player.passing,
      this.player.offensiveRebounding,
      this.player.defensiveRebounding
    );

    this.atributes2.push(
      this.player.postDefense,
      this.player.perimeterDefense,
      this.player.stealing,
      this.player.shotBlocking,
      this.player.quickness,
      this.player.strength,
      this.player.jumping,
      this.player.stamina
    );

    console.log(this.atributes2);
  }

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
          display: false,
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
    datasets: [
      {
        data: this.atributes1,
      },
    ],
  };

  public radarChartType: ChartType = 'radar';

  //Radar2

  public radarChartLabels2: string[] = [
    'PSD',
    'PRD',
    'STL',
    'BLK',
    'QKN',
    'STR',
    'JMP',
    'STA',
  ];

  public radarChartData2: ChartData<'radar'> = {
    labels: this.radarChartLabels2,
    datasets: [
      {
        data: this.atributes2,
      },
    ],
  };

  public radarChartType2: ChartType = 'radar';
}
