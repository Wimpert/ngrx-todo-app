import { TodoActions, TodoActionTypes } from '../actions/todo.actions';
import { Todo } from '../shared/todo.model';


export interface TodoState {
   todos: {[id: string]: Todo};
}

export const initialState: TodoState = {
  todos : {}
};

export function reducer(state = initialState, action: TodoActions): TodoState {
  switch (action.type) {

    case TodoActionTypes.AddTodo: {
      return {...state, todos: {...state.todos , [action.payload.todo.uuid] : action.payload.todo}};
    }

    case TodoActionTypes.UpdateTodo: {
      return {...state, todos: {...state.todos , [action.payload.todo.uuid] : action.payload.todo}};
    }

    default:
      return state;
  }
}
