import { Injectable } from '@angular/core';
import { TodoListComponentComponent } from './todo-list-component/todo-list-component.component';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  protected counterService = 0;

  constructor() { }

  add(){
    this.counterService++;
  }
}
