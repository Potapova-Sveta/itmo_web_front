import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from 'src/app/models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  TaskStatus = TaskStatus;
  tasks$ = this.taskService.getTasks();

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
  }

  cancelTask(task: Task): void {
    this.taskService.updateTask({ ...task, status: TaskStatus.FAILED }).subscribe(_ => {
      this.tasks$ = this.taskService.getTasks();
    });
  }
}
