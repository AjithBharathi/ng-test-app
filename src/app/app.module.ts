import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InbuiltPipesComponent } from './inbuilt-pipes/inbuilt-pipes.component';

const routes:Routes = [
  { path: '', component: InbuiltPipesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    InbuiltPipesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
