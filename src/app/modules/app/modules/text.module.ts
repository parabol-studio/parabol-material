import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ConichiCheckboxModule } from '../../checkbox/checkbox.module';
import { ConichiTextModule } from '../../text/text.module';

// Import custom components
import { TextComponent } from '../components/text.component';


@NgModule({
  imports: [
    BrowserModule,
    ConichiCheckboxModule,
    ConichiTextModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ TextComponent ],
  declarations: [ TextComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TextModule { }
