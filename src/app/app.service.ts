import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  mysubData:Subject<any> = new Subject<any>();

  parentname:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  setData(data: any) {
    this.mysubData.next(data);
  }
  getData() {
    return this.mysubData.asObservable();
  }
  clearData() {
    this.mysubData.next(null);
  }
} 
