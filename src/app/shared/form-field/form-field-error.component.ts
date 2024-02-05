import { Component } from '@angular/core';

@Component({
  selector: 'st-error',
  template: `<ng-content></ng-content>`,
  host: {
    class: 'st-form-field__error'
  }
})
export class FormFieldErrorComponent { }
