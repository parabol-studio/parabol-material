import { Component, DoCheck } from '@angular/core';


@Component({
  selector: 'app-datepicker',
  templateUrl: '../templates/datepicker.html'
})

export class DatepickerComponent implements DoCheck {
  public prefill: any;
  public data: string;

  ngDoCheck() {
    if (this.prefill) { this.data = '2021-06-03'; }
    /*if (this.prefill) { this.data = '2021-06-03T00:00:00.000'; }*/
  }
}
