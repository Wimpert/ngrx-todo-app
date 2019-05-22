import { createSelector } from '@ngrx/store';
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
      return {...state, [action.payload.todo.uuid] : action.payload.todo};
    }

    case TodoActionTypes.UpdateTodo: {
      return {...state, [action.payload.todo.uuid] : action.payload.todo};
    }

    default:
      return state;
  }
}


export const selectTodos = (state: TodoState) => state.todos;

const getAllTodosAsArray = createSelector(selectTodos, (todos: {[id: string]: Todo}) => {
  if(todos){
    return Object.entries(todos)
  }
  return [];
});

export const getNumberOfTodos = createSelector(getAllTodosAsArray, (todos) =>  {
  console.log('here');
  return todos.length;
});


// export const openTodos = createSelector(selectTodos, (todos: {[id: string]: Todo}) => Object.entries(todos).filter((todo: Todo) => !todo.archived));
