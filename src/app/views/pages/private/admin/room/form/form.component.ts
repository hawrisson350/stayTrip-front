import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '@data/schema/hotel.model';
import { Room } from '@data/schema/room.model';
import { Status, RoomType } from '@data/schema/utils.enum';
import { AlertService } from '@data/service/Alert.service';
import { HttpReqsService } from '@data/service/HttpReqs.service';
import { first } from 'rxjs';

@Component({
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  roomToEdit: Room = new Room('', 0, 0, '', '', 0, '', '', true, '');
  StatusEnum: { [key: string]: string } = Status;
  RoomTypeEnum: { [key: string]: string } = RoomType;
  hotelsList: Hotel[] = [];


  formRoom = new FormBuilder().group({
    id: [{ disabled: true, value: 0 }],
    baseCost: [0, Validators.required],
    taxes: [0, Validators.required],
    type: ['', Validators.required],
    location: ['', Validators.required],
    amountPersons: [0, Validators.required],
    description: ['', Validators.required],
    status: ['A', Validators.required],
    available: [true, Validators.required],
    hotel: ['', Validators.required],
  });

  constructor(
    private httpReqs: HttpReqsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.roomToEdit = history.state;

    this.httpReqs.get('hotel').subscribe(data => {
      this.hotelsList = data;
    });

    if (this.roomToEdit?.id) {
      this.formRoom.patchValue({ ...this.roomToEdit });
    }
  }

  sendDataRoom() {
    if (!this.formRoom.valid) {
      this.formRoom.markAllAsTouched();
      return;
    } else {

      if (this.roomToEdit?.id) {
        this.httpReqs.put('room/' + this.roomToEdit?.id, this.formRoom.value).subscribe({
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
        this.httpReqs.post('room', this.formRoom.value).subscribe({
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
