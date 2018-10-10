import { Component, DoCheck } from '@angular/core';


@Component({
  selector: 'app-radio',
  templateUrl: '../templates/radio.html'
})

export class RadioComponent implements DoCheck {
  public prefill: boolean;
  public radio_options: Array<Object>;
  public data: string;

  constructor() {
    this.radio_options = [
      { label_alt: 'Option 1', value_alt: 'option_1' },
      { label_alt: 'Option 2', value_alt: 'option_2' },
      { label_alt: 'Option 3', value_alt: 'option_3' }
    ];
  }

  ngDoCheck() {
    if (this.prefill) { this.data = 'option_2'; }
  }
}
