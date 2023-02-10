import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderPipe } from 'ngx-order-pipe';
import { Team } from 'src/app/features/team/models/team';

@Component({
  selector: 'finances-list',
  templateUrl: './finances-list.component.html',
  styleUrls: ['./finances-list.component.scss'],
})
export class FinancesListComponent {
  @Input() teams!: Team[];
  teamLogo = 'assets/images/logos/';
  svg = '.svg';
  order = 'totalSalary';

  displayedColumns: string[] = ['team', 'payroll', 'capSpace'];
}
