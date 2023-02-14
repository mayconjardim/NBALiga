import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftLotteryComponent } from './containers/draft-lottery/draft-lottery.component';
import { DraftLotteryListComponent } from './components/draft-lottery-list/draft-lottery-list.component';

export const routes: Routes = [
  { path: 'lottery', component: DraftLotteryComponent },
];

@NgModule({
  declarations: [DraftLotteryComponent, DraftLotteryListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OffseasonModule {}
