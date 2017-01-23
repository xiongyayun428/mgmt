import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SignupComponent } from './signup.component';

@NgModule({
  // 需要引用的模块
  imports: [CommonModule, RouterModule],
  // 声明当前模块中使用的组件
  declarations: [ SignupComponent ],
  // 导出公共部分提供其他模块使用
  exports: [SignupComponent]
})
export class SignupModule { }
