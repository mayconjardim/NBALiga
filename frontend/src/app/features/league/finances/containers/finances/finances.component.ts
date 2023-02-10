import { Component } from '@angular/core';
import { Team } from 'src/app/features/team/models/team';
import { TeamService } from 'src/app/features/team/services/team.service';

@Component({
  selector: 'finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.scss'],
})
export class FinancesComponent {
  teams!: Team[];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.read().subscribe((teams) => {
      this.teams = teams;
    });
  }
}
