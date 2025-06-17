import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { InbuiltHomeComponent } from './inbuilt-home/inbuilt-home.component';

const routes: Routes = [
  { path: '', component: InbuiltHomeComponent },
  { path: 'ngif', component: NgifComponent },
  { path: 'ngfor', component: NgforComponent },
  { path: 'ngswitch', component: NgswitchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InbuiltDirectivesRoutingModule { }
