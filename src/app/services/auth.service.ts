import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username: string;

  constructor(private router: Router) {
  }

  public login(username: string): void {
    localStorage.setItem('currentUser', username);
    this.username = username;
  }

  public getLoggedInUserName(): string {
    return localStorage.getItem('currentUser');
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}
