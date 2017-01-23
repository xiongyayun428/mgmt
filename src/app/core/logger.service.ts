import { Injectable } from '@angular/core';

/**
 * 记录日志到浏览器服务
 */
@Injectable()
export class LoggerService {

  constructor() { }

  /**
   * 输出log信息
   */
  info(msg: any) { console.log(msg); }
  /**
   * 输出error信息
   */
  error(msg: any) { console.error(msg); }
  /**
   * 输出warn信息
   */
  warn(msg: any) { console.warn(msg); }

}
