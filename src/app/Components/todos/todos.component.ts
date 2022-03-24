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
    this.todos = [{ title: '1', isComplete: false }]
  }

  addToDo(todo: Todo) {
    this.todos.push(todo)
  }

}
