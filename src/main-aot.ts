/**
 * 基于AOT(Ahead of Time)编译器的静态引导
 */

// 浏览器兼容
import './polyfills.ts';

import { platformBrowser } from '@angular/platform-browser';

// 引入angular2核心包（所有组件、指令、服务等定义类时需要的装饰器，都可以通过 @angular/core 找到）
import { enableProdMode } from '@angular/core';
// 环境（开发、生产）
import { environment } from './environments/environment';

import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

// 判断是否为生产环境
if (environment.production) {
  enableProdMode();
};

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
