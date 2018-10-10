import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ConichiTextComponent } from './text.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AngularFontAwesomeModule
  ],
  exports: [ ConichiTextComponent ],
  declarations: [ ConichiTextComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ConichiTextModule { }
