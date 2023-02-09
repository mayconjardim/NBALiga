import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './containers/schedule/schedule.component';

export const routes: Routes = [{ path: '' }];

@NgModule({
  declarations: [
    ScheduleComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ScheduleModule {}
