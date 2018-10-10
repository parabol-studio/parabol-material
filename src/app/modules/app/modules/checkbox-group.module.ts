import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule } from 'ngx-highlightjs';

// Import custom modules
import { ConichiCheckboxModule } from '../../checkbox/checkbox.module';
import { ConichiCheckboxGroupModule } from '../../checkbox_group/checkbox_group.module';

// Import custom components
import { CheckboxGroupComponent } from '../components/checkbox-group.component';


@NgModule({
  imports: [
    BrowserModule,
    ConichiCheckboxModule,
    ConichiCheckboxGroupModule,
    HighlightModule.forRoot({ theme: 'color-brewer' })
  ],
  exports: [ CheckboxGroupComponent ],
  declarations: [ CheckboxGroupComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CheckboxGroupModule { }
