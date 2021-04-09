import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private router: Router,
              private http: HttpClient) {
  }

  public login(user: User): Observable<User> {
    return this.http.post<User>(`${environment.backendURL}/users`, user).pipe(
      tap(user => {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }),
    );
  }

  public getLoggedInUserName(): string {
    return JSON.parse(localStorage.getItem('currentUser'))?.name;
  }

  public getuser(): User {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
