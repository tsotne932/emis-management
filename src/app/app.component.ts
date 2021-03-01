import { Component } from '@angular/core';
import { Loading } from './service/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emis-management';
  loading: boolean = false;
  constructor() {
    Loading.do.subscribe((loading: boolean) => {
      setTimeout(() => {
        this.loading = !!loading;
      });
    });
  }

}
