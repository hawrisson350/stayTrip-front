import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationRoutingModule } from './reservation-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';


@NgModule({
    imports: [
        CommonModule,
        ReservationRoutingModule
    ], 
    declarations: [
        FormComponent,
        ListComponent
    ]
})

export class ReservationModule { }