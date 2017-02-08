import { Routes } from '@angular/router';

import { LoginRoutes } from './login/login.routes';
import { SignupRoutes } from './signup/signup.routes';
import { DashboardRoutes } from './dashboard/dashboard.routes';
import { NofoundRoutes } from './nofound/nofound.routes';

export const routes: Routes = [
  // 这里注意通过“…”会将特性区配置的路由表扁平化到app路由配置中
  { path: 'dashboard', redirectTo: '/dashboard/home', pathMatch: 'full' },
  { path: '', redirectTo: '/dashboard/home', pathMatch: 'full' },
  ...LoginRoutes,
  ...SignupRoutes,
  ...DashboardRoutes,
  ...NofoundRoutes,
  // 未匹配任何时
  { path: '**', redirectTo: '/nofound' }
];
