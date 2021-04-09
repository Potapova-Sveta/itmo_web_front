import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  name: string = this.authService.getLoggedInUserName();

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

}
