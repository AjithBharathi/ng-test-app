import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-one',
  templateUrl: './route-one.component.html',
  styleUrls: ['./route-one.component.scss']
})
export class RouteOneComponent {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params)
    })
    this.route.fragment.subscribe((fragment: any) => {
      console.log(fragment)
     setTimeout(() => {
       document.getElementById(fragment)?.scrollIntoView({
        behavior: 'smooth'
      })
     }
     , 5000);
    })
  }

}