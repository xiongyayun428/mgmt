import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';

import { LoginModule } from './login/login.module';
import { LoginComponent } from './login/login.component';

import { SignupModule } from './signup/signup.module';
import { SignupComponent } from './signup/signup.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';

import { LoggerService } from './core/logger.service';
import { AuthenticationGuardService } from './core/authentication-guard.service'
import { NofoundComponent } from './nofound/nofound.component';


@NgModule({
  // 声明当前模块中使用的模块
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // 注册路由
    RouterModule.forRoot(routes),
    // 注册模块
    LoginModule,
    SignupModule,
    DashboardModule
  ],
  // 声明当前模块中使用的组件
  declarations: [
    AppComponent
  ],
  // 定义全局供应商
  providers: [
    LoggerService, AuthenticationGuardService
    // 下面这种存在问题
//    { provide: 'authentication', useClass: AuthenticationService },
//    { provide: 'logger', useClass: LoggerService }
  ],
  // 启动根模块 (注册供应商服务)
  bootstrap: [ AppComponent ]
})
export class AppModule { }
