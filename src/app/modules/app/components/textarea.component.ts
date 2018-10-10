import { Component, DoCheck } from '@angular/core';


@Component({
  selector: 'app-textarea',
  templateUrl: '../templates/textarea.html'
})

export class TextareaComponent implements DoCheck {
  public prefill: boolean;
  public data: string;

  ngDoCheck() {
    if (this.prefill) { this.data = 'Here is some text'; }
  }
}
