import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { counterReducer } from './state/count-store';
import { TodosComponent } from './todos/todos.component';
import { todoReducer } from './store/todo/todo.reducer';

const routes: Routes = [

]

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      count: counterReducer,
      todos: todoReducer
    }),
    HttpClientModule,
    // StoreModule.forRoot({}, {}) // Assuming counterReducer is imported from the state management file
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
