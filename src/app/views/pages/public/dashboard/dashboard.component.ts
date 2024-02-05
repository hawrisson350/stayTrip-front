import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'st-dashboard',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  // formSearch = new FormBuilder().group({
  //   id: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10),]],
  //   name: ['', Validators.required],
  //   description: ['', Validators.required],
  //   logo: ['', Validators.required],
  //   date_release: ['', Validators.required],
  //   date_revision: ['', Validators.required],
  // });
}
