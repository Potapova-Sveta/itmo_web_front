import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: {
    class: 'app-login',
  },
})
export class LoginComponent implements OnInit {
  username: string;
  timezone: number;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }


  login(): void {
    this.authService.login({
      name: this.username,
      timezoneOffset: this.timezone,
      numberOfTasks: undefined,
    }).subscribe(_ => {
      this.router.navigate(['']);
    });
  }
}
