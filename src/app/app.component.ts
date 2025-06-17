import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = 'Ajith';
  profileImageUrl = 'assets/img/user.png';
  isDisabled = true;
  isActive = true;
  isError = false;
  user = {
    name:'ajith'
  }
  sayHello() {
    alert('Hello!');
  }

  onNotify(e:any) {
    console.log(e)
  }

  logValue(e:any) {
    console.log(e)
  }
}
