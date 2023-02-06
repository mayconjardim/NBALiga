import { Component, Input, OnInit } from '@angular/core';
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
}
