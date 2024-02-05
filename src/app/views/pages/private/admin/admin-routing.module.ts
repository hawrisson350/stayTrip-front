import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: DashboardComponent },
            {
                path: 'hotel',
                loadChildren: () =>
                    import('./hotel/hotel.module').then(
                        (m) => m.HotelModule
                    ),
            },
            {
                path: 'reservation',
                loadChildren: () =>
                    import('./reservation/reservation.module').then(
                        (m) => m.ReservationModule
                    ),
            },
            {
                path: 'room',
                loadChildren: () =>
                    import('./room/room.module').then(
                        (m) => m.RoomModule
                    ),
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }