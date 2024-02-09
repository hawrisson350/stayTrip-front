import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Gender, DocumentType } from '@data/schema/utils.enum';
import { HttpReqsService } from '@data/service/HttpReqs.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'st-sing-up',
  standalone: true,
  imports: [
    SharedModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './sing-up.component.html',
  styleUrl: './sing-up.component.scss'
})
export class SingUpComponent {
  genderEnum: { [key: string]: string } = Gender;
  documentTypeEnum: { [key: string]: string } = DocumentType;

  constructor(
    private httpReqs: HttpReqsService,
    private router: Router,
  ){}

  formSingUp = new FormBuilder().group({
    id: [{ disabled: true, value: '' }],
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    birthday: ['', Validators.required],
    gender: ['', Validators.required],
    documentType: ['', Validators.required],
    documentNumber: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
    role: [2, Validators.required],
  });

  singUp() {
    if (!this.formSingUp.valid) {
      this.formSingUp.markAllAsTouched();
      return;
    } else {
      const dataToSend = { ... this.formSingUp.value }
      delete dataToSend['confirmPassword'];

      this.httpReqs.post('user',dataToSend).subscribe(data => {
        if (data) {
          this.router.navigate(['/dashboard']);
        }
      });
    }
  }

}
