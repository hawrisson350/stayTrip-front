import { Routes } from '@angular/router';
import { DashboardComponent } from './views/pages/public/dashboard/dashboard.component';
import { LoginComponent } from './views/pages/public/login/login.component';
import { SingUpComponent } from './views/pages/public/sing-up/sing-up.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'sing-up', component: SingUpComponent },
    {
        path: 'admin',
        loadChildren: () =>
            import('./views/pages/private/admin/admin.module').then(
                (m) => m.AdminModule
            ),
    },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
