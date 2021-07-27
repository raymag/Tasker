import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: string[];
  tasksSubject: BehaviorSubject<string[]>;

  constructor() {
    this.tasks = this.getStoredTasks();
    this.tasksSubject = new BehaviorSubject(this.tasks);
  }

  private getStoredTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || '');
    return storedTasks? storedTasks: [];
  }

  private setStoredTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
    this.tasksSubject.next(this.tasks);
  }

  storeNewTask(taskText: string) {
    this.tasks.push(taskText);
    this.setStoredTasks();
  }

  delTask(i: number) {
    this.tasks = this.getStoredTasks();
    this.tasks.splice(i, 1);
    this.setStoredTasks();
  }

  delTasks() {
    this.tasks = [];
    this.setStoredTasks();
  }
}
