import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';

import { TeamHeaderComponent } from './components/team-header/team-header.component';
import { TeamComponent } from './containers/team/team.component';

export const routes: Routes = [{ path: '', component: TeamComponent }];

@NgModule({
  declarations: [TeamComponent, TeamHeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule],
})
export class TeamModule {}
