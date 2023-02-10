import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicksComponent } from './containers/picks/picks.component';

export const routes: Routes = [{ path: '' }];

@NgModule({
  declarations: [
    PicksComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DraftPicksModule {}
