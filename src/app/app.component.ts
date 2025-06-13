import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-test-app';
  subName:string = '';
  constructor(private appService: AppService) {
    this.appService.mysubData.subscribe((data) => {
      this.subName = data;
    }
    );
   
  }

  onNameChange(e: any) {
    const value = e.target.value;
    this.appService.parentname.emit(value);
    
  }
}
