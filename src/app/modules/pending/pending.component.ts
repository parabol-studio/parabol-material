// Import Angular modules
import { Component, Input } from '@angular/core';


/*
* @Component: ParabolPendingComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
*/

@Component({
  selector: 'parabol-pending',
  templateUrl: './pending.html'
})

export class ParabolPendingComponent {
  @Input() pending: any;
}
