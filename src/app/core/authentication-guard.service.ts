import { Injectable, Inject } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

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
export class AuthenticationGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //取得用户访问的URL
    let url: string = state.url;
    console.log('canActivate url: ' + url);
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log('userId: ' + localStorage.getItem('userId'));
    //如果用户已经登录就放行
    if (localStorage.getItem('userId') !== null) {
      return true;
    }
    console.log('>>>>>>>>>> 未登录 <<<<<<<<<<');
    //否则，存储要访问的URl到本地
    localStorage.setItem('redirectUrl', url);
    //然后导航到登陆页面
    this.router.navigate(['/login']);
    //返回false，取消导航
    return false;
  }
}