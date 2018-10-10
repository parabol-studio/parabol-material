import { Component, DoCheck } from '@angular/core';


@Component({
  selector: 'app-select-button',
  templateUrl: '../templates/select-button.html'
})

export class SelectButtonComponent implements DoCheck {
  public prefill: Object;
  public data: string;

  ngDoCheck() {
    if (this.prefill) { this.data = '2'; }
  }
}
