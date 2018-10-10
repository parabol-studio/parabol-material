import { Component } from '@angular/core';


@Component({
  selector: 'app-modal',
  templateUrl: '../templates/modal.html'
})

export class ModalComponent {
  public data: Object;
  public modal: Object;
  
  cl(event) { console.log(event); }
}
