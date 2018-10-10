import { Component, DoCheck } from '@angular/core';


@Component({
  selector: 'app-slider',
  templateUrl: '../templates/slider.html'
})

export class SliderComponent implements DoCheck {
  public prefill: boolean;
  public data: string;
  
  constructor() { this.data = '0'; }
  
  ngDoCheck() {
    if (this.prefill) { this.data = '30'; }
  }
}
