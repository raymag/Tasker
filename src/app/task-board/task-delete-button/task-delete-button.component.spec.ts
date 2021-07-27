import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeleteButtonComponent } from './task-delete-button.component';

describe('TaskDeleteButtonComponent', () => {
  let component: TaskDeleteButtonComponent;
  let fixture: ComponentFixture<TaskDeleteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskDeleteButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDeleteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
