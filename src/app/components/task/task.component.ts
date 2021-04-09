import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Task} from '../../models/task.model';
import {TaskService} from '../../services/task.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {

  task$: Observable<Task> = this.taskService.getTask(this.activatedRoute.snapshot.paramMap.get('id'));
  comment: string;
  photo: File;
  photoUrl: string | ArrayBuffer;

  constructor(private activatedRoute: ActivatedRoute,
              private taskService: TaskService) {
  }

  ngOnInit(): void {
  }


  completeTask(task: Task): void {

  }

  changePhoto(files: File[]): void {
    this.photo = files[0];
    const reader = new FileReader();
    reader.onload = (_event) => {
      this.photoUrl = _event.target.result;
    };
    reader.readAsDataURL(this.photo);
  }
}
