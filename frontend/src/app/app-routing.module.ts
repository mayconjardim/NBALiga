import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'teams/:id',
    loadChildren: () =>
      import('./features/team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'players/:id',
    loadChildren: () =>
      import('./features/player/player.module').then((m) => m.PlayerModule),
  },
  {
    path: 'schedule',
    loadChildren: () =>
      import('./features/league/schedule/schedule.module').then(
        (m) => m.ScheduleModule
      ),
  },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
