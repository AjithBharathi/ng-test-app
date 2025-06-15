import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, computed, ElementRef, inject, OnChanges, OnInit, signal, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
    // You can inject services here if needed
  }

  ngOnInit(): void {

  }

}