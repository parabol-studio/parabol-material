import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import custom components
import { StyleguideComponent } from '../components/styleguide.component';


@NgModule({
  imports: [ BrowserModule ],
  exports: [ StyleguideComponent ],
  declarations: [ StyleguideComponent ]
})
export class StyleguideModule { }
