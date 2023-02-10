import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';

import { FinancesListComponent } from './components/finances-list/finances-list.component';
import { FinancesComponent } from './containers/finances/finances.component';

export const routes: Routes = [{ path: '', component: FinancesComponent }];

@NgModule({
  declarations: [FinancesComponent, FinancesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
    OrderModule,
  ],
})
export class FinancesModule {}
