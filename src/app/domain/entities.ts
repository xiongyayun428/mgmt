/**
 * 用户信息
 */
export class User {
  id: number;
  username: string;
  // 密码不能放前端，这里暂时这么做
  password: string;
}
/**
 * 认证信息
 */
export class Auth {
  user: User;
  hasError: boolean;
  errMsg: string;
  redirectUrl: string;
}