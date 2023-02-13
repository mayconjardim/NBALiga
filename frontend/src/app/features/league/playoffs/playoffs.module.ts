import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { PlayoffstatsComponent } from './containers/playoffstats/playoffstats.component';
import { PlayoffstatsListComponent } from './components/playoffstats-list/playoffstats-list.component';
import { PlayoffsComponent } from './containers/playoffs/playoffs.component';
import { PlayoffBracketComponent } from './components/playoff-bracket/playoff-bracket.component';

export const routes: Routes = [
  { path: '', component: PlayoffsComponent },
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
  ],
})
export class PlayoffsModule {}
