// Import Angular modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import custom components
import { ParabolDisplayComponent } from './display.component';


/*
* @NgModule: ParabolDisplayModule
*
* An NgModule is a class adorned with the @NgModule decorator function. @NgModule takes a metadata
* object that tells Angular how to compile and run module code. It identifies the module's own
* components, directives, and pipes, making some of them public so external components can use them.
* @NgModule may add service providers to the application dependency injectors.
*
* This module is used to construct the Display component.
*/

@NgModule({
  imports: [ BrowserModule ],
  exports: [ ParabolDisplayComponent ],
  declarations: [ ParabolDisplayComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ParabolDisplayModule { }
