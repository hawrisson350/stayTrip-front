import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomRoutingModule } from './room-routing.module';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';


@NgModule({
    imports: [
        CommonModule,
        RoomRoutingModule
    ],
    declarations: [
        FormComponent,
        ListComponent
    ]
})

export class RoomModule { }