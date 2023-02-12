import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatInputModule } from '@angular/material/input';
import { PlayerAwardsComponent } from './components/player-awards/player-awards.component';
import { PlayerHeaderComponent } from './components/player-header/player-header.component';
import { PlayerRatingsComponent } from './components/player-ratings/player-ratings.component';
import { PlayerStatsComponent } from './components/player-stats/player-stats.component';
import { PlayerListComponent } from './containers/player-list/player-list.component';
import { PlayerComponent } from './containers/player/player.component';
import { MatSelectModule } from '@angular/material/select';
export const routes: Routes = [
  { path: '', component: PlayerListComponent },
  { path: ':id', component: PlayerComponent },
];

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerHeaderComponent,
    PlayerRatingsComponent,
    PlayerStatsComponent,
    PlayerAwardsComponent,
    PlayerListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatTableModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    NgApexchartsModule,
    MatSelectModule,
  ],
})
export class PlayerModule {}
