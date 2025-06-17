import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
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


  showContainer: boolean = false;
  contentVersion: number = 1;

  toggleContainer() {
    this.showContainer = !this.showContainer;
  }

  updateContent() {
    this.contentVersion++;
  }
}
