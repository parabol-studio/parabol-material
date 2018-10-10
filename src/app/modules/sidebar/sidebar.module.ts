// Import Angular modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import custom components
import { ParabolSidebarDirective } from './sidebar.directive';


/*
* @NgModule: ParabolSidebarModule
*
* An NgModule is a class adorned with the @NgModule decorator function. @NgModule takes a metadata
* object that tells Angular how to compile and run module code. It identifies the module's own
* components, directives, and pipes, making some of them public so external components can use them.
* @NgModule may add service providers to the application dependency injectors.
*/

@NgModule({
  imports: [ BrowserModule ],
  exports: [ ParabolSidebarDirective ],
  declarations: [ ParabolSidebarDirective ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ParabolSidebarModule { }
