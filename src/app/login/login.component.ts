import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from '../core/user.service';
import { User } from '../domain/entities';

import { AuthenticationService } from '../core/authentication.service';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  model: any = { username: '', password: '' };

  constructor(
    private router: Router,
    private userService: UserService,
    @Inject('authenticationService') private service
  ) { }

  ngOnInit() {
    console.log('login');
  }

  /**
   * 登录
   */
  login() {
    this.service.isAuthenticated(this.model as User)
      .then(auth => {
        if (auth.hasError) {
          this.error = auth.errMsg;
        } else {
          this.router.navigate([ auth.redirectUrl ]);
        }
      })
      .catch(err => {
        this.error = err;
      });
  }

}
