import { Schedule } from './../../models/schedule';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from '../../models/team';
import { TeamService } from './../../services/team.service';
import { ScheduleService } from 'src/app/features/schedule/services/schedule.service';

@Component({
  selector: 'team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  team!: Team;
  schedule!: Schedule[];

  constructor(
    private route: ActivatedRoute,
    private teamService: TeamService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.teamService.readOne(id).subscribe((team) => {
      this.team = team;
      this.getTeamSchedule();
    });
  }

  getTeamSchedule() {
    if (this.team.name != null) {
      this.scheduleService.readOne(this.team.name).subscribe((schedule) => {
        this.schedule = schedule;
      });
    }
  }
}
