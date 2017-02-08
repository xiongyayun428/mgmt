import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NofoundComponent } from './nofound.component';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [ NofoundComponent ],
  exports: [ NofoundComponent ]
})
export class NofoundModule { }
