import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-three',
  templateUrl: './route-three.component.html',
  styleUrls: ['./route-three.component.scss']
})
export class RouteThreeComponent {
  route = inject(ActivatedRoute)
  router = inject(Router)

  constructor() {
    this.route.params.subscribe((params) => {
      console.log(params)
      // console.log(params['id'])
    })
    this.route.queryParams.subscribe((queryParams) => {
      // console.log(queryParams)
      // console.log(queryParams['name'])
    }
    )
  }

  onNavone() {
    this.router.navigate(['/route-one/ajith'])
  }

}
