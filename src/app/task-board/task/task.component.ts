import { Component, Input } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task:string = '';
  @Input() i:number = 0;
  taskService: TaskService;
  
  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  delTask(i:number) {
    this.taskService.delTask(i);
  }
}
