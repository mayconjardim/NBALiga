import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { FinancesComponent } from './containers/finances/finances.component';
import { FinancesListComponent } from './components/finances-list/finances-list.component';

export const routes: Routes = [{ path: '', component: FinancesComponent }];

@NgModule({
  declarations: [FinancesComponent, FinancesListComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatTableModule],
})
export class FinancesModule {}
