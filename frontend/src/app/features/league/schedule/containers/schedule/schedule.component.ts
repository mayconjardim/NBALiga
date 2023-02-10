import { Component, OnInit } from '@angular/core';
import { Schedule } from 'src/app/features/league/schedule/models/schedule';
import { ScheduleService } from 'src/app/features/league/schedule/services/schedule.service';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  schedule!: Schedule[];

  constructor(private sheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.sheduleService.read().subscribe((res) => {
      this.schedule = res;
    });
  }
}
