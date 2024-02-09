import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HandleTables } from '@core/handleTables';
import { Hotel } from '@data/schema/hotel.model';
import { Status } from '@data/schema/utils.enum';
import { AlertService } from '@data/service/Alert.service';
import { ColombiaService } from '@data/service/Colombia.service';
import { CurrentUserService } from '@data/service/CurrentUser.service';
import { HttpReqsService } from '@data/service/HttpReqs.service';
import { SharedModule } from '@shared/shared.module';
import { first } from 'rxjs';

@Component({
  selector: 'st-hotels',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss'
})
export class HotelsComponent extends HandleTables<Hotel> implements OnInit {

  StatusEnum: { [key: string]: string } = Status;

  constructor(
    private httpReqs: HttpReqsService,
    private userService: CurrentUserService,
    private router: Router,
    public colombiaService: ColombiaService,
    private alertService: AlertService) {
    super();
  }

  ngOnInit(): void {
    this.httpReqs.get('hotel').subscribe((data: any) => {
      this.dataInTable = data;
      this.dataSource = data;
    });
  }

  gotoRoom(item: any): void {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/user/new-reservation'], { state: { hotel: item } });
    } else {
      this.alertService.setAlert(
        "<h1>Para crear una reservación debes iniciar sesión.</h1>"
      );
      this.alertService.btnSelected.pipe(first()).subscribe(
        res => {
          if (res === 'acept') {
            this.router.navigate(['/login']);
          }
        }
      );
    }
  }

}
