import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './containers/stats/stats.component';
import { StatsListComponent } from './components/stats-list/stats-list.component';

export const routes: Routes = [{ path: '', component: StatsComponent }];

@NgModule({
  declarations: [StatsComponent, StatsListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class StatsModule {}
