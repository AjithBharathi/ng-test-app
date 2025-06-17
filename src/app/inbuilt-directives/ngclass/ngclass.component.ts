import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.scss']
})
export class NgclassComponent {
isActive = true;
isError = false;
currentClasses = {
  active: true,
  error: false
};
hasError = true
}
