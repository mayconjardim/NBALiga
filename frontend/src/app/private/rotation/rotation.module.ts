import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotationComponent } from './containers/rotation/rotation.component';
import { RotationListComponent } from './components/rotation-list/rotation-list.component';

export const routes: Routes = [{ path: '' }];

@NgModule({
  declarations: [
    RotationComponent,
    RotationListComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RotationModule {}
