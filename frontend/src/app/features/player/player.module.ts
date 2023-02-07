import { MatIconModule } from '@angular/material/icon';
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
import { MatExpansionModule } from '@angular/material/expansion';
import { PlayerAwardsComponent } from './components/player-awards/player-awards.component';

export const routes: Routes = [{ path: '', component: PlayerComponent }];

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerHeaderComponent,
    PlayerRatingsComponent,
    PlayerStatsComponent,
    PlayerAwardsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatTableModule,
    MatExpansionModule,
    NgApexchartsModule,
  ],
})
export class PlayerModule {}
