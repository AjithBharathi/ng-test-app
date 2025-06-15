import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  name:EventEmitter<string> = new EventEmitter<string>();
  email:EventEmitter<string> = new EventEmitter<string>();
  password:EventEmitter<string> = new EventEmitter<string>();
  hobbies:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  
}
