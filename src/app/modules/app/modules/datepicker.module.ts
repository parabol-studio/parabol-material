import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ParabolCheckboxModule } from '../../checkbox/checkbox.module';
import { ParabolDatepickerModule } from '../../datepicker/datepicker.module';

// Import custom components
import { DatepickerComponent } from '../components/datepicker.component';


@NgModule({
  imports: [
    BrowserModule,
    ParabolCheckboxModule,
    ParabolDatepickerModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ DatepickerComponent ],
  declarations: [ DatepickerComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DatepickerModule { }
