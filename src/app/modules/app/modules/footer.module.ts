import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ConichiFooterModule } from '../../footer/footer.module';

// Import custom components
import { FooterComponent } from '../components/footer.component';


@NgModule({
  imports: [
    BrowserModule,
    ConichiFooterModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ FooterComponent ],
  declarations: [ FooterComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FooterModule { }
