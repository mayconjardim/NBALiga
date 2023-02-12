import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { PlayerService } from '../../services/player.service';
import { Player } from './../../models/player';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Player>();
  teamLogo = 'assets/images/logos/';

  displayedColumns = [
    'name',
    'playerTeam',
    'age',
    'positionName',
    'overallRating',
    'overallPotential',
    'salary',
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
    'quickness',
    'strength',
    'jumping',
    'stamina',
  ];

  constructor(
    private playerService: PlayerService,
    private _liveAnnouncer: LiveAnnouncer
  ) {}

  ngOnInit(): void {
    this.getPlayers();
  }

  getPlayers() {
    this.playerService.read().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data['content']);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  viewFilter(event: Event) {
    console.log(event);
    const filterValue = event.toString();
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPosition(position: number) {
    switch (position) {
      case 5:
        return 'PG';
      case 4:
        return 'SG';
      case 3:
        return 'SF';
      case 2:
        return 'PF';
      default:
        return 'C';
    }
  }

  ratingColors(rating: string) {
    switch (rating) {
      case 'A+':
        return 'assets/images/utils/aa.png';
      case 'A':
        return 'assets/images/utils/a.png';
      case 'B':
        return 'assets/images/utils/b.png';
      case 'C':
        return 'assets/images/utils/c.png';
      case 'D':
        return 'assets/images/utils/d.png';
      default:
        return 'assets/images/utils/f.png';
    }
  }
}
