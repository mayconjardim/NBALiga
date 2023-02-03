import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';

import { TeamHeaderComponent } from './components/team-header/team-header.component';
import { TeamRosterComponent } from './components/team-roster/team-roster.component';
import { TeamComponent } from './containers/team/team.component';
import { TeamContractsComponent } from './components/team-contracts/team-contracts.component';
import { TeamScheduleComponent } from './components/team-schedule/team-schedule.component';
import { TeamDraftpicksComponent } from './components/team-draftpicks/team-draftpicks.component';

export const routes: Routes = [{ path: '', component: TeamComponent }];

@NgModule({
  declarations: [
    TeamComponent,
    TeamHeaderComponent,
    TeamRosterComponent,
    TeamContractsComponent,
    TeamScheduleComponent,
    TeamDraftpicksComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatTabsModule,
    MatTableModule,
  ],
})
export class TeamModule {}
