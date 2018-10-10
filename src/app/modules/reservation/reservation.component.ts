import { Component, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { I18n, Precheckin, Venue, Session } from '../../services/interfaces.service';


@Component({
  selector: 'conichi-reservation',
  templateUrl: './reservation.html'
})

export class ConichiReservationComponent implements AfterViewInit {
  @Input() venue: Venue;
  @Input() precheckin: Precheckin;
  @Input() session: Session;
  @Input() i18n: I18n;
  
  constructor(private cd: ChangeDetectorRef) {}
  
  ngAfterViewInit() {
    if (this.precheckin && this.precheckin['precheckin_request']) {
      this.precheckin = this.precheckin['precheckin_request'];
    }
    
    this.cd.detectChanges();
  }
}
