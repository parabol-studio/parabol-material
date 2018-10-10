import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})

export class AppComponent {
  public selection: string;
  public session: Object;

  constructor() {    
    this.selection = 'reservation';
    
    this.session = {
      user: {
        email: 'marc.horne@conichi.com',
        name: 'Marc Horne',
        profile_photo: 'https://conichi-development.s3.amazonaws.com/user/avatar/1556/ff9cc8a3b023f6ac736d6510698b1ec2.jpg'
      }
    };
  }
}
