import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyParamsRoutingModule } from './my-params-routing.module';
import { MyParamsComponent } from './my-params/my-params.component';
import { MyParamsHomeComponent } from './my-params-home/my-params-home.component';
import { StaticDataComponent } from './static-state-data/static-data.component';
import { RouteFragmentComponent } from './route-fragment/route-fragment.component';
import { MyResolverComponent } from './my-resolver/my-resolver.component';


@NgModule({
  declarations: [
    MyParamsComponent,
    MyParamsHomeComponent,
    StaticDataComponent,
    RouteFragmentComponent,
    MyResolverComponent
  ],
  imports: [
    CommonModule,
    MyParamsRoutingModule
  ]
})
export class MyParamsModule { }
