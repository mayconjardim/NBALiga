import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { FinancesComponent } from './containers/finances/finances.component';

export const routes: Routes = [{ path: '' }];

@NgModule({
  declarations: [
    FinancesComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MatTableModule],
})
export class FinancesModule {}
