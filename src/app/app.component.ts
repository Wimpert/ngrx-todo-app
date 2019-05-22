import { Component } from '@angular/core';
import { TodoService } from './services/todo/todo.service';
import { Todo } from './shared/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-todo-app';

  todos: Array<Todo> = [
    {todoText: 'this is my todo text', done: false, archived: false},
    {todoText: 'this is my todo text', done: true, archived: false},
    {todoText: 'this is my todo text', done: false, archived: true},
    {todoText: 'this is my todo text', done: true, archived: true},
  ];

  constructor(private readonly todoService: TodoService) {}

  handleAddTodo(text: string) {
    this.todoService.addTodo(text);
  }

  handleTodoChanged(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

}
