import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ConichiNoticeModule } from '../../notice/notice.module';

// Import custom components
import { NoticeComponent } from '../components/notice.component';


@NgModule({
  imports: [
    BrowserModule,
    ConichiNoticeModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ NoticeComponent ],
  declarations: [ NoticeComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NoticeModule { }
