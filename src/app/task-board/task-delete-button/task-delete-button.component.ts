import { Component } from '@angular/core';

@Component({
  selector: 'app-task-delete-button',
  templateUrl: './task-delete-button.component.html',
  styleUrls: ['./task-delete-button.component.scss']
})
export class TaskDeleteButtonComponent {
  delTask() {
    console.log("Clicked!");
  }
}
