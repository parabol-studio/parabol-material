import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'conichi-textarea',
  templateUrl: './textarea.html'
})

export class ConichiTextareaComponent {
  @Output() modelChange = new EventEmitter();
  @Input() placeholder: string;
  @Input() model: string;
  
  @ViewChild('input') input: ElementRef;

  emit() { this.modelChange.emit(this.model); }
}
