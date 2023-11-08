import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent {
  Tasks: any = [
    {priority: 'Important', category: 'Work', task: 'Finish Angular Proj'},
    {priority: 'Very Important', category: 'Family', task: 'Order Pizza'},
    {priority: 'Not Important', category: 'Home', task: 'Wash car'}
  ];
  
  AddTask(){
    this.Tasks.push({priority: 'Not Important', category: 'Home', task: 'Wash car'})
  }
  
  DeleteTask(task: string){
    //this.Tasks = this.Tasks.filter(e => e !== task);
  }
}
