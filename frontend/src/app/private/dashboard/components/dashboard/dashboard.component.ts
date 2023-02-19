import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userName!: string;
  team!: string;

  ngOnInit(): void {
    this.userName = localStorage.getItem('userName')!;
    this.team = localStorage.getItem('team')!;
  }
}
