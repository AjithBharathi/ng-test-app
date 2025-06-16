import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { AuthGuard } from './auth.guard';
import { AaaComponent } from './aaa/aaa.component';
import { BbbComponent } from './bbb/bbb.component';
import { CccComponent } from './ccc/ccc.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MyGuardsService } from './my-guards/my-guards.guard';

const routes: Routes = [
  { path: 'notfound', component: NotFoundComponent },
  { path: 'one/:id', component: OneComponent, canActivate: [AuthGuard], data: { name: 'ajith one', age: 29 } },
  { path: 'two', component: TwoComponent, canActivate: [AuthGuard] },
  {
    path: 'three', component: ThreeComponent, canActivate: [AuthGuard], children: [
      { path: 'aaa', component: AaaComponent },
      { path: 'bbb', component: BbbComponent },
      { path: 'ccc', component: CccComponent },

    ], canActivateChild: [AuthGuard]
  },
  {
    path: 'myparams',
    loadChildren: () => import('./my-params/my-params.module').then(m => m.MyParamsModule)
  },
  {
    path: 'myguards',
    loadChildren: () => import('./my-guards/my-guards.module').then(m => m.MyGuardsModule),
    canLoad: [MyGuardsService]
  },
  // {path: '', redirectTo: '/one/1', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // for fragments
    {
      anchorScrolling: 'enabled',             // Scrolls to element with matching id
      scrollPositionRestoration: 'enabled'    // Optional: saves scroll on back/forward
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
