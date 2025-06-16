import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo'; 
import { deleteTodo, editTodo } from '../store/todo/todo.action';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  todos: Todo[] = []; // Input property to receive todos from parent component
  editTodoTxt:string = '';
  isEditing:boolean = false;
  editTodoId: number | null = null; // Variable to hold the id of the todo being edited

  constructor(private store: Store<Todo[]>) {
    this.store.select((state: any) => state.todos as Todo[]).subscribe((todos: Todo[]) => {
      this.todos = todos; // Subscribe to the todos state from the store
    });
  }

  trackByTodoId(index: number, todo: any): number {
    return todo.id; // Use the todo id as the unique identifier for tracking
  }
  

  editTodo(i:number, title:string): void {
    this.isEditing = true;
    this.editTodoTxt = title;
    this.editTodoId = this.todos[i].id; // Set the id of the todo being edited
  }

  saveEdit() {
    if (this.editTodoId !== null) {
      const todo: Todo | undefined = this.todos.find(todo => todo.id === this.editTodoId);
      if (todo) {
        console.log('Editing todo:', todo);
        const updatedTodo = { ...todo, title: this.editTodoTxt }; // Create a new todo object with updated title
        this.store.dispatch(editTodo({ todo: updatedTodo }));
      }
    }
    this.isEditing = false;
    this.editTodoTxt = '';
    this.editTodoId = null; // Reset the id of the todo being edited

  }

  cancelEdit() {
    this.isEditing = false;
    this.editTodoTxt = '';
    this.editTodoId = null; // Reset the id of the todo being edited
  }


  removeTodo(todoId: number): void {
    // this.store.dispatch({ type: '[Todo] Delete', id: todoId }); // Dispatch delete action to the store
    this.store.dispatch(deleteTodo({ id: todoId })); // Dispatch delete action to the store
  }

  toggleTodoCompletion(todoId: number): void {
    const todo = this.todos.find(todo => todo.id === todoId);
    if (todo) {
      console.log('Toggling todo completion:', todo);
      const updatedTodo = { ...todo, completed: !todo.completed }; // Create a new object with toggled completed
      console.log('Toggling todo completion:', updatedTodo);
      this.store.dispatch(editTodo({ todo: updatedTodo })); // Dispatch edit action to update the todo in the store
    }
  }

}
