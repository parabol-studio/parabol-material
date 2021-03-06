import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ParabolModalModule } from '../../modal/modal.module';

// Import custom components
import { ModalComponent } from '../components/modal.component';


@NgModule({
  imports: [
    BrowserModule,
    ParabolModalModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ ModalComponent ],
  declarations: [ ModalComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ModalModule { }
