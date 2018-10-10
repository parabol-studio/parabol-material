import { Component, Input, Output, EventEmitter } from '@angular/core';


/*
* @Component: ConichiCheckboxComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Conichi Material Checkbox.
*/

@Component({
  selector: 'conichi-checkbox',
  templateUrl: './checkbox.html'
})
export class ConichiCheckboxComponent {
  @Output() modelChange = new EventEmitter();
  @Input() model: string;
  @Input() value: string;
  @Input() label: string;
  
  check() {
    if (!this.model) { this.model = this.value; } else { this.model = null; }
    this.modelChange.emit(this.model);
  }
}
