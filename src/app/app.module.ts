import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StyleguideModule } from './modules/app/modules/styleguide.module';

import { TextModule } from './modules/app/modules/text.module';
import { TextareaModule } from './modules/app/modules/textarea.module';
import { DatepickerModule } from './modules/app/modules/datepicker.module';
import { CheckboxModule } from './modules/app/modules/checkbox.module';
import { CheckboxGroupModule } from './modules/app/modules/checkbox-group.module';
import { RadioModule } from './modules/app/modules/radio.module';
import { CurrencyModule } from './modules/app/modules/currency.module';
import { SelectModule } from './modules/app/modules/select.module';
import { SliderModule } from './modules/app/modules/slider.module';
import { ModalModule } from './modules/app/modules/modal.module';
import { NotificationModule } from './modules/app/modules/notification.module';
import { LoadingModule } from './modules/app/modules/loading.module';
import { PendingModule } from './modules/app/modules/pending.module';
import { ReservationModule } from './modules/app/modules/reservation.module';
import { NoticeModule } from './modules/app/modules/notice.module';
import { SelectButtonModule } from './modules/app/modules/select-button.module';
import { ProgressModule } from './modules/app/modules/progress.module';
import { SidebarModule } from './modules/app/modules/sidebar.module';
import { FooterModule } from './modules/app/modules/footer.module';

import { ConichiSidebarModule } from './modules/sidebar/sidebar.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    StyleguideModule,
    TextModule,
    TextareaModule,
    DatepickerModule,
    CheckboxModule,
    CheckboxGroupModule,
    RadioModule,
    CurrencyModule,
    SelectModule,
    SliderModule,
    ModalModule,
    NotificationModule,
    LoadingModule,
    PendingModule,
    ReservationModule,
    NoticeModule,
    SelectButtonModule,
    ProgressModule,
    SidebarModule,
    FooterModule,
    ConichiSidebarModule
  ],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
