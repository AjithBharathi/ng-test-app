import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-params',
  templateUrl: './my-params.component.html',
  styleUrls: ['./my-params.component.scss']
})
export class MyParamsComponent {

  constructor(private route: ActivatedRoute) {
    console.log('MyParamsComponent initialized');

    // The ActivatedRoute service provides access to the route parameters and query parameters.
    // There are multiple ways to access these parameters, and they can be accessed in both synchronous and asynchronous ways.
    // Here are some examples of how to access route parameters and query parameters in Angular:
    // Note: The route parameters are part of the URL path, while query parameters are part of the URL after the '?' character.
    // Route parameters are typically used to identify a specific resource, such as an item in a list.
    // Query parameters are typically used to filter or sort a list of items, or to pass additional information to a component.
    console.log('Accessing route parameters and query parameters in Angular');
    // The following examples demonstrate how to access route parameters and query parameters in different ways:
    // Accessing route parameters and query parameters in Angular can be done in several ways.
    // 1. Using the ActivatedRoute service to access route parameters and query parameters.
    // 2. Using the snapshot property of the ActivatedRoute service to access route parameters and query parameters.
    // 3. Using the paramMap and queryParamMap observables to access route parameters and query parameters.   

    // 1. params using params 
    this.route.params.subscribe(params => {
      console.log('Route parameters: using params(observable)');
      console.log(params);
    });

    // 2. params using paramMap (using get method for safe access and proving additonal features)
    this.route.paramMap.subscribe(paramMap => {
      console.log('Route parameters: using paramMap(observable)');
      console.log(paramMap);
      console.log({
        id: paramMap.get('id'),
        name: paramMap.get('name')
      });
    });

    // 3. params using snapshot
    const snapshotParams = this.route.snapshot.params;
    console.log('Route parameters: using snapshot');
    console.log(snapshotParams);
    console.log({
      id: snapshotParams['id'],
      name: snapshotParams['name']
    });

    // 4. params using snapshot with paramMap
    const snapshotParamMap = this.route.snapshot.paramMap;
    console.log('Route parameters: using snapshot with paramMap');
    console.log(snapshotParamMap);
    console.log({
      id: snapshotParamMap.get('id'),
      name: snapshotParamMap.get('name')
    });

    // Note: The following examples are for query parameters, which are different from route parameters.
    // Query parameters are typically used to pass additional information in the URL, such as filters or search terms.


    // 5. queryParams using queryParams (observable)
    this.route.queryParams.subscribe(queryParams => {
      console.log('Query parameters: using queryParams(observable)');
      console.log(queryParams);
    });   

    // 6. queryParams using queryParamMap (observable)
    this.route.queryParamMap.subscribe(queryParamMap => {
      console.log('Query parameters: using queryParamMap(observable)');
      console.log(queryParamMap);
      console.log({
        name: queryParamMap.get('name'),
        age: queryParamMap.get('age')
      });
    });

    // 7. queryParams using snapshot
    const snapshotQueryParams = this.route.snapshot.queryParams;
    console.log('Query parameters: using snapshot');
    console.log(snapshotQueryParams);
    console.log({
      name: snapshotQueryParams['name'],
      age: snapshotQueryParams['age']
    });

    // 8. queryParams using snapshot with queryParamMap
    const snapshotQueryParamMap = this.route.snapshot.queryParamMap;
    console.log('Query parameters: using snapshot with queryParamMap');
    console.log(snapshotQueryParamMap);
    console.log({
      name: snapshotQueryParamMap.get('name'),
      age: snapshotQueryParamMap.get('age')
    });

  }

  ngOnInit() {
    console.log('MyParamsComponent ngOnInit called');
  }

}
