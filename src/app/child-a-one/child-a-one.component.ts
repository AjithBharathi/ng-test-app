import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child-a-one',
  templateUrl: './child-a-one.component.html',
  styleUrls: ['./child-a-one.component.scss']
})
export class ChildAOneComponent implements OnInit, OnChanges {
  @Input() name = 'Child A One Component';
  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here
    console.log('ngOnInit -', this.name)
    let x = [1,2,3,4,5,6,7,8,9,10];
    let y = [4,5]

    // console.log(new Map([...y]))
    let res = x.reduce((acc, curr, index) => {
      return curr
    })
    console.log('Reduce result:', res);
    // remove index values from x that are in y with less complexity

    x = x.filter((item, index) => !y.includes(index));
    console.log('Filtered x:', x);
   
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges -',this.name)
  }

}
