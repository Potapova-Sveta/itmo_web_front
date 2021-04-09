import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  host: {
    class: 'app-login'
  }
})
export class LoginComponent implements OnInit {
  username: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }


  login(): void {
    this.authService.login(this.username);
    this.router.navigate(['']);
  }
}
