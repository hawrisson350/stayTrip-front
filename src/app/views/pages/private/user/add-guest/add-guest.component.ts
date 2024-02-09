import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Guest } from '@data/schema/reservation.model';
import { Gender, DocumentType } from '@data/schema/utils.enum';
import { HttpReqsService } from '@data/service/HttpReqs.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'st-add-guest',
  standalone: true,
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-guest.component.html',
  styleUrl: './add-guest.component.scss'
})
export class AddGuestComponent {

  genderEnum: { [key: string]: string } = Gender;
  documentTypeEnum: { [key: string]: string } = DocumentType;
  @Input() guest: Guest | null = null;
  @Output() currentGuest = new EventEmitter<any>();

  formGuest = new FormBuilder().group({
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    birthday: ['', Validators.required],
    gender: ['', Validators.required],
    documentType: ['', Validators.required],
    documentNumber: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });

  constructor(
    private httpReqs: HttpReqsService,
    private router: Router,
  ) {
    this.formGuest.patchValue({
      name: this.guest?.name,
      lastname: this.guest?.lastname,
      birthday: this.guest?.birthday,
      gender: this.guest?.gender,
      documentType: this.guest?.documentType,
      documentNumber: this.guest?.documentNumber,
      email: this.guest?.email,
      phone: this.guest?.phone,
    });

  }


  saveGuest() {
    if (!this.formGuest.valid) {
      this.formGuest.markAllAsTouched();
      return;
    } else {
      this.currentGuest.emit(this.formGuest.value);
    }
  }
}
