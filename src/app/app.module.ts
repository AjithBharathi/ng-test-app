import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildAOneComponent } from './child-a-one/child-a-one.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildAOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
