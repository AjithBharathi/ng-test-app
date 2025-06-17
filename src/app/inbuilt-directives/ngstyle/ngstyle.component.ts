import { Component } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.scss']
})
export class NgstyleComponent {
myStyles = {
  color: 'blue',
  'font-weight': 'bold'
};
isError = true;
fontSize = '20px';
fontColor = 'purple';
isWarning = true;
}
