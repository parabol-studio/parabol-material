import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


// Import custom components
import { ConichiCheckboxComponent } from './checkbox.component';


@NgModule({
  imports: [ BrowserModule, AngularFontAwesomeModule ],
  exports: [ ConichiCheckboxComponent ],
  declarations: [ ConichiCheckboxComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ConichiCheckboxModule { }
