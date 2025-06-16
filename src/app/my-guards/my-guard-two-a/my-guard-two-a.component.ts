import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-guard-two-a',
  templateUrl: './my-guard-two-a.component.html',
  styleUrls: ['./my-guard-two-a.component.scss']
})
export class MyGuardTwoAComponent {

  validStatus: string = '';

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      const status = data['routeStatus'];
      this.validStatus = status.validStatus;
    });
  }

  
}
