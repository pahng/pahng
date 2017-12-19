import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'team', loadChildren: './features/team/team.module#TeamModule' },
  { path: 'games', loadChildren: './features/games/games.module#GamesModule' },
  { path: 'users', loadChildren: './features/users/users.module#UsersModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
