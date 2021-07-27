import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-delete-button',
  templateUrl: './task-delete-button.component.html',
  styleUrls: ['./task-delete-button.component.scss']
})
export class TaskDeleteButtonComponent {
  taskService: TaskService;
  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }
  delTasks() {
    this.taskService.delTasks();
  }
}
