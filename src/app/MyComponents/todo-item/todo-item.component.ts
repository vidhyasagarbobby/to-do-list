import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoMarkCompleted: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  delete(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("Button is clicked");
  }

  markCompleted(todo: Todo) {
    this.todoMarkCompleted.emit(todo);
    console.log(todo);
  }
}
