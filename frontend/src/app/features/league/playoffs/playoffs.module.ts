import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';

import { PlayoffBracketComponent } from './components/playoff-bracket/playoff-bracket.component';
import { PlayoffstatsListComponent } from './components/playoffstats-list/playoffstats-list.component';
import { PlayoffsComponent } from './containers/playoffs/playoffs.component';
import { PlayoffstatsComponent } from './containers/playoffstats/playoffstats.component';

export const routes: Routes = [
  { path: 'bracket', component: PlayoffsComponent },
  { path: 'stats', component: PlayoffstatsComponent },
];

@NgModule({
  declarations: [
    PlayoffstatsComponent,
    PlayoffstatsListComponent,
    PlayoffsComponent,
    PlayoffBracketComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class PlayoffsModule {}
