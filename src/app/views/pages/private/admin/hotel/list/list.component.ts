import { Component, OnInit } from '@angular/core';
import { HandleTables } from '@core/handleTables';
import { Hotel } from '@data/schema/hotel.model';
import { HttpReqsService } from '@data/service/HttpReqs.service';
import { Status } from '@data/schema/utils.enum';
import { AlertService } from '@data/service/Alert.service';


@Component({
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent extends HandleTables<Hotel> implements OnInit {

  StatusEnum: { [key: string]: string } = Status;

  constructor(private httpReqs: HttpReqsService,
    private alertService: AlertService) {
    super();
  }

  ngOnInit(): void {
    this.httpReqs.get('hotel').subscribe(data => {
      this.dataInTable = data;
    });

    this.alertService.setAlert("horal");
  }

}
