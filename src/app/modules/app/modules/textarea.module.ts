import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ParabolCheckboxModule } from '../../checkbox/checkbox.module';
import { ParabolTextareaModule } from '../../textarea/textarea.module';

// Import custom components
import { TextareaComponent } from '../components/textarea.component';


@NgModule({
  imports: [
    BrowserModule,
    ParabolTextareaModule,
    ParabolCheckboxModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ TextareaComponent ],
  declarations: [ TextareaComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TextareaModule { }
