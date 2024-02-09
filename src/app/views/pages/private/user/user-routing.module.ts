import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from '@core/auth.guard';
import { NewReservationComponent } from './new-reservation/new-reservation.component';


const routes: Routes = [
    {
        path: '',
        canActivate: [authGuard],
        children: [
            { path: '', component: DashboardComponent },
            { path: 'new-reservation', component: NewReservationComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }