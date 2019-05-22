import { } from '@angular/compiler/src/core';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoContainerComponent {

  @Input() todo: Todo;
  @Output() todoChanged: EventEmitter<Todo> = new EventEmitter<Todo>();

  todoDoneChanged(event: boolean): void {
    this.todoChanged.emit({... this.todo, done: event});
  }

  todoTextChanged(event: string): void {
    this.todoChanged.emit({... this.todo, todoText: event});
  }

  archiveTodo(): void {
    this.todoChanged.emit({... this.todo, archived: true});
  }

}
