import { Directive, Input, HostListener, AfterViewChecked } from '@angular/core';

import * as $_ from 'jquery';
const $ = $_;


@Directive({ selector: 'parabol-sidebar' })
export class ParabolSidebarDirective implements AfterViewChecked {  
  @Input() collapsed: string;

  @HostListener('window:resize', ['$event']) onResize(event) {
    if (event.target.innerWidth > 769 && this.collapsed !== 'true') { $('parabol-sidebar').addClass('open'); }
    else { $('parabol-sidebar').removeClass('open'); }
  }

  ngAfterViewChecked() {
    if (window.innerWidth > 769 && this.collapsed !== 'true') { $('parabol-sidebar').addClass('open'); }
    
    if ($('.toggle').length === 0) {
      $('parabol-sidebar').append('<div class="toggle"><div class="bar top"></div><div class="bar middle"></div><div class="bar bottom"></div></div>').click(() => $('parabol-sidebar').toggleClass('open'));
    }
  }
}
