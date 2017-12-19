import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'png-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public title = 'Pahng Dashboard';

  constructor() { }

  ngOnInit() {
  }

}
