import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { AddTodo, CreateTodo, TodoActionTypes } from '../actions/todo.actions';
import { TodoService } from '../services/todo/todo.service';
import { Todo } from '../shared/todo.model';


@Injectable()
export class AppEffects {

  constructor(private actions$: Actions, private todoService: TodoService) {}

  @Effect()
  createTodo$ = this.actions$.pipe(
    ofType(TodoActionTypes.CreateTodo),
    map((action: CreateTodo) => this.todoService.constructNewTodo(action.payload.todoText)),
    map((todo: Todo) =>  new AddTodo({todo}))
  );

}
