import { Component, Input, ViewChild } from '@angular/core';
import { PlayoffStats } from '../../models/playoffstats';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'playoffstats-list',
  templateUrl: './playoffstats-list.component.html',
  styleUrls: ['./playoffstats-list.component.scss'],
})
export class PlayoffstatsListComponent {
  @Input() offstats!: PlayoffStats[];

  teamLogo = 'assets/images/logos/';
  displayedColumns: string[] = [
    'playerName',
    'playerPosition',
    'team',
    'games',
    'mpg',
    'ppg',
    'rpg',
    'apg',
    'spg',
    'bpg',
    'topg',
    'fgPct',
    'ftPct',
    'threePct',
    'plusMinusPg',
  ];

  dataSource = new MatTableDataSource<PlayoffStats>();
  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.offstats);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
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

  removeLeading(numero: any) {
    if (numero > 0) {
      let num = numero;
      let text = num.toString();
      text = text.replace(/^[0]+/, '');
      text = text.slice(0, +4);
      return text;
    } else {
      return '-';
    }
  }
}
