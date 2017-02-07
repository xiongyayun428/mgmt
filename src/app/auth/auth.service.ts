import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { AuthConfigConsts } from 'angular2-jwt';
import { Constants } from '../domain/constants';


@Injectable()
export class AuthService {

    constructor(private router: Router, private http: Http) { }

    /**
     * 身份验证
     * 
     * 登录成功跳转到初始跳转页面
     */
    isAuthenticated(username: string, password: string): string {
        // 记录重定向url
        const redirectUrl = (localStorage.getItem(Constants.REDIRECT_URL) === null) ? Constants.DEFAULT_URL : localStorage.getItem(Constants.REDIRECT_URL);

        // const authResult = this.http.get('user.json').subscribe(res=> this.authResult =res.json());
        // this.setUser(authResult);
        window.location.hash = '';
        this.router.navigate([redirectUrl]);
        return null;
    }

    private setUser(authResult): void {
        // localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem(AuthConfigConsts.DEFAULT_TOKEN_NAME, authResult.idToken);
    }
}
