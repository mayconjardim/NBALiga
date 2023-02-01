import { TeamService } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  team!: Team;

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.teamService.readOne(id).subscribe((team) => {
      this.team = team;
    });
  }
}
