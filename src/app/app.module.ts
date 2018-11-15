import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { TextModule } from './modules/app/modules/text.module';
import { TextareaModule } from './modules/app/modules/textarea.module';
import { DatepickerModule } from './modules/app/modules/datepicker.module';
import { CheckboxModule } from './modules/app/modules/checkbox.module';
import { CheckboxGroupModule } from './modules/app/modules/checkbox-group.module';
import { RadioModule } from './modules/app/modules/radio.module';
import { SelectModule } from './modules/app/modules/select.module';
import { SliderModule } from './modules/app/modules/slider.module';
import { ModalModule } from './modules/app/modules/modal.module';
import { NotificationModule } from './modules/app/modules/notification.module';
import { LoadingModule } from './modules/app/modules/loading.module';
import { PendingModule } from './modules/app/modules/pending.module';
import { SelectButtonModule } from './modules/app/modules/select-button.module';
import { SidebarModule } from './modules/app/modules/sidebar.module';
import { DisplayModule } from './modules/app/modules/display.module';

import { ParabolSidebarModule } from './modules/sidebar/sidebar.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    BrowserModule,
    TextModule,
    TextareaModule,
    DatepickerModule,
    CheckboxModule,
    CheckboxGroupModule,
    RadioModule,
    SelectModule,
    SliderModule,
    ModalModule,
    NotificationModule,
    LoadingModule,
    PendingModule,
    SelectButtonModule,
    SidebarModule,
    DisplayModule,
    ParabolSidebarModule
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
