import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ConichiCheckboxModule } from '../../checkbox/checkbox.module';
import { ConichiCurrencyModule } from '../../currency/currency.module';

// Import custom components
import { CurrencyComponent } from '../components/currency.component';


@NgModule({
  imports: [
    BrowserModule,
    ConichiCheckboxModule,
    ConichiCurrencyModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ CurrencyComponent ],
  declarations: [ CurrencyComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CurrencyModule { }
