import { Component, OnInit } from '@angular/core';
import { HandleTables } from '@core/handleTables';
import { Reservation } from '@data/schema/reservation.model';
import { User } from '@data/schema/user.model';
import { Status } from '@data/schema/utils.enum';
import { AlertService } from '@data/service/Alert.service';
import { ColombiaService } from '@data/service/Colombia.service';
import { HttpReqsService } from '@data/service/HttpReqs.service';

@Component({
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent extends HandleTables<Reservation> implements OnInit {

  StatusEnum: { [key: string]: string } = Status;
  usersList: User[] = [];

  constructor(
    private httpReqs: HttpReqsService,
    public colombiaService: ColombiaService,
    private alertService: AlertService) {
    super();
  }

  ngOnInit(): void {
    this.httpReqs.get('reservation').subscribe(data => {
      this.dataInTable = data;
    });

    this.httpReqs.get('user').subscribe(data => {
      this.usersList = data;
    });
  }

  getUserNameById(id: string): string {
    const findedUser = this.usersList.find(item => item.id === id);
    return findedUser ? findedUser.name : "";
  }

}
