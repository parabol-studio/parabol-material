// Import Angular modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyPipe } from '@angular/common';

// Import custom components
import { ConichiCurrencyComponent } from './currency.component';

// Import custom modules
import { ConichiTextModule } from '../text/text.module';


/*
* @NgModule: ConichiCurrencyModule
*
* An NgModule is a class adorned with the @NgModule decorator function. @NgModule takes a metadata
* object that tells Angular how to compile and run module code. It identifies the module's own
* components, directives, and pipes, making some of them public so external components can use them.
* @NgModule may add service providers to the application dependency injectors.
*
* This module is used to construct the /campaign_manager/datepicker page.
*/

@NgModule({
  imports: [
    BrowserModule,
    ConichiTextModule
  ],
  exports: [ ConichiCurrencyComponent ],
  declarations: [ ConichiCurrencyComponent ],
  providers: [ CurrencyPipe ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ConichiCurrencyModule { }
