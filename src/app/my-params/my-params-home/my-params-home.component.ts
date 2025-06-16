import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-my-params-home',
  templateUrl: './my-params-home.component.html',
  styleUrls: ['./my-params-home.component.scss']
})
export class MyParamsHomeComponent {

  constructor(private router: Router, private route: ActivatedRoute, private appService: AppService) { }

  navigateTwo() {
    // 1. Passing route parameters (e.g., /two/123)
    this.router.navigate(['./parmss', 123, 'abc'], { relativeTo: this.route, queryParams: { name: 'ajith', age: 29 } });
    // this.router.navigate(['./parmss/123/abc'] - considered as path not params

    /*
    Can we use router.navigate() to go to a child route without relativeTo?
    ✅ Yes — But only if you're using absolute paths
    this.router.navigate(['/parent/child']);
    This is absolute navigation — it works from anywhere in the app.

    ❌ No — if you're trying to use a relative path like 'child', you must use relativeTo
    // ❌ This is invalid if used alone
    this.router.navigate(['child']); // Angular doesn't know the base path
    Angular will try to match it from the root, not relative to your current route.
  
    ----------------------------------------------------- 

    ✅ So When to Use relativeTo?
    Use relativeTo: this.route when you want to navigate relative to the current route.

    Example:
    You're currently at /parent, and you want to go to /parent/child:

    this.router.navigate(['child'], { relativeTo: this.route });

    Without relativeTo, Angular assumes 'child' is a top-level route.


    | Use Case                          | Use `relativeTo`? | Example                                           |
    | --------------------------------- | ----------------- | ------------------------------------------------- |
    | Navigate using absolute path      | ❌ Not needed      | `navigate(['/parent/child'])`                     |
    | Navigate using relative path      | ✅ Required        | `navigate(['child'], { relativeTo: this.route })` |
    | Stay flexible inside nested route | ✅ Recommended     | Keeps your navigation logic context-aware         |


    */




    // // 2. Passing multiple route parameters (e.g., /two/123/details/456)
    // this.router.navigate(['/two', 123, 'details', 456]);

    // // 3. Passing query parameters (e.g., /two?name=ajith&age=29)
    // this.router.navigate(['/two'], { queryParams: { name: 'ajith', age: 29 } });

    // // 4. Passing both route and query parameters (e.g., /two/123?active=true)
    // this.router.navigate(['/two', 123], { queryParams: { active: true } });

    // // 5. Passing query params with array values (e.g., /two?ids=1&ids=2)
    // this.router.navigate(['/two'], { queryParams: { ids: [1, 2] } });

    // // 6. Passing params using navigateByUrl (query params in URL string)
    // this.router.navigateByUrl('/two/123?name=ajith&age=29');
  }

  navigateThree() {
    this.router.navigate(['parmss', 123, 'four'], { relativeTo: this.route, queryParams: { name: 'four query', age: 29 } });

  }

  navigateFour() {
    // Passing both route params and query params using navigateByUrl

    // NAVIGATE BY URL WORKS ONLY FOR ABSOLUTE PATH (OR) FULL URL (OR) RELATIVE PATH FROM THE CURRENT URL 
    this.router.navigateByUrl('/myparams/parmss/123/abc?name=ajith&age=29');
    // or 
    // const currentUrl = this.router.url;
    // this.router.navigateByUrl(`${currentUrl}/parmss/123/abc?name=ajith&age=29`);
  }

  navStateData() {
    this.router.navigate(['staticdata'], {
      relativeTo: this.route,
      state: { name: 'Ajith', role: 'Admin', type: 'state data' }
    });
  }

  fragmentNav() {
    this.router.navigate(['routefragment'], {
      relativeTo: this.route,
      fragment: 'about'
    });
  }

  resolverNav(val:boolean) {
    this.appService.setMyResovler(val);
     this.router.navigate(['myresolver'], {
      relativeTo: this.route,
      fragment: 'about'
    });
  }

}
