import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent{
  title: string;
  body: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  addTodo() {
    const todo = {
      id: 0,
      title: this.title,
      body: this.body,
      isPending: true
    }
    this.todoAdd.emit(todo);
  }
}
