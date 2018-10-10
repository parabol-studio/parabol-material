// Import Angular modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Import custom components
import { ParabolRadioComponent } from './radio.component';



/*
* @NgModule: ParabolRadioModule
*
* An NgModule is a class adorned with the @NgModule decorator function. @NgModule takes a metadata
* object that tells Angular how to compile and run module code. It identifies the module's own
* components, directives, and pipes, making some of them public so external components can use them.
* @NgModule may add service providers to the application dependency injectors.
*/

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [ ParabolRadioComponent ],
  declarations: [ ParabolRadioComponent ]
})
export class ParabolRadioModule { }
