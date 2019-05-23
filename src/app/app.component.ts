import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from './services/todo/todo.service';
import { Todo } from './shared/todo.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-todo-app';

  todos: Array<Todo> = [
    {todoText: 'this is my todo text', done: false, archived: false},
    {todoText: 'this is my todo text', done: true, archived: false},
    {todoText: 'this is my todo text', done: false, archived: true},
    {todoText: 'this is my todo text', done: true, archived: true},
  ];

  numberOfOpenTodos$: Observable<number>;
  numberOfDoneTodos$: Observable<number>;
  numberOfArchivedTodos$: Observable<number>;
  unArchivedTodos$: Observable<Array<Todo>>;
  archivedTodos$: Observable<Array<Todo>>;

  constructor(private readonly todoService: TodoService) {}

  ngOnInit() {
    this.numberOfOpenTodos$ = this.todoService.numberOfOpenTodos$;
    this.numberOfDoneTodos$ = this.todoService.numberOfDoneTodos$;
    this.numberOfArchivedTodos$ = this.todoService.numberOfArchivedTodos$;
    this.unArchivedTodos$ = this.todoService.unArchivedTodos$;
    this.archivedTodos$ = this.todoService.archivedTodos$;
  }

  handleCreateTodo(text: string) {
    this.todoService.createTodo(text);
  }

  handleTodoChanged(todo: Todo) {
    this.todoService.updateTodo(todo);
  }

}
