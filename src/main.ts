// 浏览器兼容
import './polyfills.ts';

// 初始化
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// 引入angular2核心包（所有组件、指令、服务等定义类时需要的装饰器，都可以通过 @angular/core 找到）
import { enableProdMode } from '@angular/core';
// 环境（开发、生产）
import { environment } from './environments/environment';
// 根模块
import { AppModule } from './app/';
// import { AppModule } from './app/app.module';

// 判断是否为生产环境
if (environment.production) {
  enableProdMode();
}

// 从一个指定的NgModule中使用根组件引导应用
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
