import { Component, ContentChild, ViewEncapsulation } from '@angular/core';
import { FormFieldErrorComponent } from './form-field-error.component';

@Component({
  selector: 'st-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'st-form-field',
    '[class.st-form-field--error]': 'showError',
    '[class.st-form-field--focused]': '$isFocused',
    '[class.st-form-field--disabled]': '$isDisabled',
    '[class.st-form-field--selected]': '$isSelected',
    '[class.st-form-field--touched]': '$isTouched',
  }
})
export class FormFieldComponent {

  private hasError: boolean = false;
  private isFocused: boolean = false;
  private isDisabled: boolean = false;
  private isSelected: boolean = false;
  private isRequired: boolean = false;
  private isTouched: boolean = false;

  @ContentChild(FormFieldErrorComponent, { static: false }) error!: FormFieldErrorComponent;

  constructor() { }

  get showError() {
    if (this.isDisabled) {
      return false;
    } else {
      return this.isTouched && this.hasError;
    }
  }

  /**
   * Getter $hasError
   * @return {boolean }
   */
  public get $hasError(): boolean {
    return this.hasError;
  }

  /**
   * Getter $isFocused
   * @return {boolean }
   */
  public get $isFocused(): boolean {
    return this.isFocused;
  }

  /**
   * Getter $isDisabled
   * @return {boolean }
   */
  public get $isDisabled(): boolean {
    return this.isDisabled;
  }

  /**
   * Getter $isSelected
   * @return {boolean }
   */
  public get $isSelected(): boolean {
    return this.isSelected;
  }

  /**
 * Getter $isRequired
 * @return {boolean }
 */
  public get $isRequired(): boolean {
    return this.isRequired;
  }

  /**
 * Getter $isTouched
 * @return {boolean }
 */
  public get $isTouched(): boolean {
    return this.isTouched;
  }

  /**
 * Setter $hasError
 * @param {boolean } value
 */
  public set $hasError(value: boolean) {
    this.hasError = value;
  }

  /**
   * Setter $isFocused
   * @param {boolean } value
   */
  public set $isFocused(value: boolean) {
    this.isFocused = value;
  }

  /**
   * Setter $isDisabled
   * @param {boolean } value
   */
  public set $isDisabled(value: boolean) {
    this.isDisabled = value;
  }

  /**
   * Setter $isSelected
   * @param {boolean } value
   */
  public set $isSelected(value: boolean) {
    this.isSelected = value;
  }

  /**
 * Setter $isRequired
 * @param {boolean } value
 */
  public set $isRequired(value: boolean) {
    this.isRequired = value;
  }

  /**
* Setter isTouched
* @param {boolean } value
*/
  public set $isTouched(value: boolean) {
    this.isTouched = value;
  }

}
