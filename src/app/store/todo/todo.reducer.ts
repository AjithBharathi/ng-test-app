import { createReducer, on } from '@ngrx/store';
import { editTodo, deleteTodo, loadTodos } from './todo.action';
import { Todo } from '../../models/todo'; 

const initialState: Todo[] = [];

const todoReducer = createReducer(
    initialState,
     on(loadTodos, (state, { todos }) => {
        return [...todos];
    }),
    on(editTodo, (state, { todo }) => {
        return state.map(t => t.id === todo.id ? { ...t, title: todo.title, completed: todo.completed } : t);
    }),
    on(deleteTodo, (state, { id }) => {
        return state.filter(todo => todo.id !== id);
    })
);

export { todoReducer, initialState };