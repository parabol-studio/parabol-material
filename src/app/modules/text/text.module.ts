import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ParabolTextComponent } from './text.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    AngularFontAwesomeModule
  ],
  exports: [ ParabolTextComponent ],
  declarations: [ ParabolTextComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ParabolTextModule { }
