import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hotel } from '@data/schema/hotel.model';
import { EmergencyContact, Reservation } from '@data/schema/reservation.model';
import { Room } from '@data/schema/room.model';
import { User } from '@data/schema/user.model';
import { RoomType, Status } from '@data/schema/utils.enum';
import { AlertService } from '@data/service/Alert.service';
import { HttpReqsService } from '@data/service/HttpReqs.service';
import { first } from 'rxjs';

@Component({
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  reservationToEdit: Reservation = new Reservation('', '', '', '', '', [], [], {} as EmergencyContact);
  StatusEnum: { [key: string]: string } = Status;
  RoomTypeEnum: { [key: string]: string } = RoomType;
  reservationHotel: Hotel = new Hotel('', '', '', 0, '', '', '', '');
  roomsList: Room[] = [];
  userReservation: User[] = [];

  formReservation = new FormBuilder().group({
    id: [{ disabled: true, value: '' }],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    status: ['A', Validators.required],
    user: ['', Validators.required],
    rooms: ['', Validators.required],
    guests: ['', Validators.required],
    emergencyContact: ['', Validators.required],
  });

  constructor(
    private httpReqs: HttpReqsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.reservationToEdit = history.state;

    if (this.reservationToEdit?.id) {
      this.formReservation.patchValue({
        id: this.reservationToEdit.id,
        startDate: new Date(this.reservationToEdit.startDate).toISOString().substr(0, 10),
        endDate: new Date(this.reservationToEdit.endDate).toISOString().substr(0, 10),
        status: this.reservationToEdit.status,
        user: this.reservationToEdit.user,
        rooms: this.reservationToEdit.rooms + "",
        guests: this.reservationToEdit.guests + "",
        emergencyContact: this.reservationToEdit.emergencyContact + "",
      });


      this.httpReqs.get('user?id=' + this.reservationToEdit.user).subscribe(data => {
        this.userReservation.push(new User(
          data[0].id,
          data[0].name,
          data[0].lastname,
          data[0].birthday,
          data[0].gender,
          data[0].documentType,
          data[0].documentNumber,
          data[0].email,
          data[0].phone,
          data[0].password,
          data[0].role,
        ));
      });

      this.reservationToEdit.rooms.map(roomItem => {
        this.httpReqs.get('room?id=' + roomItem).subscribe(dataRoom => {
          const currentRoom = new Room(
            dataRoom[0].id,
            dataRoom[0].baseCost,
            dataRoom[0].taxes,
            dataRoom[0].type,
            dataRoom[0].location,
            dataRoom[0].amountPersons,
            dataRoom[0].description,
            dataRoom[0].status,
            dataRoom[0].available,
            dataRoom[0].hotel,
          );
          this.roomsList.push(currentRoom);
          this.cdr.detectChanges();
        });
      });



    }
  }

  sendDataReservation() {
    if (!this.formReservation.valid) {
      this.formReservation.markAllAsTouched();
      return;
    } else {

      if (this.reservationToEdit?.id) {
        this.httpReqs.put('reservation/' + this.reservationToEdit?.id, this.formReservation.value).subscribe({
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
        this.httpReqs.post('reservation', this.formReservation.value).subscribe({
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
