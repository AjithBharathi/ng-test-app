import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyParamsRoutingModule } from './my-params-routing.module';
import { MyParamsComponent } from './my-params/my-params.component';
import { MyParamsHomeComponent } from './my-params-home/my-params-home.component';


@NgModule({
  declarations: [
    MyParamsComponent,
    MyParamsHomeComponent
  ],
  imports: [
    CommonModule,
    MyParamsRoutingModule
  ]
})
export class MyParamsModule { }
