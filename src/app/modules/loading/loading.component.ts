// Import Angular modules
import { Component, Input, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';


/*
* @Component: ParabolLoadingComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Parabol Material Loading.
*/

@Component({
  selector: 'parabol-loading',
  templateUrl: './loading.html',
  animations: [
    trigger('show', [
      state('true' , style({ 'display': 'block', 'pointer-events': 'auto' })), 
      state('false', style({ 'display': 'none', 'pointer-events': 'none' })),
      transition('0 => 1', animate('.1s')),
      transition('1 => 0', animate('.3s'))
    ])
  ]
})

export class ParabolLoadingComponent implements OnChanges {
  public loadingMessage: string;
  public show = false;

  @Input() loading: any;

  ngOnChanges() {
    this.show = (this.loading) ? true : false;
    this.loading = (typeof this.loading === 'string') ? this.loadingMessage : 'Loading...';
  }
}
