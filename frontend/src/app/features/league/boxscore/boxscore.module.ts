import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoxscoreComponent } from './containers/boxscore/boxscore.component';

export const routes: Routes = [{ path: '' }];

@NgModule({
  declarations: [
    BoxscoreComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class BoxscoreModule {}
