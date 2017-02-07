import { Injectable } from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';

import { tokenNotExpired } from 'angular2-jwt';

/**
 * 认证服务的路由守卫
 * 
 * <ul>
 * <li>用CanActivate来处理导航到某路由的情况。</li>
 * <li>用CanActivateChild处理导航到子路由的情况。</li>
 * <li>用CanDeactivate来处理从当前路由离开的情况。</li>
 * <li>用Resolve在路由激活之前获取路由数据。</li>
 * <li>用CanLoad来处理异步导航到某特性模块的情况。</li>
 * </ul>
 */
@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private router: Router) { }

    /**
     * 检查是否通过身份验证
     */
    public authenticated(): boolean {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        // return tokenNotExpired();
        return true;
    };

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authenticated()) {
            return true;
        } else {
            console.log('unauthorized redirect url: ' + state.url);
            // Save URL to redirect to after login and fetching profile to get roles
            localStorage.setItem('redirect_url', state.url);
            this.router.navigate(['/login']);
            return false;
        }
    }

}
