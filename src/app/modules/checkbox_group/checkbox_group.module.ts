import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Import custom components
import { ParabolCheckboxGroupComponent } from './checkbox_group.component';


@NgModule({
  imports: [
    BrowserModule,
    AngularFontAwesomeModule
  ],
  exports: [ ParabolCheckboxGroupComponent ],
  declarations: [ ParabolCheckboxGroupComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ParabolCheckboxGroupModule { }
