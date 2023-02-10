import { Schedule } from 'src/app/features/league/schedule/models/schedule';
import { ScheduleService } from 'src/app/features/league/schedule/services/schedule.service';
import { Component, OnInit } from '@angular/core';
import { SchedulePaged } from '../../models/schedulePaged';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  schedule!: Schedule[];

  constructor(private sheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.sheduleService
      .read()
      .subscribe((shedule: SchedulePaged) => (this.schedule = shedule.content));
  }
}
