import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ParabolCheckboxModule } from '../../checkbox/checkbox.module';
import { ParabolSelectButtonModule } from '../../select-button/select-button.module';

// Import custom components
import { SelectButtonComponent } from '../components/select-button.component';


@NgModule({
  imports: [
    BrowserModule,
    ParabolCheckboxModule,
    ParabolSelectButtonModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ SelectButtonComponent ],
  declarations: [ SelectButtonComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SelectButtonModule { }
