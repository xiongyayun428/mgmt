import { LoggerService } from './core/logger.service'
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  constructor(private logger: LoggerService) { }

  // 初始化时检查是否登录？
  ngOnInit() {
    this.logger.info('app init');
  }

  // 注销时处理
  ngOnDestroy() {
    console.log('app destroy');
  }
}
