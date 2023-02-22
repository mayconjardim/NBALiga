import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';

import { RotationListComponent } from './components/rotation-list/rotation-list.component';
import { RotationComponent } from './containers/rotation/rotation.component';

export const routes: Routes = [{ path: '', component: RotationComponent }];

@NgModule({
  declarations: [RotationComponent, RotationListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DragDropModule,
    DragDropModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
  ],
})
export class RotationModule {}
