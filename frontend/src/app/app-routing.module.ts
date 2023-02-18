import { LoginComponent } from './private/login/components/login/login.component';
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
    path: 'players',
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
  {
    path: 'picks',
    loadChildren: () =>
      import('./features/league/picks/picks.module').then(
        (m) => m.DraftPicksModule
      ),
  },
  {
    path: 'finances',
    loadChildren: () =>
      import('./features/league/finances/finances.module').then(
        (m) => m.FinancesModule
      ),
  },

  {
    path: 'stats',
    loadChildren: () =>
      import('./features/league/stats/stats.module').then((m) => m.StatsModule),
  },

  {
    path: 'playoffs',
    loadChildren: () =>
      import('./features/league/playoffs/playoffs.module').then(
        (m) => m.PlayoffsModule
      ),
  },

  {
    path: 'offseason',
    loadChildren: () =>
      import('./features/league/offseason/offseason.module').then(
        (m) => m.OffseasonModule
      ),
  },

  {
    path: 'boxscore/:id',
    loadChildren: () =>
      import('./features/league/boxscore/boxscore.module').then(
        (m) => m.BoxscoreModule
      ),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./private/login/login.module').then((m) => m.LoginModule),
  },

  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
