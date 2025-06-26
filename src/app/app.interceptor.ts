import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, delay, finalize, throwError } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { ErrorService } from './error.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(
     private spinnerService: SpinnerService,
    private errorService: ErrorService
  ) {}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show();
    console.log(req)
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer dummy-token-from-interceptor`
      }
    });
    return next.handle(cloned).pipe(
      delay(300), // 💡 Add artificial delay of 3 seconds
      catchError((error: HttpErrorResponse) => {
        this.errorService.handleError(error);
        return throwError(() => error);
      }),
      finalize(() => this.spinnerService.hide())
    );;
  }
}
  // return next.handle(clonedReq).pipe(
  //     map((event) => {
  //       if (event instanceof HttpResponse) {
         

  //         return event.clone({ body: {
  //           ...event.body,
  //           name: 'ajith'
  //         } });
  //       }
  //       return event;
  //     })
  //   );