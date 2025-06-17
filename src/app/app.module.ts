import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InbuiltPipesComponent } from './inbuilt-pipes/inbuilt-pipes.component';

const routes:Routes = [
  { path: '', component: InbuiltPipesComponent},
  { path: 'customPipes', loadChildren: () => import('./custom-pipes/custom-pipes.module').then(m => m.CustomPipesModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    InbuiltPipesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
