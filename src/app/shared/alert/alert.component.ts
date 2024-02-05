import { Component } from '@angular/core';
import { AlertService } from '@data/service/Alert.service';

@Component({
  selector: '<st-alert>',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})

export class AlertComponent {
  constructor(public alertService: AlertService) { }

  sendEmit(selected:string){
    this.alertService.btnSelect(selected);
  }
}
