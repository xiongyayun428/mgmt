import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'nofound.component.html',
  styleUrls: ['nofound.component.css']
})
export class NofoundComponent {

  constructor(private router: Router) { }

  gotoDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

}
