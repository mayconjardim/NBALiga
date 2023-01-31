import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';

import { HomeStandingsComponent } from './components/home-standings/home-standings.component';
import { HomeComponent } from './containers/home/home.component';
import { HomeChampsComponent } from './components/home-champs/home-champs.component';

export const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, HomeStandingsComponent, HomeChampsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
  ],
})
export class HomeModule {}
