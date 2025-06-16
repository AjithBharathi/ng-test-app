import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  myResovler!: boolean;


  constructor() {
    // localStorage.setItem('isLoggedIn', 'false')
  }

  userLoggedIn() {
    console.log(localStorage.getItem('isLoggedIn'))
    return localStorage.getItem('isLoggedIn') == 'true' ? true : false;
  }

  login() {
    localStorage.setItem('isLoggedIn', 'true')
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false')
  }

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

  checkMyGuards(id: any, type?: string) {
    return id == 1 ? true : false;
  }
}
