import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotationComponent } from './containers/rotation/rotation.component';

export const routes: Routes = [{ path: '' }];

@NgModule({
  declarations: [
    RotationComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RotationModule {}
