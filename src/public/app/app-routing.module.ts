import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [ AuthGuard ],
        component: DashboardComponent
    },
    {
        path: 'team',
        canLoad: [ AuthGuard ],
        loadChildren: './features/team/team.module#TeamModule'
    },
    {
        path: 'games',
        canLoad: [ AuthGuard ],
        loadChildren: './features/games/games.module#GamesModule'
    },
    {
        path: 'users',
        canLoad: [ AuthGuard ],
        loadChildren: './features/users/users.module#UsersModule'
    },
    {
        path: 'login',
        loadChildren: './features/login/login.module#LoginModule'
    },
    {
        path: 'logout',
        loadChildren: './features/login/login.module#LoginModule',
        data: { logout: true }
    },
    {
        path: 'register',
        loadChildren: './features/register/register.module#RegisterModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
