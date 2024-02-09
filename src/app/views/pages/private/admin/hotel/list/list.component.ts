import { Component, OnInit } from '@angular/core';
import { HandleTables } from '@core/handleTables';
import { Hotel } from '@data/schema/hotel.model';
import { HttpReqsService } from '@data/service/HttpReqs.service';
import { Status } from '@data/schema/utils.enum';
import { AlertService } from '@data/service/Alert.service';
import { ColombiaService } from '@data/service/Colombia.service';
import { first } from 'rxjs';


@Component({
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent extends HandleTables<Hotel> implements OnInit {

  StatusEnum: { [key: string]: string } = Status;

  constructor(
    private httpReqs: HttpReqsService,
    public colombiaService: ColombiaService,
    private alertService: AlertService) {
    super();
  }

  ngOnInit(): void {
    this.httpReqs.get('hotel').subscribe(data => {
      this.dataInTable = data;
    });
  }

  deleteItem(item: Hotel) {
    this.alertService.setAlert("Desea eliminar el hotel <b>[ " + item.name + " ]</b>");
    this.alertService.btnSelected.pipe(first()).subscribe(
      res => {
        if (res === 'acept') {
          this.httpReqs.delete('hotel', item.id).subscribe({
            error: (next: any) => {
              this.alertService.setAlert("Eliminación Exitosa");
              window.location.reload();
            }
          });
        }
      }
    );
  }

}

