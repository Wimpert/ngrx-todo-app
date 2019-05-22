import { Injectable } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  addTodo(text: string) {
    console.log('adding todo with text:', text);
  }

  updateTodo(todo: Todo) {
    console.log('updating todo:', todo);
  }

}
