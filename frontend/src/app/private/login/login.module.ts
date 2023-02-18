import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [{ path: '' }];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
