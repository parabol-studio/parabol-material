import { Component, Input, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef } from '@angular/core';

// Import npm modules
import { xor } from 'lodash';


/*
* @Component: ParabolCheckboxComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Parabol Material Checkbox.
*/

@Component({
  selector: 'parabol-checkbox-group',
  templateUrl: './checkbox_group.html'
})
export class ParabolCheckboxGroupComponent implements AfterViewChecked {
  @Output() modelChange = new EventEmitter();
  @Input() model: Array<any>;
  @Input() options: any;
  @Input() keys: string;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    if (!this.keys) { this.keys = 'label, value'; }
    this.assignKeys();
    this.cd.detectChanges();
  }

  checked(option) {
    if (this.model && this.model.indexOf(option) > -1) { return true; }
  }

  assignKeys() {
    const keys = this.keys.replace(/\s/g, '').split(',');

    this.options.forEach(function(option) {
      if (!option['label']) { option['label'] = option[keys[0]]; delete option[keys[0]]; }
      if (!option['value']) { option['value'] = option[keys[1]]; delete option[keys[1]]; }
    });
  }

  toggleValue(value) {
    this.model = xor(this.model, [ value ]);
    this.modelChange.emit(this.model);
  }
}
