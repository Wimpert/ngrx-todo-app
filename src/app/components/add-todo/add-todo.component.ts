import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTodoComponent {

  @Output() addTodo: EventEmitter<string> = new EventEmitter<string>();

  todoText: string;

  updateTodoText(newText: string) {
    this.todoText = newText;
  }

}
