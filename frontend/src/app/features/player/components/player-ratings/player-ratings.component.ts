import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Player } from 'src/app/features/player/models/player';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ChartComponent,
  ApexStroke,
  ApexPlotOptions,
  ApexYAxis,
  ApexMarkers,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: any;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
  yaxis: ApexYAxis;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'player-ratings',
  templateUrl: './player-ratings.component.html',
  styleUrls: ['./player-ratings.component.scss'],
})
export class PlayerRatingsComponent implements OnInit {
  @Input() player!: Player;
  ratings: any[] = [];
  season = localStorage.getItem('season');

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  public chartOptions2!: Partial<ChartOptions> | any;

  atributes1: number[] = [];
  atributes2: number[] = [];

  constructor() {
    this.chartsOptions1();
    this.chartsOptions2();
  }

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
  }

  getSeason() {
    let item = localStorage.getItem('season');
    let seasonNumber = Number(item);
    let seasonString = (seasonNumber + 1).toString();
    seasonString = seasonString.substring(2);
    return seasonNumber + '-' + seasonString;
  }

  chartsOptions1() {
    this.chartOptions = {
      series: [
        {
          name: 'Current',
          data: this.atributes1,
        },
      ],
      chart: {
        height: 190,
        type: 'radar',
        toolbar: {
          tools: {
            download: false,
          },
        },
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 0.1,
      },

      dataLabels: {
        enabled: true,
        style: {
          fontSize: '8px',
          fontWeight: 'bold',
        },
        background: {
          enabled: true,
          foreColor: '#fff',
          borderRadius: 5,
          padding: 4,
          opacity: 0.9,
          borderColor: '#fff',
        },
      },

      plotOptions: {
        radar: {
          size: 65,
        },
      },
      colors: ['#FF4560'],
      xaxis: {
        categories: ['INS', 'JPS', 'FTS', '3PS', 'HND', 'PAS', 'ORB', 'DRB'],
      },
      yaxis: {
        show: false,
      },
    };
  }

  chartsOptions2() {
    this.chartOptions2 = {
      series: [
        {
          name: 'Current',
          data: this.atributes2,
        },
      ],
      chart: {
        height: 190,
        type: 'radar',
        toolbar: {
          tools: {
            download: false,
          },
        },
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 0.1,
      },

      dataLabels: {
        enabled: true,
        style: {
          fontSize: '8px',
          fontWeight: 'bold',
        },
        background: {
          enabled: true,
          foreColor: '#fff',
          borderRadius: 5,
          padding: 4,
          opacity: 0.9,
          borderColor: '#fff',
        },
      },

      plotOptions: {
        radar: {
          size: 65,
        },
      },

      xaxis: {
        categories: ['PSD', 'PRD', 'STL', 'BLK', 'QKN', 'STR', 'JMP', 'STA'],
      },
      yaxis: {
        show: false,
      },
    };
  }
}
