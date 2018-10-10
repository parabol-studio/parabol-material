import { Component } from '@angular/core';


@Component({
  selector: 'app-pending',
  templateUrl: '../templates/pending.html'
})

export class PendingComponent {
  public pending: boolean;

  constructor() { this.pending = true; }
}
