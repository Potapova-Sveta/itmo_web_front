import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task, TaskStatus } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  public getTask(id: string): Observable<Task> {
    return this.http.get<Task>(`${environment.backendURL}/tasks/${id}`);

  }

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${environment.backendURL}/users/${this.authService.getLoggedInUserName()}/tasks`);
  }

  public updateTask(task: Task): Observable<Task> {
    return this.http.patch<Task>(`${environment.backendURL}/tasks/${task.id}`, task);
  }

  public getStats(month, year): Observable<number[]> {
    return this.http.get<number[]>(`${environment.backendURL}/users/${this.authService.getLoggedInUserName()}/stats`,
      {
        params: {
          month,
          year
        },
      });
  }
}
