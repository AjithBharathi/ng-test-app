import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { map, Observable, catchError } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request intercepted:', request);
    return next.handle(request)
      // .pipe(
      //   map((event: any) => {
      //     console.log('Response received:', event);
      //     let newData = [...event.body]
      //     newData = newData.map((item: any) => {
      //       return {
      //         title: item.title.toUpperCase(),
      //         body: item.body.toLowerCase()
      //       };
      //     })
      //     return event.clone({
      //       body: newData
      //     });
      //   })

      // );
  }
}
