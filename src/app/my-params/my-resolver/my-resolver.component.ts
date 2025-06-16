import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-resolver',
  templateUrl: './my-resolver.component.html',
  styleUrls: ['./my-resolver.component.scss']
})
export class MyResolverComponent {

  constructor(private route: ActivatedRoute) {
    const user = this.route.snapshot.data['userData'];
    console.log('Resolver data fetched (snapshot)', user);

    this.route.data.subscribe(data => {
      const user = data['userData'];
      console.log('Resolver data fetched (observable)', user);
    });
  }

}
