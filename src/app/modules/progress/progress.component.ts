// Import Angular modules
import { Component, Input, AfterViewChecked, ChangeDetectorRef } from '@angular/core';


/*
* @Component: ConichiProgressComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Conichi Material progress component.
*/

@Component({
  selector: 'conichi-progress',
  templateUrl: './progress.html'
})

export class ConichiProgressComponent implements AfterViewChecked {
  public progressObject: Array<Object>;

  @Input() progress: any;
  @Input() steps: any;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.assignValues();
    this.cd.detectChanges();
  }

  assignValues() {
    const progressObject = [];

    for (let i = 0; i < this.steps; i++) {
      let progressReached = false;
      if (i < this.progress) { progressReached = true; }
      progressObject.push({ value: i, progress: progressReached });
    }

    this.progressObject = progressObject;
  }
}
