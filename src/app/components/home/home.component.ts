import {Component, OnInit} from '@angular/core';
import {Task, TaskStatus} from 'src/app/models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [
    {
      id: 'zxc',
      status: TaskStatus.OPEN,
      number: 1,
      description: 'lorem ipsum'
    },
    {
      id: 'zxc',
      status: TaskStatus.FAILED,
      number: 3,
      description: 'lorem ipsum'
    },
    {
      id: 'zxc',
      status: TaskStatus.COMPLETE,
      number: 2,
      description: 'lorem ipsum'
    }
  ];
  TaskStatus = TaskStatus;

  constructor() {
  }

  ngOnInit(): void {
  }

  cancelTask(task: Task): void {

  }
}
