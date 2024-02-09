import { Routes } from '@angular/router';
import { LoginComponent } from './views/pages/public/login/login.component';
import { SingUpComponent } from './views/pages/public/sing-up/sing-up.component';
import { DashboardComponent } from './views/pages/private/user/dashboard/dashboard.component';
import { HomeComponent } from './views/pages/public/home/home.component';
import { authGuard } from '@core/auth.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sing-up', component: SingUpComponent },
    {
        path: 'admin',
        loadChildren: () =>
            import('./views/pages/private/admin/admin.module').then(
                (m) => m.AdminModule
            ), 
    },
    {
        path: 'user',
        loadChildren: () =>
            import('./views/pages/private/user/user.module').then(
                (m) => m.UserModule
            ), 
    },
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
