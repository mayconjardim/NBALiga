import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';

import { PlayerHeaderComponent } from './components/player-header/player-header.component';
import { PlayerRatingsComponent } from './components/player-ratings/player-ratings.component';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';
import { PlayerComponent } from './containers/player/player.component';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes: Routes = [{ path: '', component: PlayerComponent }];

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerHeaderComponent,
    PlayerRatingsComponent,
    PlayerStatsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatTableModule,
    NgApexchartsModule,
  ],
})
export class PlayerModule {}
