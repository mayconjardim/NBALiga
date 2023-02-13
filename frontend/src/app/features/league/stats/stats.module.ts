import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './containers/stats/stats.component';
import { StatsListComponent } from './components/stats-list/stats-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { PlayoffsStatsComponent } from './containers/playoffs-stats/playoffs-stats.component';

export const routes: Routes = [{ path: '', component: StatsComponent }];

@NgModule({
  declarations: [StatsComponent, StatsListComponent, PlayoffsStatsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatSortModule,
  ],
})
export class StatsModule {}
