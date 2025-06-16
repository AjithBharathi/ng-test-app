import { Component, ViewEncapsulation } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {
  title = 'my-test-app';
  constructor(private appService: AppService) { }

  login() {
    this.appService.login()
  }

  logout() {
    this.appService.logout();
  }
}
