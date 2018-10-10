import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ConichiTextareaComponent } from './textarea.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [ ConichiTextareaComponent ],
  declarations: [ ConichiTextareaComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ConichiTextareaModule { }
