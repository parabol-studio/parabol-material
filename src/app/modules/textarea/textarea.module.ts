import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ParabolTextareaComponent } from './textarea.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [ ParabolTextareaComponent ],
  declarations: [ ParabolTextareaComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ParabolTextareaModule { }
