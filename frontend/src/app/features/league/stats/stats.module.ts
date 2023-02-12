import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from './containers/stats/stats.component';

export const routes: Routes = [{ path: '' }];

@NgModule({
  declarations: [
    StatsComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class StatsModule {}
