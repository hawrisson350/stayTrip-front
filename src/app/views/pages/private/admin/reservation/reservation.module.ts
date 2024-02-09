import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReservationRoutingModule } from './reservation-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        ReservationRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ], 
    declarations: [
        FormComponent,
        ListComponent
    ],
    providers: [
        DatePipe,
    ]
})

export class ReservationModule { }