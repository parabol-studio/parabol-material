// Import Angular modules
import { Component, Input, Output, AfterViewChecked, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { Session } from '../../services/interfaces.service';


/*
* @Component: ConichiSidebarUserComponent
*
* Components are the main way we build and specify elements and logic on the page, through both
* custom elements and attributes that add functionality to our existing components.
* 
* This component is used to build Conichi Material Slider component.
*/

@Component({
  selector: 'conichi-sidebar-user',
  templateUrl: './sidebar-user.html'
})

export class ConichiSidebarUserComponent implements AfterViewChecked {
  public avatar: string;
  @Input() session: Session;
    
  constructor(private cd: ChangeDetectorRef) {}
  
  ngAfterViewChecked() {
    if (this.session) { this.avatar = this.session.user.profile_photo || '../assets/images/default-user.jpg'; }
    this.cd.detectChanges();
  }
  
  logout() {
    localStorage.clear();
    window.location.href = '/';
  }
}
