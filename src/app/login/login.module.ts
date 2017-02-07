import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

import { UserService } from '../core/user.service';
import { AuthService } from '../auth/auth.service';

@NgModule({
  // 需要引用的模块
  imports: [ CommonModule, FormsModule ],
  // 声明当前模块中使用的组件
  declarations: [ LoginComponent ],
  providers: [ UserService,
    {provide: 'authService', useClass: AuthService}
  ],
  // 导出公共部分提供其他模块使用
  exports: [ LoginComponent ]
})
export class LoginModule { }
