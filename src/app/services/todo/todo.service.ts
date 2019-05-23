import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CreateTodo, UpdateTodo } from 'src/app/actions/todo.actions';
import { getAllArchivedTodos, getAllUnArchivedTodos, getNumberOfArchivedTodos, getNumberOfDoneTodos, numberOfOpenTodos, TodoState } from 'src/app/reducers/todo.reducer';
import { Todo } from 'src/app/shared/todo.model';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  numberOfOpenTodos$: Observable<number>;
  numberOfDoneTodos$: Observable<number>;
  numberOfArchivedTodos$: Observable<number>;
  unArchivedTodos$: Observable<Array<Todo>>;
  archivedTodos$: Observable<Array<Todo>>;


  constructor(private store: Store<TodoState>) {
    this.numberOfOpenTodos$ =  this.store.pipe(
      select(numberOfOpenTodos)
    );
    this.numberOfDoneTodos$ =  this.store.pipe(
      select(getNumberOfDoneTodos)
    );
    this.numberOfArchivedTodos$ =  this.store.pipe(
      select(getNumberOfArchivedTodos)
    );
    this.unArchivedTodos$ =  this.store.pipe(
      select(getAllUnArchivedTodos)
    );
    this.archivedTodos$ =  this.store.pipe(
      select(getAllArchivedTodos)
    );
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
