import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { catchError, filter, forkJoin, from, map, mergeMap, of, throwError, toArray } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class OneComponent {

  data: any[] = [];

  constructor(private http: HttpClient) {
    of(1, 2, 3, 4, 5).pipe(
      filter(val => val > 2),
      map(val => val * 10),
      catchError(err => {
        console.error(err);
        return of([]); // fallback
      })
    ).subscribe(console.log);
  }

  fetch() {
    console.log('data fetched');
    this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
      .pipe(
        catchError(error => {
          // console.error('Error occurred:', error);
          if (error.status === 404) {
            // return throwError(() => 'Error fetching datasss');
            return of('Error fetching data');
          }
          return throwError(() => 'something went wrong');

        }),
        mergeMap(data => from(data)), // Convert the response to an array
        filter((data: any) => data.userId == 1),
        toArray()
      ).subscribe((data) => {
        console.log(data);
        this.data = data as any[];
      }, (error) => {
        console.error('Error fetching data', error);
      });
  }

  trackById(index: number, item: any): number {
    console.log('trackById called', index, item);
    return item.id;
  }


}
