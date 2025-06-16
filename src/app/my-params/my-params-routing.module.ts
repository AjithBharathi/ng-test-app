import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyParamsComponent } from './my-params/my-params.component';
import { MyParamsHomeComponent } from './my-params-home/my-params-home.component';

const routes: Routes = [
  {
    path: '', component: MyParamsHomeComponent,

    children: [
      { path: 'parmss/:id/:name', component: MyParamsComponent },
      {
        path: '',
        redirectTo: 'myparamss',
        pathMatch: 'full'
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyParamsRoutingModule { }
