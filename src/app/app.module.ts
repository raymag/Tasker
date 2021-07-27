import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TaskInputComponent } from './task-board/task-input/task-input.component';
import { TaskListComponent } from './task-board/task-list/task-list.component';
import { TaskComponent } from './task-board/task/task.component';
import { TaskDeleteButtonComponent } from './task-board/task-delete-button/task-delete-button.component';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskBoardComponent,
    TaskInputComponent,
    TaskListComponent,
    TaskComponent,
    TaskDeleteButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
