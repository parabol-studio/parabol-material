// Import Angular modules
import { Component, Input, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { I18n } from '../../services/interfaces.service';


/*
* @Component: ConichiLoadingComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Conichi Material Loading.
*/

@Component({
  selector: 'conichi-loading',
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

export class ConichiLoadingComponent implements OnChanges {
  public loadingMessage: string;
  public show = false;

  @Input() loading: any;
  @Input() i18n: I18n;

  ngOnChanges() {
    this.show = (this.loading) ? true : false;
    
    if (typeof this.loading === 'string') this.loadingMessage = this.loading;
    else if (this.i18n) this.loadingMessage = this.i18n.material_loading_message;
  }
}
