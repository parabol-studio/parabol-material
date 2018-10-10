// Import Angular modules
import { Component, Input, OnChanges } from '@angular/core';


/*
* @Component: ConichiNotificationComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Conichi Material Currency input.
*/

@Component({
  selector: 'conichi-notification',
  templateUrl: './notification.html'
})

export class ConichiNotificationComponent implements OnChanges {
  @Input() data: Object;

  ngOnChanges() {
    if (this.data) {
      new Promise(function(resolve, reject) {
        setTimeout(func => resolve(null), 3000);
      }).then(value => this.data = value);
    }
  }
}
