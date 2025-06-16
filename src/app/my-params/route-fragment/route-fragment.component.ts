import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-fragment',
  templateUrl: './route-fragment.component.html',
  styleUrls: ['./route-fragment.component.scss']
})
export class RouteFragmentComponent {

  para: string = `
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
  `;

  fragment: string | null = '';

  constructor(private route: ActivatedRoute) {
    const fragment = this.route.snapshot.fragment;
    console.log('Static Data:', fragment);
    this.fragment = fragment;

    this.route.fragment.subscribe(_frag => {
      console.log('Static Data (Observable):', fragment);
      // ***manaul fragment when forRoot auto config is not there ***
      // if (fragment) { 
      //   const element = document.getElementById(fragment);
      //   if (element) {
      //     element.scrollIntoView({ behavior: 'smooth' });
      //   }
      // }
    });
  }



}
