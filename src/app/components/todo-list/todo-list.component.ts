import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent  {

  @Input() todoList: Array<Todo>;
  @Output() todoChanged: EventEmitter<Todo> = new EventEmitter<Todo>();

}
