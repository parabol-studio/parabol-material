// Import Angular modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Import custom components
import { ParabolSliderComponent } from './slider.component';


/*
* @NgModule: ParabolSliderModule
*
* An NgModule is a class adorned with the @NgModule decorator function. @NgModule takes a metadata
* object that tells Angular how to compile and run module code. It identifies the module's own
* components, directives, and pipes, making some of them public so external components can use them.
* @NgModule may add service providers to the application dependency injectors.
*/

@NgModule({
  imports: [
    FormsModule,
    BrowserModule
  ],
  exports: [ ParabolSliderComponent ],
  declarations: [ ParabolSliderComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ParabolSliderModule { }
