import { Schedule } from 'src/app/features/league/schedule/models/schedule';
import { ScheduleService } from 'src/app/features/league/schedule/services/schedule.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  shedule!: Schedule[];

  constructor(private sheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.sheduleService
      .read()
      .subscribe((shedule: Schedule[]) => (this.shedule = shedule));
  }
}
