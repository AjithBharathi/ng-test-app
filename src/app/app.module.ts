import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildAOneComponent } from './child-a-one/child-a-one.component';
import { ParentComponent } from './parent/parent.component';
import { ContentContainerComponent } from './content-container/content-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildAOneComponent,
    ParentComponent,
    ContentContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
