// Import Angular modules
import { Component, Input, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef } from '@angular/core';


/*
* @Component: ConichiSelectButtonComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Conichi Material Select component.
*/

@Component({
  selector: 'conichi-select-button',
  templateUrl: './select-button.html'
})

export class ConichiSelectButtonComponent implements AfterViewChecked {
  public showDropdown: boolean;

  @Output() modelChange = new EventEmitter();
  @Input() placeholder: string;
  @Input() options: Array<any>;
  @Input() keys: string;
  @Input() model: string;
  
  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    if (!this.placeholder) { this.placeholder = 'Select'; }
    if (!this.keys) { this.keys = 'label, value'; }
    if (!this.options) {
      this.options = [
        { label: '0', value: 0 },
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
        { label: '8', value: 8 },
        { label: '9', value: 9 },
        { label: '10', value: 10 }
      ];
    }
    
    this.assignKeys();
    this.cd.detectChanges();
  }

  assignKeys() {
    const keys = this.keys.replace(/\s/g, '').split(',');

    this.options.forEach(function(option) {
      if (!option['label']) { option['label'] = option[keys[0]]; delete option[keys[0]]; }
      if (!option['value']) { option['value'] = option[keys[1]]; delete option[keys[1]]; }
    });
  }

  select(value) {
    this.model = value;
    this.modelChange.emit(this.model);
    this.showDropdown = false;
  }
}
