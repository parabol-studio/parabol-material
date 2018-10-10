// Import Angular modules
import { Component, Input, Output, EventEmitter, ChangeDetectorRef, AfterViewChecked } from '@angular/core';

/*
* @Component: ParabolModalComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Parabol Material Datepicker.
*/

@Component({
  selector: 'modal-footer',
  templateUrl: './modal.html'
})

export class ParabolModalFooterComponent implements AfterViewChecked {  
  @Output() model: EventEmitter<any> = new EventEmitter();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();
  @Input() label: string;
  @Input() type: string;
  
  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    if (!this.type) { this.type = 'confirm'; }
    if (!this.label) { this.label = 'OK'; }
    this.cd.detectChanges();
  }

  emit(action) {
    if (action === 'cancel') {
      this.model.emit(false);
      this.onCancel.emit();
    }
    
    if (action === 'submit') {
      this.model.emit(false);
      this.onConfirm.emit();
    }
  }
}
