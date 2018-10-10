import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ParabolCheckboxModule } from '../../checkbox/checkbox.module';
import { ParabolRadioModule } from '../../radio/radio.module';

// Import custom components
import { RadioComponent } from '../components/radio.component';


@NgModule({
  imports: [
    BrowserModule,
    ParabolCheckboxModule,
    ParabolRadioModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ RadioComponent ],
  declarations: [ RadioComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RadioModule { }
