import { Component, Input, OnInit } from '@angular/core';
import { Playoffs } from '../../models/playoffs';

@Component({
  selector: 'playoff-bracket',
  templateUrl: './playoff-bracket.component.html',
  styleUrls: ['./playoff-bracket.component.scss'],
})
export class PlayoffBracketComponent implements OnInit {
  @Input() playoffs!: Playoffs[];
  teamLogo = 'assets/images/logos/';

  firstRound: Playoffs[] = [];
  secondRound: Playoffs[] = [];
  conferenceFinals: Playoffs[] = [];
  finals: Playoffs[] = [];

  ngOnInit(): void {
    this.getRound();
  }

  getRound() {
    this.playoffs.forEach((x) => {
      if (x.seriesId <= 8) {
        this.firstRound.push(x);
      } else if (x.seriesId <= 12) {
        this.secondRound.push(x);
      } else if (x.seriesId <= 14) {
        this.conferenceFinals.push(x);
      } else {
        this.finals.push(x);
      }
    });
  }

  teamColors(team: string) {
    if (team == '76ers') {
      return 'Sixers';
    }
    return team;
  }
}
