import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlayerHeaderComponent } from './components/player-header/player-header.component';
import { PlayerComponent } from './containers/player/player.component';

export const routes: Routes = [{ path: '', component: PlayerComponent }];

@NgModule({
  declarations: [PlayerComponent, PlayerHeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class PlayerModule {}
