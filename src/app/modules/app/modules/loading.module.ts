import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ConichiLoadingModule } from '../../loading/loading.module';

// Import custom components
import { LoadingComponent } from '../components/loading.component';


@NgModule({
  imports: [
    BrowserModule,
    ConichiLoadingModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ LoadingComponent ],
  declarations: [ LoadingComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LoadingModule { }
