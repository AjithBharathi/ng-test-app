import { createAction, props } from '@ngrx/store';
import { Todo } from '../../models/todo'; 

const editTodo = createAction('[Todo] Edit', props<{ todo: Todo }>());
const deleteTodo = createAction('[Todo] Delete', props<{ id: number }>());
const loadTodos = createAction('[Todo] Load Todos', props<{ todos: Todo[] }>());

export { editTodo, deleteTodo, loadTodos };