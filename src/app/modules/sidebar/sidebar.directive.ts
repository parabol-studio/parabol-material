import { Directive, Input, HostListener, AfterViewChecked } from '@angular/core';

import * as $_ from 'jquery';
const $ = $_;


@Directive({ selector: 'conichi-sidebar' })
export class ConichiSidebarDirective implements AfterViewChecked {  
  @Input() collapsed: string;

  @HostListener('window:resize', ['$event']) onResize(event) {
    if (event.target.innerWidth > 769 && this.collapsed !== 'true') { $('conichi-sidebar').addClass('open'); }
    else { $('conichi-sidebar').removeClass('open'); }
  }

  ngAfterViewChecked() {
    if (window.innerWidth > 769 && this.collapsed !== 'true') { $('conichi-sidebar').addClass('open'); }
    
    if ($('.toggle').length === 0) {
      $('conichi-sidebar').append('<div class="toggle"><div class="bar top"></div><div class="bar middle"></div><div class="bar bottom"></div></div>').click(() => $('conichi-sidebar').toggleClass('open'));
    }
    
    if ($('.footer').length === 0) {
      $('conichi-sidebar').append('<div class="footer">&#x000A9; 2018 Hotel Beacons GmbH</div>');
    }
  }
}
