import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PurePipeComponent } from './pure-pipe/pure-pipe.component';
import { ImpurePipeComponent } from './impure-pipe/impure-pipe.component';
import { CustomPipesHomeComponent } from './custom-pipes-home/custom-pipes-home.component';

const routes: Routes = [
  {path: '', component: CustomPipesHomeComponent},
  {path: 'purePipe', component: PurePipeComponent},
  {path: 'impurePipe', component: ImpurePipeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomPipesRoutingModule { }
