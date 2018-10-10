// Import Angular modules
import { Component, Input, Output, EventEmitter, HostListener, OnChanges } from '@angular/core';


/*
* @Component: ParabolSelectComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Parabol Material Select component.
*/

@Component({
  selector: 'parabol-select',
  templateUrl: './select.html'
})

export class ParabolSelectComponent implements OnChanges {
  public openDropdown: boolean;
  public displayValue: any;

  @Output() modelChange = new EventEmitter();
  @Input() placeholder: string;
  @Input() options: Array<any>;
  @Input() keys: string;
  @Input() model: string;

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    this.openDropdown = false;
  }

  ngOnChanges() {
    if (!this.keys) this.keys = 'label, value';
    if (this.options) this.assignKeys();
    if (this.model) this.reflectModel();
  }

  reflectModel() {
    const model = this.model;
    let displayValue;

    this.options.forEach((option) => {
      if (option.value === model) displayValue = option.label;
    });

    this.displayValue = displayValue;
  }

  focusInput($event) {
    this.openDropdown = true;
    $event.preventDefault();
    $event.stopPropagation();
  }

  assignKeys() {
    const keys = this.keys.replace(/\s/g, '').split(',');

    this.options.forEach((option) => {
      if (!option['label']) { option['label'] = option[keys[0]]; delete option[keys[0]]; }
      if (!option['value']) { option['value'] = option[keys[1]]; delete option[keys[1]]; }
    });
  }

  select(option) {
    this.displayValue = option.label;
    this.model = option.value;
    this.openDropdown = false;
    this.modelChange.emit(this.model);
  }
}
