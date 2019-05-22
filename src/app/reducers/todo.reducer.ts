import { TodoActions } from '../actions/todo.actions';
import { Todo } from '../shared/todo.model';


export interface TodoState {
   todos: {[id: string]: Todo};
}

export const initialState: TodoState = {
  todos : {}
};

export function reducer(state = initialState, action: TodoActions): TodoState {
  switch (action.type) {

    default:
      return state;
  }
}
