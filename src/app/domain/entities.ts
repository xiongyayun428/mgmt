/**
 * 用户信息
 */
export class User {
  id: number;
  username: string;
  // 密码不能放前端，这里暂时这么做
  password: string;
};
/**
 * 认证信息
 */
export class Auth {
  user: User;
  hasError: boolean;
  errMsg: string;
  redirectUrl: string;
};

export class AuthConfigConstsTmp {
    static DEFAULT_TOKEN_NAME: string = 'id_token';
    static DEFAULT_HEADER_NAME: string = 'Authorization';
    static HEADER_PREFIX_BEARER: string  = 'Bearer ';
};

export const AuthConfigConsts = {
    DEFAULT_TOKEN_NAME: 'id_token',
    DEFAULT_HEADER_NAME: 'Authorization',
    HEADER_PREFIX_BEARER: 'Bearer '
};

// export class AuthConfigDefaults {
//     headerName: AuthConfigConsts.DEFAULT_HEADER_NAME,
//     headerPrefix: null,
//     tokenName: AuthConfigConsts.DEFAULT_TOKEN_NAME,
//     tokenGetter: function () { return localStorage.getItem(AuthConfigDefaults.tokenName); },
//     noJwtError: false,
//     noClientCheck: false,
//     globalHeaders: [],
//     noTokenScheme: false
// };