import { Action } from '@ngrx/store';
import { Todo } from '../shared/todo.model';

export enum TodoActionTypes {
  CreateTodo = '[Todo] Create Todo',
  AddTodo = '[Todo] Add Todo',
  UpdateTodo = '[Todo] Update Todo',

}

export class CreateTodo implements Action {
  readonly type = TodoActionTypes.CreateTodo;
  payload: {todoText: string};
}
export class AddTodo implements Action {
  readonly type = TodoActionTypes.AddTodo;
  payload: { todo: Todo};
}

export class UpdateTodo implements Action {
  readonly type = TodoActionTypes.UpdateTodo;
  payload: { todo: Todo};
}


export type TodoActions = AddTodo | CreateTodo | UpdateTodo;
