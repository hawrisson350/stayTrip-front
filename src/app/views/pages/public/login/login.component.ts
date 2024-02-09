import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '@data/schema/user.model';
import { AlertService } from '@data/service/Alert.service';
import { CurrentUserService } from '@data/service/CurrentUser.service';
import { HttpReqsService } from '@data/service/HttpReqs.service';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'st-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor(
    private httpReqs: HttpReqsService,
    private router: Router,
    private currentUserService: CurrentUserService,
    private alertService: AlertService) {

    this.formLogin = new FormBuilder().group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    if (!this.formLogin.valid) {
      this.formLogin.markAllAsTouched();
      return;
    } else {
      this.httpReqs.get(
        'user?email=' + this.formLogin.get('email')?.value +
        '&password=' + this.formLogin.get('password')?.value
      ).subscribe(data => {
        if (data.length) {
          const currentUser = new User(
            data[0]?.id,
            data[0]?.name,
            data[0]?.lastname,
            data[0]?.birthday,
            data[0]?.gender,
            data[0]?.documentType,
            data[0]?.documentNumber,
            data[0]?.email,
            data[0]?.phone,
            data[0]?.password,
            data[0]?.role,
          );
          this.currentUserService.user = currentUser;

          if (data[0].role === 1) this.router.navigate(['/admin']);
          if (data[0].role === 2) this.router.navigate(['/dashboard']);
        } else {
          this.alertService.setAlert("Email o clave erronea, por favor verifique sus datos");
        }
      });
    }
  }
}
