import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomPipesService {

  constructor(private http: HttpClient) {
    console.log('custom pipe service called');

  }

  getTodos() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map(res => res.filter((_res: any, idx: number) => idx < 6))
    );
  }
}
