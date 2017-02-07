import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Auth } from '../domain/entities';
import { User } from '../domain/entities';
import { UserService } from '../core/user.service';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http, private userService: UserService) { }

  /**
   * 身份验证
   * 
   * 登录成功跳转到初始跳转页面
   */
  isAuthenticated(model: User): Promise<Auth> {
    console.log('username: ' + model.username + ', password: ' + model.password);
    return this.userService
      .findUser(model.username)
      .then(user => {
        const auth = new Auth();
        localStorage.removeItem('userId');
        const redirectUrl = (localStorage.getItem('redirectUrl') === null) ? '/dashboard/home' : localStorage.getItem('redirectUrl');
        auth.redirectUrl = redirectUrl;
        console.log('url: ' + redirectUrl);
        if (null === user) {
          auth.hasError = true;
          auth.errMsg = 'user not found';
        } else if (user.password === model.password) {
          auth.user = Object.assign({}, user);
          auth.hasError = false;
          localStorage.setItem('userId', user.id.toString());
        } else {
          auth.hasError = true;
          auth.errMsg = 'password not match';
        }
        return auth;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
