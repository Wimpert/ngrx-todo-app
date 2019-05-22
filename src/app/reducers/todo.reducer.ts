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
      return {...state, todos: {...state.todos , [action.payload.todo.uuid] : action.payload.todo}};
    }

    case TodoActionTypes.UpdateTodo: {
      return {...state, todos: {...state.todos , [action.payload.todo.uuid] : action.payload.todo}};
    }

    default:
      return state;
  }
}


export const selectTodos = (state) =>  state.todoState.todos;

const getAllTodosAsArray = createSelector(selectTodos, (todos: {[id: string]: Todo}) => {
  if ( todos ) {
    return Object.values(todos);
  }
  return [];
});

export const getNumberOfTodos = createSelector(getAllTodosAsArray, (todos) =>  {
  return todos.length;
});

export const getAllUnArchivedTodos = createSelector(getAllTodosAsArray, (todos) =>  todos.filter(todo => !todo.archived));

export const getAllArchivedTodos = createSelector(getAllTodosAsArray, (todos) => todos.filter(todo => todo.archived));

export const getNumberOfDoneTodos = createSelector(getAllUnArchivedTodos, (todos) => todos.filter(todo => todo.done).length);

export const getNumberOfArchivedTodos = createSelector(getAllArchivedTodos, (todos) => todos.length);



