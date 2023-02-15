import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';

import { BoxscoreTableComponent } from './components/boxscore-table/boxscore-table.component';
import { BoxscoreComponent } from './containers/boxscore/boxscore.component';
import { MatTabsModule } from '@angular/material/tabs';

export const routes: Routes = [{ path: '', component: BoxscoreComponent }];

@NgModule({
  declarations: [BoxscoreComponent, BoxscoreTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatTableModule,
  ],
})
export class BoxscoreModule {}
