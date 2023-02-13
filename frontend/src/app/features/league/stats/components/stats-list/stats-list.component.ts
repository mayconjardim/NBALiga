import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Stats } from '../../models/stats';
import { MatTableDataSource } from '@angular/material/table';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'stats-list',
  templateUrl: './stats-list.component.html',
  styleUrls: ['./stats-list.component.scss'],
})
export class StatsListComponent implements OnInit {
  @Input() stats!: Stats[];
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
    'tpg',
    'fgPct',
    'ftPct',
    'threePct',
    'plusMinusPg',
  ];

  dataSource = new MatTableDataSource<Stats>();
  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.stats);
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
