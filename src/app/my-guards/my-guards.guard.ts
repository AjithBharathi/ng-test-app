import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, Resolve, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AppService } from '../app.service';

export interface CanComponentDeactivate {
  canDeactivateX: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MyGuardsService implements CanActivate, CanActivateChild, Resolve<any>, CanDeactivate<CanComponentDeactivate>, CanLoad {

  constructor(private router: Router, private appService: AppService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
    console.log(route, state)
    if (this.appService.checkMyGuards(route.params['id'])) {
      return true;
    }
    else if (route.data['allowRoute'] == true) {
      return true;
    }
    else {
      this.router.navigate(['/notfound']);
      return false;
    }
    // for (let i = 0; i < state.root.children.length; i++) {
    //   console.log(state.root.children[i]);
    // }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
    if (this.appService.checkMyGuards(route.params['id'])) {
      return true; // Allow access to child routes
    }
    else {
      this.router.navigate(['/notfound']);
      return false;
    }

  }

  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    // let isLoggedIn = this.appService.userLoggedIn();
    let isLoggedIn = localStorage.getItem('isLoggedIn');
    console.log(route, segments, isLoggedIn)
    if (isLoggedIn == 'false') {
      this.router.navigate(['/notfound']);
      return false;
    }
    return true;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    console.log(route.url)
    if (route.url[0].path == "my_guard_two_a") {
      return of({ validStatus: 'VALID_CHILD_ROUTE' });
    } else {
      return of({ validStatus: 'INVALID_CHILD_ROUTE' });
    }
  }

  canDeactivate(component: CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    // some restrictions are there
    // canDeactivate not work for manual route change or page reload
    // use hostlistener with beforeunload from window object(window:beforeunload) to achieve that
    return component.canDeactivateX ? component.canDeactivateX() : true;
  }
}
