// Import Angular modules
import { Component, Input } from '@angular/core';


/*
* @Component: ConichiFooterComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Conichi Material Loading.
*/

@Component({
  selector: 'conichi-footer',
  templateUrl: './footer.html'
})

export class ConichiFooterComponent {
  @Input() partner_logo: string;
  @Input() corporate_logo: string;
}
