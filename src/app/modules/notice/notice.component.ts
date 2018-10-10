// Import Angular modules
import { Component, Input } from '@angular/core';


/*
* @Component: ConichiModalComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Conichi Material Datepicker.
*/

@Component({
  selector: 'conichi-notice',
  templateUrl: './notice.html'
})

export class ConichiNoticeComponent {  
  public display: boolean;
  @Input() text: string;
  
  constructor() { this.display = true; }
  
  close() { this.display = false; }
}
