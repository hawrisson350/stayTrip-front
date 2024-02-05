import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { ButtonsModule } from '../buttons/buttons.module';




@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
    ButtonsModule,
  ],
  exports: [AlertComponent],
})
export class AlertModule { }
