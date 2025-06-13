import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child-b-one',
  templateUrl: './child-b-one.component.html',
  styleUrls: ['./child-b-one.component.scss']
})
export class ChildBOneComponent {
  // name:Observable<string> = new Observable<string>();
  name:Observable<string>;

  constructor(private appService: AppService) { 
    this.name = this.appService.getData()
  }

 
}
