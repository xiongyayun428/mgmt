import { NgModule } from "@angular/core";
import { NofoundComponent } from "./nofound.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '', component: NofoundComponent, canActivate: [AuthGuardService]
      }
    ])
  ],
  declarations: [
    NofoundComponent
  ]
})
export class NofoundModule { }