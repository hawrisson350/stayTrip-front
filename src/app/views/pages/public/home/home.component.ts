import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
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
import { HotelsComponent } from '../hotels/hotels.component';

@Component({
  selector: 'st-home',
  standalone: true,
  imports: [
    HotelsComponent,
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends HandleTables<Hotel> implements OnInit {

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
    this.httpReqs.get('hotel').subscribe(data => {
      this.dataInTable = data;
    });
  }

  gotoRoom(item: any): void {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/user/', { state: item }]);
    } else {
      this.alertService.setAlert(
        "<h2>Para crear una reservación debes iniciar sesión.</h2> "
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
