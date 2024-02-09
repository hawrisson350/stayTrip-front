import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '@data/schema/hotel.model';
import { Room } from '@data/schema/room.model';
import { Colombia, Status } from '@data/schema/utils.enum';
import { AlertService } from '@data/service/Alert.service';
import { ColombiaService } from '@data/service/Colombia.service';
import { HttpReqsService } from '@data/service/HttpReqs.service';
import { first } from 'rxjs';

@Component({
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  hotelToEdit: Hotel = new Hotel('', '', '', 0, '', '', '', '');
  roomsToEdit: Room[] = [];
  StatusEnum: { [key: string]: string } = Status;
  Colombia: Colombia[] = [];

  formHotel = new FormBuilder().group({
    id: [{ disabled: true, value: 0 }],
    name: ['', Validators.required],
    city: ['', Validators.required],
    department: ['', Validators.required],
    address: ['', Validators.required],
    description: ['', Validators.required],
    photo: ['', Validators.required],
    status: ['A', Validators.required],
  });

  constructor(
    private httpReqs: HttpReqsService,
    public colService: ColombiaService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.hotelToEdit = history.state;

    if (this.hotelToEdit?.id) {
      this.formHotel.patchValue({ ...this.hotelToEdit });
      this.httpReqs.get('room?hotel=' + this.hotelToEdit.id).subscribe(roomData => {
        roomData.map((item: Room) => {
          const currentRoom = new Room(
            item.id,
            item.baseCost,
            item.taxes,
            item.type,
            item.location,
            item.amountPersons,
            item.description,
            item.status,
            item.available,
            item.hotel,
          );
          this.roomsToEdit.push(currentRoom);
        });
      });

    }
  }

  sendDataHotel() {
    if (!this.formHotel.valid) {
      this.formHotel.markAllAsTouched();
      return;
    } else {

      if (this.hotelToEdit?.id) {
        this.httpReqs.put('hotel/' + this.hotelToEdit?.id, this.formHotel.value).subscribe({
          next: (next) => {
            this.alertService.setAlert("Actualización Exitosa");
            this.alertService.btnSelected.pipe(first()).subscribe(
              res => { this.router.navigate(['../'], { relativeTo: this.activeRoute }); }
            );
          },     // nextHandler
          error: (error) => {
            this.alertService.setAlert(error.error)
          }
        });
      } else {
        this.httpReqs.post('hotel', this.formHotel.value).subscribe({
          next: (next) => {
            this.alertService.setAlert("Creación Exitosa");
            this.alertService.btnSelected.pipe(first()).subscribe(
              res => { this.router.navigate(['../'], { relativeTo: this.activeRoute }); }
            );
          },     // nextHandler
          error: (error) => {
            this.alertService.setAlert(error.error)
          }
        });
      }

    }
  }

}
