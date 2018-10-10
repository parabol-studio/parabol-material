import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ConichiReservationComponent } from './reservation.component';


@NgModule({
  imports: [ BrowserModule ],
  exports: [ ConichiReservationComponent ],
  declarations: [ ConichiReservationComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ConichiReservationModule { }
