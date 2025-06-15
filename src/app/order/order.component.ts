import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { OrderService } from '../order.service';

import {Store} from '@ngrx/store';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, 
AfterContentChecked, AfterContentInit {
  
  subs!: Subscription;
  storeVal: Observable<number>;
  constructor(private service: OrderService, private store:Store<{count: number}>) { 
    console.log('order constructor')
    // this.store.select((state:any) => state.count).subscribe((data) => {
    //   console.log('store value', data);
    //   this.storeVal = data;
    // });
    this.storeVal = this.store.select('count')
  }
  naa: string = 'ajith';



  ngOnInit() {
   console.log('order ngOnInit')
   
  }

  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked')
  // }

  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit')
    
  // }

   ngOnChanges(): void {
    console.log('order ngOnChanges')
  }
  ngAfterViewInit(): void {
    console.log('order ngAfterViewInit')
  }
  ngAfterViewChecked(): void{
    console.log('order ngAfterViewChecked')
  }
  ngAfterContentChecked(): void {
    console.log('order ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('order ngAfterContentInit')
  }

}
