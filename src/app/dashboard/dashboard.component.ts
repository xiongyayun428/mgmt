import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard-cmp',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('DashboardComponent init');
  }

}
