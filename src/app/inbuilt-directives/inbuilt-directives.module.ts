import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InbuiltDirectivesRoutingModule } from './inbuilt-directives-routing.module';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { InbuiltHomeComponent } from './inbuilt-home/inbuilt-home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NgforComponent,
    NgifComponent,
    NgswitchComponent,
    InbuiltHomeComponent
  ],
  imports: [
    CommonModule,
    InbuiltDirectivesRoutingModule,
    FormsModule
  ]
})
export class InbuiltDirectivesModule { }
