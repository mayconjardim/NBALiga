import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicksComponent } from './containers/picks/picks.component';
import { PicksListComponent } from './components/picks-list/picks-list.component';

export const routes: Routes = [{ path: '', component: PicksComponent }];

@NgModule({
  declarations: [PicksComponent, PicksListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DraftPicksModule {}
