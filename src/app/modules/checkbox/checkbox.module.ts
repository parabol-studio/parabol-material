import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


// Import custom components
import { ParabolCheckboxComponent } from './checkbox.component';


@NgModule({
  imports: [ BrowserModule, AngularFontAwesomeModule ],
  exports: [ ParabolCheckboxComponent ],
  declarations: [ ParabolCheckboxComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ParabolCheckboxModule { }
