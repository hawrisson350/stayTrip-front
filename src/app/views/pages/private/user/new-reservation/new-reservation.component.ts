import { CommonModule, DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Hotel } from '@data/schema/hotel.model';
import { EmergencyContact, Guest, Reservation } from '@data/schema/reservation.model';
import { Room } from '@data/schema/room.model';
import { User } from '@data/schema/user.model';
import { Gender, RoomType, Status, DocumentType } from '@data/schema/utils.enum';
import { AlertService } from '@data/service/Alert.service';
import { HttpReqsService } from '@data/service/HttpReqs.service';
import { SharedModule } from '@shared/shared.module';
import { first, map } from 'rxjs';
import { AddGuestComponent } from '../add-guest/add-guest.component';
import { CurrentUserService } from '@data/service/CurrentUser.service';
import { ColombiaService } from '@data/service/Colombia.service';

@Component({
  selector: 'st-new-reservation',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AddGuestComponent],
  templateUrl: './new-reservation.component.html',
  styleUrl: './new-reservation.component.scss'
})
export class NewReservationComponent implements OnInit {

  StatusEnum: { [key: string]: string } = Status;
  RoomTypeEnum: { [key: string]: string } = RoomType;
  genderEnum: { [key: string]: string } = Gender;
  documentTypeEnum: { [key: string]: string } = DocumentType;

  hotelSelected: Hotel | null = null;
  roomsList: Room[] = [];
  selectedRooms: any[] = [];
  guestList: Guest[] = [];
  avaliableRoomByAmountPersons = 0;
  selectedGuestForm: any = null;
  invalidGuest: any = null;
  emergencyName: string = "";
  emergencyPhone: string = "";
  userInfo: User | null = null;

  activeStep = 0;

  formReservation = new FormBuilder().group({
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    amountPersons: [null, Validators.required],
  });

  constructor(
    private httpReqs: HttpReqsService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private userService: CurrentUserService,
    public colombiaService: ColombiaService,
    private alertService: AlertService) {
    userService.user.subscribe(user => {
      this.userInfo = user;
    });
  }

  ngOnInit(): void {
    if (history.state.hotel) {
      this.hotelSelected = new Hotel(
        history.state.hotel.id,
        history.state.hotel.name,
        history.state.hotel.city,
        history.state.hotel.department,
        history.state.hotel.address,
        history.state.hotel.description,
        history.state.hotel.photo,
        history.state.hotel.status
      );

      this.httpReqs.get('room?&status=A&hotel=' + this.hotelSelected.id).subscribe(dataRoom => {
        dataRoom.map((room: any) => {
          const currentRoom = new Room(
            room.id,
            room.baseCost,
            room.taxes,
            room.type,
            room.location,
            room.amountPersons,
            room.description,
            room.status,
            room.available,
            room.hotel,
          );
          this.avaliableRoomByAmountPersons += room.amountPersons;
          this.roomsList.push(currentRoom);
        });

        this.cdr.detectChanges();
      });

    } else {
      this.router.navigate(['/home']);
    }
  }

  addReservationInfo() {
    if (!this.formReservation.valid) {
      this.formReservation.markAllAsTouched();
    } else {
      if (!(parseInt(this.formReservation.get('amountPersons')?.value + "")
        <= this.avaliableRoomByAmountPersons)) {

        this.alertService.setAlert(
          "<h2>Lo sentimos, No tenemos capacidad para las personas ingresadas </h2>"
        );

      } else {
        this.activeStep = 1;
      }
    }
  }

  addRoomItem(event: any, room: any) {
    if (event.target.checked) {
      this.selectedRooms.push(room)
    } else {
      this.selectedRooms.splice(this.selectedRooms.indexOf(room), 1);
    }
  }

  addRooms() {
    let selectedRoomsAmount = 0;
    if (!this.selectedRooms.length) {
      this.alertService.setAlert(
        "<h2>Selecciona al menos una habitación</h2>"
      );
    } else {
      const amountPersonsIngresed = parseInt(this.formReservation.get('amountPersons')?.value + "")
      this.selectedRooms.map((room) => {
        selectedRoomsAmount += room.amountPersons;
      });
      if (amountPersonsIngresed > selectedRoomsAmount) {
        this.alertService.setAlert(
          "<h2>La cantidad de personas deber ser menor a la capacidad de las habitaciones seleccionadas</h2>"
        );
      } else {
        this.guestList = [];
        this.invalidGuest = null;
        for (let i = 0; i < amountPersonsIngresed; i++) {
          this.guestList.push({
            name: '',
            lastname: '',
            birthday: '',
            gender: '',
            documentType: '',
            documentNumber: '',
            email: '',
            phone: ''
          });
        }
        this.activeStep = 2;
      }
    }
  }

  saveGuestInfo($event: any, index: any) {
    this.selectedGuestForm = null
    this.guestList[index] = $event;
    this.invalidGuest = null;
  }

  addGuests() {
    this.invalidGuest = null;
    this.guestList.map((guest, index) => {
      if (!(guest.email)) {
        this.invalidGuest = index;
      }
    });
    if (this.invalidGuest !== null) {
      this.alertService.setAlert(
        "<h2>Por favor ingrese los datos de todos los huéspedes</h2>"
      );
    } else {
      this.activeStep = 3;
    }
  }

  addEmergencyInfo() {
    if (!(this.emergencyName) || !(this.emergencyPhone)) {
      this.alertService.setAlert(
        "<h2>Por favor ingrese los datos del contacto de emergencia</h2>"
      );
    } else if (this.emergencyName && this.emergencyPhone) {
      this.activeStep = 4;
    }

  }

  sendDataReservation() {
    const roomListId: any[] = [];
    this.selectedRooms.map((room: any) => { roomListId.push(room.id); });
    const dataReservation = {
      startDate: this.formReservation.get('startDate')?.value ?? "",
      endDate: this.formReservation.get('endDate')?.value ?? "",
      status: 'A',
      user: this.userInfo?.id ?? '',
      rooms: roomListId ?? null,
      guests: this.guestList,
      emergencyContact: {
        "name": this.emergencyName,
        "phone": this.emergencyPhone
      } as EmergencyContact
    };

    this.httpReqs.post('reservation', dataReservation).subscribe({
      next: (next) => {
        this.alertService.setAlert(
          "<h1>Hemos creado exitosamente tu reserva</h1><p> Recibirás un correo notificando esta información</p>"
        );
        this.alertService.btnSelected.pipe(first()).subscribe(
          res => { this.router.navigate(['./home'], { relativeTo: this.activeRoute }); }
        );
      },     // nextHandler
      error: (error) => {
        this.alertService.setAlert(error.error)
      }
    });

  }

}
