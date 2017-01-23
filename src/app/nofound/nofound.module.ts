import { NgModule } from "@angular/core";
import { NofoundComponent } from "./nofound.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthenticationGuardService } from '../core/authentication-guard.service'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: NofoundComponent, canActivate: [AuthenticationGuardService]
      }
    ])
  ],
  declarations: [
    NofoundComponent
  ]
})
export class NofoundModule { }