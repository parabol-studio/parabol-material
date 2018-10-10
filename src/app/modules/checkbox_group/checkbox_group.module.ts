import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Import custom components
import { ConichiCheckboxGroupComponent } from './checkbox_group.component';


@NgModule({
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  exports: [ ConichiCheckboxGroupComponent ],
  declarations: [ ConichiCheckboxGroupComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ConichiCheckboxGroupModule { }
