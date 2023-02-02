import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { TeamHeaderComponent } from './components/team-header/team-header.component';
import { TeamComponent } from './containers/team/team.component';
import { TeamRosterComponent } from './components/team-roster/team-roster.component';

export const routes: Routes = [{ path: '', component: TeamComponent }];

@NgModule({
  declarations: [TeamComponent, TeamHeaderComponent, TeamRosterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatTabsModule,
    MatTableModule,
  ],
})
export class TeamModule {}
