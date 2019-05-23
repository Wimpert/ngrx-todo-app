import { } from '@angular/compiler/src/core';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material';
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

  todoDoneChanged(event: MatSlideToggleChange): void {
    this.todoChanged.emit({... this.todo, done: event.checked});
  }

  archiveTodo(): void {
    this.todoChanged.emit({... this.todo, archived: true});
  }

  unArchiveTodo(): void {
    this.todoChanged.emit({... this.todo, archived: false});
  }

}
