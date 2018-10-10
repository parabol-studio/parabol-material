// Import Angular modules
import { Component, Input, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef } from '@angular/core';


/*
* @Component: ConichiSliderComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Conichi Material Slider component.
*/

@Component({
  selector: 'conichi-slider',
  templateUrl: './slider.html'
})

export class ConichiSliderComponent implements AfterViewChecked {
  @Output() modelChange = new EventEmitter();
  @Input() placeholder: string;
  @Input() prefix: string;
  @Input() suffix: string;
  @Input() model: number;
  @Input() max: number;
  @Input() min: number;
  
  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    if (!this.max) { this.max = 100; }
    if (!this.min) { this.min = 0; }
    this.cd.detectChanges();
  }

  emit(event) {
    this.model = event.srcElement.value;
    this.modelChange.emit(this.model);
  }
}
