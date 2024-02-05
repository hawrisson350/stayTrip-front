import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { FormFieldErrorComponent } from './form-field-error.component';
import { FormFieldInputDirective } from './form-field-input.directive';
import { FormFieldLabelDirective } from './form-field-label.directive';



@NgModule({
  declarations: [
    FormFieldComponent,
    FormFieldErrorComponent,
    FormFieldInputDirective,
    FormFieldLabelDirective,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FormFieldComponent,
    FormFieldErrorComponent,
    FormFieldInputDirective,
    FormFieldLabelDirective,
  ]
})
export class FormFieldModule { }
