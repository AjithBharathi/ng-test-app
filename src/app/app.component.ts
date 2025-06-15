import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-test-app';
  subName: string = '';

  of1: Observable<string> = of('of 1');
  of2!: string;
  of3?: Observable<string>;
  of3Value!: string;


  obs1: Observable<number>;
  obs2: Observable<number>;
  obs2Value: number = 0;

  constructor(private appService: AppService) {
    this.appService.mysubData.subscribe((data) => {
      this.subName = data;
    });

    // *** using of method ***
    this.of3 = of('of 3');

    // *** manaual observable ***
    this.obs1 = new Observable<number>((observer) => {
      observer.next(Math.floor(Math.random() * 10));
    })

    this.obs2 = new Observable<number>((observer) => {
      observer.next(Math.floor(Math.random() * 100))
      
    })
  }

  ngOnInit() {
    of('of 2').subscribe((data) => {
      this.of2 = data;
    });

    this.obs2.subscribe((data) => {
      this.obs2Value = data;
    });
  }


  changeof1() {
    this.of1 = of('of 1 - ' + Math.floor(Math.random() * 10));
  }

   getof3() {
    this.of3?.subscribe((data) => {
      this.of3Value = data;
    })
  }

   onChangeObs2() {
   this.obs2 = new Observable<number>((observer) => {
      observer.next(Math.floor(Math.random() * 100))
    })

    this.obs2.subscribe((data) => {
      this.obs2Value = data;
    });

  }

  onNameChange(e: any) {
    const value = e.target.value;
    this.appService.parentname.emit(value);

  }

 

 
}
