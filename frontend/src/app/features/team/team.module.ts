import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './containers/team/team.component';

export const routes: Routes = [{ path: '' }];

@NgModule({
  declarations: [
    TeamComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TeamModule {}
