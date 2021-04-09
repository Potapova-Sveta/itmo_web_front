import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Task, TaskStatus} from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {
  }

  public getTask(id: string): Observable<Task> {
    return of({
      number: 1,
      status: TaskStatus.OPEN,
      id: 'zxc',
      description: 'lorem ipsum'
    });
  }

  public getTasks(): Observable<Task[]> {
    return null;
  }

}
