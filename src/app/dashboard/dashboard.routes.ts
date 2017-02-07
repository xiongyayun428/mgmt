import { Route } from '@angular/router';

import { HomeRoutes } from './home/home.routes';
import { ProfileRoutes } from './profile/profile.routes';
import { SettingsRoutes } from './settings/settings.routes';
// import { ChartRoutes } from './charts/chart.route';
// import { BlankPageRoutes } from './blank-page/blankPage.routes';
// import { TableRoutes } from './tables/table.routes';
// import { FormRoutes } from './forms/forms.routes';
// import { GridRoutes } from './grid/grid.routes';
// import { BSComponentRoutes } from './bs-component/bsComponent.routes';
// import { BSElementRoutes } from './bs-element/bsElement.routes';

import { DashboardComponent } from './index';
import { AuthGuardService } from '../auth/auth-guard.service';

export const DashboardRoutes: Route[] = [
    {
      path: 'dashboard',
      component: DashboardComponent,
      // 权限校验
      canActivate: [ AuthGuardService ],
      children: [
        ...HomeRoutes,
        ...ProfileRoutes,
        ...SettingsRoutes,
//        ...ChartRoutes,
//        ...BSComponentRoutes,
//        ...TableRoutes,
//        ...BlankPageRoutes,
//        ...FormRoutes,
//        ...GridRoutes,
//        ...BSElementRoutes
      ]
    }
];
