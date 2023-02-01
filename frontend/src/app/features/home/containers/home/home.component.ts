import { Component, OnInit } from '@angular/core';

import { Champs } from '../../models/champs';
import { ChampsService } from '../../services/champs.service';
import { Standings } from './../../models/standings';
import { StandingsService } from './../../services/standings.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  east: Standings[] = [];
  west: Standings[] = [];
  champs: Champs[] = [];
  constructor(
    private standingsService: StandingsService,
    private champsService: ChampsService
  ) {}

  ngOnInit(): void {
    this.standingsService
      .read()
      .subscribe(
        (standings: Standings[]) => (
          (this.east = standings.filter((team) => team.conference == 'East')),
          (this.west = standings.filter((team) => team.conference == 'West'))
        )
      );

    this.champsService
      .read()
      .subscribe((champs: Champs[]) => (this.champs = champs));
  }
}
