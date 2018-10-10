// Import Angular modules
import { Component, Input } from '@angular/core';


/*
* @Component: ConichiPendingComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
*/

@Component({
  selector: 'conichi-pending',
  templateUrl: './pending.html'
})

export class ConichiPendingComponent {
  @Input() pending: any;
}
