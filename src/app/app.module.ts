import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Route, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'inbuiltDirective' , 
    loadChildren: () => import('./inbuilt-directives/inbuilt-directives.module').then(m => m.InbuiltDirectivesModule)},
  { path: 'inbuiltDirective' , 
    loadChildren: () => import('./custom-directives/custom-directives.module').then(m => m.CustomDirectivesModule)}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
