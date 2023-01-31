import { StandingsService } from './../../services/standings.service';
import { Standings } from './../../models/standings';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  east: Standings[] = [];
  west: Standings[] = [];
  constructor(private standingsService: StandingsService) {}

  ngOnInit(): void {
    this.standingsService
      .read()
      .subscribe(
        (standings: Standings[]) => (
          (this.east = standings.filter((team) => team.conference == 'East')),
          (this.west = standings.filter((team) => team.conference == 'West'))
        )
      );
  }
}
