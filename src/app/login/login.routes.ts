import { Routes } from '@angular/router';
import { LoginComponent } from './index';

/**
 * 登录的路由
 */
export const LoginRoutes: Routes = [
  {
    path: 'login', component: LoginComponent, pathMatch: 'full'
  }
];
