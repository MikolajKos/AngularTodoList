import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {
  Tasks: any = 
  [
    ['Important', 'Work', 'Finish Angular Proj'],
    ['Very Important', 'Family', 'Order Pizza'],
    ['Not Important', 'Home', 'Nigger']
  ];

}
