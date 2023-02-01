import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './containers/team/team.component';
import { TeamHeaderComponent } from './components/team-header/team-header.component';

export const routes: Routes = [{ path: '', component: TeamComponent }];

@NgModule({
  declarations: [TeamComponent, TeamHeaderComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TeamModule {}
