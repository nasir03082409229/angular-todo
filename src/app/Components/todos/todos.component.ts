import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addToDo(todo: Todo) {
    this.todos.push(todo)
  }


  toggleToDo(index: number) {
    let todo = this.todos[index];
    todo.isComplete = !todo.isComplete;
    this.todos.splice(index, 1, todo)
  }

  deleteToDo(index: number) {
    this.todos.splice(index, 1)

  }


}
