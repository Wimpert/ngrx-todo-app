import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CreateTodo, UpdateTodo } from 'src/app/actions/todo.actions';
import { State } from 'src/app/reducers';
import { Todo } from 'src/app/shared/todo.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private store: Store<State>) { }

  createTodo(text: string) {
    this.store.dispatch(new CreateTodo({todoText: text}));
  }

  updateTodo(todo: Todo) {
    this.store.dispatch(new UpdateTodo({todo}));
  }
  constructNewTodo(todoText: string): Todo {
    const todo: Todo = { todoText , done: false, archived: false , uuid: uuid()};
    return todo;
  }

}
