import { Component, DoCheck } from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: '../templates/select.html'
})

export class SelectComponent implements DoCheck {
  public prefill: Object;
  public select_options: Array<Object>;
  public data: string;

  constructor() {
    this.select_options = [
      { label_alt: 'Option 1', value_alt: 'option_1' },
      { label_alt: 'Option 2', value_alt: 'option_2' },
      { label_alt: 'Option 3', value_alt: 'option_3' }
    ];
  }

  ngDoCheck() {
    if (this.prefill) { this.data = 'option_1'; }
  }
}
