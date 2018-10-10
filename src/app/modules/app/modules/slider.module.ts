import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ParabolCheckboxModule } from '../../checkbox/checkbox.module';
import { ParabolSliderModule } from '../../slider/slider.module';

// Import custom components
import { SliderComponent } from '../components/slider.component';


@NgModule({
  imports: [
    BrowserModule,
    ParabolCheckboxModule,
    ParabolSliderModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ SliderComponent ],
  declarations: [ SliderComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SliderModule { }
