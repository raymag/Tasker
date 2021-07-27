import { Component } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.scss']
})
export class TaskInputComponent {
  taskText = '';

  add() {
    this.taskText = '';
  }

  keydown(e: KeyboardEvent) {
    if (e.code === 'Enter') {
      this.add();
    }
  }
}
