import { Component, DoCheck } from '@angular/core';


@Component({
  selector: 'app-text',
  templateUrl: '../templates/text.html'
})

export class TextComponent implements DoCheck {
  public prefill: boolean;
  public data: string;
  
  ngDoCheck() {
    if (this.prefill) { this.data = 'Joe Bloggs'; }
  }
}
