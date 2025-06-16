import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Store } from '@ngrx/store';
import { loadTodos } from './store/todo/todo.action';
import { Todo } from './models/todo'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private appService: AppService, private store: Store<Todo[]>) {
    // You can inject services here if needed
  }

  ngOnInit(): void {
    this.fetchTodos();
  }

  fetchTodos() {
    this.appService.getTodos().subscribe(todos => {
      this.store.dispatch(loadTodos({ todos }));
  
    }, error => {
      console.error('Error fetching todos:', error);
    });
  }
  // You can add more methods here to handle other functionalities

}