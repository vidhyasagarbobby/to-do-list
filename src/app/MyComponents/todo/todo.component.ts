import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  localItem: string | null;
  todos: Todo[];
  title = 'to-do component';

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem === null) {
      this.todos = []; 
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  markCompleted(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].isPending = !this.todos[index].isPending;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
