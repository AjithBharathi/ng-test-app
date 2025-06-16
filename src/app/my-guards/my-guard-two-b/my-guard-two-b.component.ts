import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-guard-two-b',
  templateUrl: './my-guard-two-b.component.html',
  styleUrls: ['./my-guard-two-b.component.scss']
})
export class MyGuardTwoBComponent {

    validStatus: string = '';
  
    constructor(private route: ActivatedRoute) {
      this.route.data.subscribe(data => {
        const status = data['routeStatus'];
        this.validStatus = status.validStatus;
      });
    }

}
