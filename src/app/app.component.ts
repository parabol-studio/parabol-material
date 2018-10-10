import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})

export class AppComponent {
  public selection: string;

  constructor() {    
    this.selection = 'text';
  }
}
