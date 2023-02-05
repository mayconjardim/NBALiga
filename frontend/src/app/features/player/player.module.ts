import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerHeaderComponent } from './components/player-header/player-header.component';
import { PlayerComponent } from './containers/player/player.component';
import { MatCardModule } from '@angular/material/card';

export const routes: Routes = [{ path: '', component: PlayerComponent }];

@NgModule({
  declarations: [PlayerComponent, PlayerHeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule],
})
export class PlayerModule {}
