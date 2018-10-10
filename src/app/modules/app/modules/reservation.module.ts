import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ConichiReservationModule } from '../../reservation/reservation.module';

// Import custom components
import { ReservationComponent } from '../components/reservation.component';


@NgModule({
  imports: [
    BrowserModule,
    ConichiReservationModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ ReservationComponent ],
  declarations: [ ReservationComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ReservationModule { }
