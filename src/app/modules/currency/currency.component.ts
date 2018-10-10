// Import Angular modules
import { Component, Input, Output, EventEmitter, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { CurrencyPipe } from '@angular/common';


/*
* @Component: ConichiCurrencyComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Conichi Material Currency input.
*/

@Component({
  selector: 'conichi-currency',
  templateUrl: './currency.html'
})

export class ConichiCurrencyComponent implements AfterViewChecked {
  public mask: Array<any>;

  @Output() modelChange = new EventEmitter();
  @Input() placeholder: string;
  @Input() currency: string;
  @Input() model: string;

  constructor(private currencypipe: CurrencyPipe, private cd: ChangeDetectorRef) { this.mask = [0, 0, 0]; }

  ngAfterViewChecked() {
    if (!this.currency) { this.currency = 'EUR'; }
    this.cd.detectChanges();
  }

  currencyMask(event) {
    if (this.mask.length !== 3 && this.mask[0] === 0) { this.mask.shift(); }
    if (event.key === 'Backspace') { this.mask.pop(); }
    if (this.mask.length < 3) { this.mask = [0, 0, 0]; }
    if (/^[0-9]$/.test(event.key)) { this.mask.push(event.key); }

    this.mask.splice(this.mask.indexOf('.'), 1);
    this.mask.splice(-2, 0, '.');

    this.model = this.currencypipe.transform(this.mask.join(''), this.currency, 'symbol', '1.2-2');

    this.modelChange.emit(this.model);
  }
}
