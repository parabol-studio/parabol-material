import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom components
import { SidebarComponent } from '../components/sidebar.component';


@NgModule({
  imports: [
    BrowserModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ SidebarComponent ],
  declarations: [ SidebarComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SidebarModule { }
