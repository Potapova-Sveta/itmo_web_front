import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TaskService } from '../../services/task.service';
import { map } from 'rxjs/operators';
import { TaskStatus } from '../../models/task.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  tasksCount$ = this.taskService.getTasks()
    .pipe(
      map(tasks => tasks.filter(task => task.status === TaskStatus.OPEN).length),
    );
  hoursLeft: string = this.hoursUntilMidnight().toFixed(0);

  constructor(private authService: AuthService,
              private taskService: TaskService) {
  }

  ngOnInit(): void {

  }

  logout(): void {
    this.authService.logout();
  }


  private hoursUntilMidnight() {
    var midnight = new Date();
    midnight.setHours(24);
    midnight.setMinutes(0);
    midnight.setSeconds(0);
    midnight.setMilliseconds(0);
    return (midnight.getTime() - new Date().getTime()) / 1000 / 60 / 60;
  }
}
