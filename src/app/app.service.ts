import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo, OriginalTodo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<OriginalTodo[]>('https://jsonplaceholder.typicode.com/todos').pipe(
      map(todos =>
        todos.filter(todo => todo.userId === 1)
          .map(todo => ({ id: todo.id, title: todo.title, completed: todo.completed } as Todo))// Map to Todo type
      ) // Filter todos for userId 1
    );
  }
}
