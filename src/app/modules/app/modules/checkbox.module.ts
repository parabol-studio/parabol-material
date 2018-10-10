import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ConichiCheckboxModule } from '../../checkbox/checkbox.module';

// Import custom components
import { CheckboxComponent } from '../components/checkbox.component';


@NgModule({
  imports: [
    BrowserModule,
    ConichiCheckboxModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ CheckboxComponent ],
  declarations: [ CheckboxComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CheckboxModule { }
