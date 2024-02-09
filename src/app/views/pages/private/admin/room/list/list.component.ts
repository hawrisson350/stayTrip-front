import { Component, OnInit } from '@angular/core';
import { HandleTables } from '@core/handleTables';
import { Hotel } from '@data/schema/hotel.model';
import { Room } from '@data/schema/room.model';
import { Status } from '@data/schema/utils.enum';
import { AlertService } from '@data/service/Alert.service';
import { HttpReqsService } from '@data/service/HttpReqs.service';
import { first } from 'rxjs';

@Component({
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent extends HandleTables<Room> implements OnInit {

  StatusEnum: { [key: string]: string } = Status;
  hotelsList: Hotel[] = [];

  constructor(
    private httpReqs: HttpReqsService,
    private alertService: AlertService) {
    super();
  }

  ngOnInit(): void {
    this.httpReqs.get('room').subscribe(data => {
      this.dataInTable = data;
    });

    this.httpReqs.get('hotel').subscribe(data => {
      this.hotelsList = data;
    });
  }

  deleteItem(item: Room) {
    this.alertService.setAlert(
      "Desea eliminar la habitación <b>[ " + item.location + " en " + this.getHotelNameById(item.hotel) + " ]</b>"
      );
    this.alertService.btnSelected.pipe(first()).subscribe(
      res => {
        if (res === 'acept') {
          this.httpReqs.delete('room', item.id).subscribe({
            error: (next: any) => {
              this.alertService.setAlert("Eliminación Exitosa");
              window.location.reload();
            }
          });
        }
      }
    );
  }

  getHotelNameById(id: string): string {
    const findedHotel = this.hotelsList.find(item => item.id === id);
    return findedHotel ? findedHotel.name : "";
  }
}
