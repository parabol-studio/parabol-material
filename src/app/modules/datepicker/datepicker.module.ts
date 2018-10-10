// Import Angular modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DatePipe } from '@angular/common';

// Import custom components
import { ConichiDatepickerComponent } from './datepicker.component';

// Import custom modules
import { ConichiTextModule } from '../text/text.module';
import { ConichiModalModule } from '../modal/modal.module';
import { ConichiSelectButtonModule } from '../select-button/select-button.module';


/*
* @NgModule: ConichiDatepickerModule
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
    FormsModule,
    BrowserModule,
    AngularFontAwesomeModule,
    ConichiTextModule,
    ConichiModalModule,
    ConichiSelectButtonModule
  ],
  exports: [ ConichiDatepickerComponent ],
  declarations: [ ConichiDatepickerComponent ],
  providers: [ DatePipe ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ConichiDatepickerModule { }
