
import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public show = false;
  public text = "";
  public btnSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  setAlert(
    text: string,
    show?: boolean,
  ) {
    this.text = text;
    this.show = show? show : true;
  }

  btnSelect(selected: string) {
    this.btnSelected.emit(selected);
    this.show = false;
  }

}
