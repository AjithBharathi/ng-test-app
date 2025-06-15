import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, inject, OnChanges, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { increment, decrement, reset, ownVal } from '../state/count-store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked,
  AfterContentChecked, AfterContentInit {
  name: string = 'ajith'
  private service = inject(OrderService)
  constructor(private store: Store) {
    console.log('person constructor')
  }
  captureName(e: any) {
    console.log(e.target.value)
    // this.service.setOrderName(e.target.value);
    this.service.name.emit(e.target.value);
  }

  captureEmail(e: any) {
    this.service.email.emit(e.target.value);
  }

  capturePassword(e: any) {
    this.service.password.emit(e.target.value);
  }
  captureHobby(e: any) {
    this.service.hobbies.emit(e.target.value);
  }

  ngOnInit(): void {
    console.log('person ngOnInit')
  }
  ngOnChanges(): void {
    console.log('person ngOnChanges')
  }
  ngAfterViewInit(): void {
    console.log('person ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('person ngAfterViewChecked')
  }
  ngAfterContentChecked(): void {
    console.log('person ngAfterContentChecked')
  }
  ngAfterContentInit(): void {
    console.log('person ngAfterContentInit')
  }

  addAction() {
    this.store.dispatch(increment())
  }
  lessAction() {
    this.store.dispatch(decrement());
  }
  resetAction() {
    this.store.dispatch(reset());
  }
  ownAction(e:any) {
    this.store.dispatch(ownVal({value: e.target.value})); // Dispatching ownVal action with the value from the input
  }


}
