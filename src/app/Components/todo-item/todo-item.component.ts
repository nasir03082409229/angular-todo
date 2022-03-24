import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }
  @Input() todo: Todo;
  @Input() index: number;
  @Output() toggleToDo: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
  }

  onClickToggle(index: number) {
    this.toggleToDo.emit(index)
  }


}
