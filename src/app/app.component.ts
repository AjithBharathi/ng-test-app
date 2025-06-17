import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   showChild: boolean = false;
  childInputValue: string = 'Initial Value';
  counter: number = 0;

  toggleChild() {
    this.showChild = !this.showChild;
  }

  updateInput() {
    this.counter++;
    this.childInputValue = `Updated Value ${this.counter}`;
  }
}
