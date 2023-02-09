import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';

export const routes: Routes = [{ path: '', component: ScheduleComponent }];

@NgModule({
  declarations: [ScheduleComponent, ScheduleListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ScheduleModule {}
