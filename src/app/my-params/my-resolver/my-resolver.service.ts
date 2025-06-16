import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { AppService } from '../../app.service';

@Injectable({ providedIn: 'root' })
export class MyResolver implements Resolve<any> {

    constructor(private appService: AppService, private router: Router) { }

    resolve(): Observable<any> {
        return this.appService.getUserDetails().pipe(
            catchError(error => {
                // 🔁 Redirect to error page or return fallback data
                console.error('Resolver error:', error);
                this.router.navigate(['/notfound']); // Optional redirection
                // (OR) this.router.navigate(['/error'], { state: { reason: error.message } });
                return of(null); // Or provide fallback: of({ name: 'Guest' })
            })
        );
    }
}
