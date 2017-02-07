import { Injectable } from '@angular/core';
import { User } from '../domain/entities';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class UserService {

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  // 是否已经登录？
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor() { }

  /**
   * 通过用户名查找用户
   * 
   * 异步操作
   */
  findUser(username: string): Promise<User> {
    return new Promise(function(resolve, reject) {
      if (username === 'admin') {
        const user = new User();
        user.id = 1000;
        user.username = 'admin';
        user.password = 'admin';
        resolve(user);
      }
      resolve(null);
    });
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
