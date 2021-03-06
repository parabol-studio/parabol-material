import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ParabolNotificationModule } from '../../notification/notification.module';

// Import custom components
import { NotificationComponent } from '../components/notification.component';


@NgModule({
  imports: [
    BrowserModule,
    ParabolNotificationModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ NotificationComponent ],
  declarations: [ NotificationComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NotificationModule { }
