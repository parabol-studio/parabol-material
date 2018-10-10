import { Component, DoCheck } from '@angular/core';


@Component({
  selector: 'app-checkbox-group',
  templateUrl: '../templates/checkbox-group.html'
})

export class CheckboxGroupComponent implements DoCheck {
  public prefill: any;
  public checkbox_options: Array<Object>;
  public data: Array<string>;
  
  constructor() {
    this.checkbox_options = [
      { label_alt: 'Option 1', value_alt: 'option_1' },
      { label_alt: 'Option 2', value_alt: 'option_2' },
      { label_alt: 'Option 3', value_alt: 'option_3' }
    ];
  }
  
  ngDoCheck() {
    if (this.prefill) { this.data = ['option_1', 'option_2']; }
  }
}
