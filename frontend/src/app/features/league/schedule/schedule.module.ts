import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './containers/schedule/schedule.component';
import { ScheduleListComponent } from './components/schedule-list/schedule-list.component';
import { MatCardModule } from '@angular/material/card';
import { NgxPaginationModule } from 'ngx-pagination';
export const routes: Routes = [{ path: '', component: ScheduleComponent }];

@NgModule({
  declarations: [ScheduleComponent, ScheduleListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    NgxPaginationModule,
  ],
})
export class ScheduleModule {}
