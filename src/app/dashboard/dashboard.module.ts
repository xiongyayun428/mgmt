import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap';

import { HomeModule } from './home/home.module';

import { DashboardComponent } from './dashboard.component';
import { TopnavComponent } from './layout/index';
import { SidebarComponent } from './layout/index';

import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DropdownModule.forRoot(),
    HomeModule
  ],
  // 声明当前模块中使用的组件
  declarations: [
    DashboardComponent,
    TopnavComponent,
    SidebarComponent,
    ProfileComponent,
    SettingsComponent
  ],
  // 导出公共部分提供其他模块使用
  exports: [
    DashboardComponent,
    TopnavComponent,
    SidebarComponent
  ]
})
export class DashboardModule { }
