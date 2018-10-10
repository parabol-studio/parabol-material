import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ConichiProgressModule } from '../../progress/progress.module';

// Import custom components
import { ProgressComponent } from '../components/progress.component';


@NgModule({
  imports: [
    BrowserModule,
    ConichiProgressModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ ProgressComponent ],
  declarations: [ ProgressComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProgressModule { }
