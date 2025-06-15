import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { counterReducer } from './state/count-store';

const routes:Routes = [
  {path: '', redirectTo: '/route-one', pathMatch: 'full'},
 
]

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({count: counterReducer}),
    StoreModule.forRoot({}, {}),
    // StoreModule.forRoot({}, {}) // Assuming counterReducer is imported from the state management file
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
