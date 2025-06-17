import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.scss']
})
export class NgifComponent {

  name: string = 'Ajith';
  isLoggedIn:boolean = false;

  showName:boolean = false;


}
