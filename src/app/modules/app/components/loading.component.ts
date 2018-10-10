import { Component } from '@angular/core';


@Component({
  selector: 'app-loading',
  templateUrl: '../templates/loading.html'
})

export class LoadingComponent {
  public loading: string;
  
  triggerLoading() {
    this.loading = 'Loading some data...';
    setTimeout(() => this.loading = null, 5000);
  }
}
