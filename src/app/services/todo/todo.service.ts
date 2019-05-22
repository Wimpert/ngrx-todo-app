import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreateTodo, UpdateTodo } from 'src/app/actions/todo.actions';
import { getNumberOfTodos, TodoState } from 'src/app/reducers/todo.reducer';
import { Todo } from 'src/app/shared/todo.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  numberOfTodos$: Observable<number>;

  constructor(private store: Store<TodoState>) {
    console.log(this.store);
    this.numberOfTodos$ =  this.store.pipe(select(getNumberOfTodos));
  }

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
