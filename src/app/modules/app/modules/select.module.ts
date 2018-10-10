import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ParabolCheckboxModule } from '../../checkbox/checkbox.module';
import { ParabolSelectModule } from '../../select/select.module';

// Import custom components
import { SelectComponent } from '../components/select.component';


@NgModule({
  imports: [
    BrowserModule,
    ParabolCheckboxModule,
    ParabolSelectModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ SelectComponent ],
  declarations: [ SelectComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SelectModule { }
