import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyParamsComponent } from './my-params/my-params.component';
import { MyParamsHomeComponent } from './my-params-home/my-params-home.component';
import { StaticDataComponent } from './static-data/static-data.component';
import { RouteFragmentComponent } from './route-fragment/route-fragment.component';
import { MyResolverComponent } from './my-resolver/my-resolver.component';
import { MyResolver } from './my-resolver/my-resolver.service';

const routes: Routes = [
  {
    path: '', component: MyParamsHomeComponent,

    children: [
      {
        path: '',
        redirectTo: 'myparamss',
        pathMatch: 'full'
      },
      { path: 'parmss/:id/:name', component: MyParamsComponent },
      { path: 'staticdata', component: StaticDataComponent, data: { name: 'ajith', age: 29, type: 'config static data' } },
      { path: 'routefragment', component: RouteFragmentComponent, },
      {
        path: 'myresolver', component: MyResolverComponent, resolve: {
          userData: MyResolver   // 'userData' is the key you'll access in component
        }
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyParamsRoutingModule { }
