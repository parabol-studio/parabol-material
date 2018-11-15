import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ParabolDisplayModule } from '../../display/display.module';

// Import custom components
import { DisplayComponent } from '../components/display.component';


@NgModule({
  imports: [
    BrowserModule,
    ParabolDisplayModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ DisplayComponent ],
  declarations: [ DisplayComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DisplayModule { }
