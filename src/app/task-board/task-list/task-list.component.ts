import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  tasks: string[];

  constructor(taskService: TaskService){
    taskService.tasksSubject.subscribe(tasks => this.tasks = tasks);
    this.tasks = taskService.tasksSubject.getValue();
  }
}
