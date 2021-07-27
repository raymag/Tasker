import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {
  taskText = '';
  taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  add() {
    this.taskService.storeNewTask(this.taskText);
    this.taskText = '';
  }

  keydown(e: KeyboardEvent) {
    if (e.code === 'Enter') {
      this.add();
    }
  }
}
