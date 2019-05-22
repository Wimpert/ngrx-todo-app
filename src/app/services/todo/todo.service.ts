import { Injectable } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  createTodo(text: string) {
    console.log('creating todo with text:', text);
  }

  updateTodo(todo: Todo) {
    console.log('updating todo:', todo);
  }

  constructNewTodo(todoText: string): Todo {
    const todo: Todo = { todoText , done: false, archived: false , uuid: uuid()};
    return todo;
  }

}
