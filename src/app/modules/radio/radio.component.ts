import { Component, Input, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef } from '@angular/core';


/*
* @Component: ParabolRadioComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Parabol Material Checkbox.
*/

@Component({
  selector: 'parabol-radio',
  templateUrl: './radio.html'
})
export class ParabolRadioComponent implements AfterViewChecked {
  private formattedOptions: any;

  @Output() modelChange = new EventEmitter();
  @Input() model: string;
  @Input() options: any;
  @Input() keys: any;
  
  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    if (!this.keys) { this.keys = 'label, value'; }
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

  emit(option) {
    this.model = option;
    this.modelChange.emit(this.model);
  }
}
