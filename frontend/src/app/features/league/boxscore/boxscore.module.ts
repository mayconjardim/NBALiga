import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxscoreComponent } from './containers/boxscore/boxscore.component';
import { BoxscoreTableComponent } from './components/boxscore-table/boxscore-table.component';

export const routes: Routes = [{ path: '', component: BoxscoreComponent }];

@NgModule({
  declarations: [BoxscoreComponent, BoxscoreTableComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BoxscoreModule {}
