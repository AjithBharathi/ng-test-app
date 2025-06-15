import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean | Promise<boolean> | Observable<boolean>{
    console.log(route, state)
    for(let i=0;i<state.root.children.length; i++) {
      console.log(state.root.children[i]);
    }
    if(state.url === '/two') {
      this.router.navigate(['/one/1'], {queryParams: {name: 'ajith', age: 29}});
      return false;
    }
    return true
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
    console.log('canActivateChild called', route, state);
     for(let i=0;i<state.root.children.length; i++) {
      console.log(state.root.children[i]);
    }
    return true; // Allow access to child routes
  }
  // canDeactivate(): boolean {
}