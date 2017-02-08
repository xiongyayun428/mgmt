import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { AuthGuardService } from '../auth/auth-guard.service';

/**
 * 只在应用启动时导入它一次，而不会在其它地方导入它
 * @SkipSelf装饰器意味着在当前注入器的所有祖先注入器中寻找CoreModule
 */
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: 'auth', useClass: AuthenticationService },
    { provide: 'user', useClass: UserService },
    AuthGuardService
    ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}