import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ParabolPendingModule } from '../../pending/pending.module';

// Import custom components
import { PendingComponent } from '../components/pending.component';


@NgModule({
  imports: [
    BrowserModule,
    ParabolPendingModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ PendingComponent ],
  declarations: [ PendingComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PendingModule { }
