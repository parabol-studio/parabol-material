import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'parabol-textarea',
  templateUrl: './textarea.html'
})

export class ParabolTextareaComponent {
  @Output() modelChange = new EventEmitter();
  @Input() placeholder: string;
  @Input() model: string;
  
  @ViewChild('input') input: ElementRef;

  emit() { this.modelChange.emit(this.model); }
}
