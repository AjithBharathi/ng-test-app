import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyGuardsRoutingModule } from './my-guards-routing.module';

import { MyGuardsHomeComponent } from './my-guards-home/my-guards-home.component';
import { MyGuardOneComponent } from './my-guard-one/my-guard-one.component';
import { MyGuardTwoComponent } from './my-guard-two/my-guard-two.component';
import { MyGuardTwoAComponent } from './my-guard-two-a/my-guard-two-a.component';
import { MyGuardTwoBComponent } from './my-guard-two-b/my-guard-two-b.component';



@NgModule({
  declarations: [
    MyGuardsHomeComponent,
    MyGuardOneComponent,
    MyGuardTwoComponent,
    MyGuardTwoAComponent,
    MyGuardTwoBComponent
  ],
  imports: [
    CommonModule,
    MyGuardsRoutingModule
  ]
})
export class MyGuardsModule { }
