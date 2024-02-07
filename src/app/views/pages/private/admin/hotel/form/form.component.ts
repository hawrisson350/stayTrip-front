import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Hotel } from '@data/schema/hotel.model';
import { Room } from '@data/schema/room.model';
import { Colombia, Status } from '@data/schema/utils.enum';
import { AlertService } from '@data/service/Alert.service';
import { ColombiaService } from '@data/service/Colombia.service';
import { HttpReqsService } from '@data/service/HttpReqs.service';

@Component({
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {

  hotelToEdit: Hotel = new Hotel(0, '', '', 0, '', '', [], '', '');
  roomsToEdit: Room[] = [];
  StatusEnum: { [key: string]: string } = Status;
  Colombia:Colombia[] = [];

  formHotel = new FormBuilder().group({
    id: [''],
    name: ['', Validators.required],
    city: ['', Validators.required],
    department: ['', Validators.required],
    address: ['', Validators.required],
    description: ['', Validators.required],
    rooms: ['', Validators.required],
    photo: ['', Validators.required],
    status: ['', Validators.required],
  });

  constructor(
    private httpReqs: HttpReqsService,
    public colService: ColombiaService,
    private alertService: AlertService) { 
    }

  ngOnInit(): void {
    this.hotelToEdit = history.state;

    console.log(this.hotelToEdit);
    

    if (this.hotelToEdit?.id) {
      this.formHotel.patchValue({ ...this.hotelToEdit });

      if (this.hotelToEdit?.rooms.length) {
        this.hotelToEdit?.rooms.map((roomId) => {
          this.httpReqs.get('room?id='+roomId).subscribe(roomData => {
            const currentRoom = new Room(
              roomData[0].id,
              roomData[0].baseCost,
              roomData[0].taxes,
              roomData[0].type,
              roomData[0].location,
              roomData[0].amountPersons,
              roomData[0].description,
              roomData[0].status,
              roomData[0].available,
              roomData[0].hotel,
            );
            this.roomsToEdit.push(currentRoom);
            console.log(currentRoom);
            
          });
        });

      }
    }
  }

  sendDataHotel() {

  }

}
