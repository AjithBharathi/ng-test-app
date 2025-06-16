import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  myResovler!: boolean;

  constructor() { }

  setMyResovler(val: boolean) {
    this.myResovler = val;
  }

  getUserDetails() {
    if (this.myResovler == true) {
      return of({
        name: 'ajith',
        age: '29',
        job: 'IT'
      });
    } 
    else {
      return throwError('MY_ERROR_MESSAGE!!');

      return throwError(() => ({
        status: 'error.status',
        message: 'User data could not be loaded'
      }));
    }

  }
}
