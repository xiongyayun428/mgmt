import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'page-no-found',
  templateUrl: 'nofound.component.html',
  styleUrls: ['nofound.component.css']
})
export class NofoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

}
