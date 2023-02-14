import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftLotteryComponent } from './containers/draft-lottery/draft-lottery.component';

export const routes: Routes = [{ path: '' }];

@NgModule({
  declarations: [
    DraftLotteryComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class OffseasonModule {}
