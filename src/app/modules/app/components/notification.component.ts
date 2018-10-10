import { Component } from '@angular/core';


@Component({
  selector: 'app-notification',
  templateUrl: '../templates/notification.html'
})

export class NotificationComponent {
  public notification: Object;
  public data: Object;

  triggerNotification(type) {
    this.notification = { type: type, payload: 'This is a notification' };
  }
}
