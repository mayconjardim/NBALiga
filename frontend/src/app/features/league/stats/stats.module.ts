import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';

import { StatsListComponent } from './components/stats-list/stats-list.component';

import { StatsComponent } from './containers/stats/stats.component';

export const routes: Routes = [{ path: '', component: StatsComponent }];

@NgModule({
  declarations: [StatsComponent, StatsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatSortModule,
  ],
})
export class StatsModule {}
