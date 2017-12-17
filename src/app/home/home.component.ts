import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'png-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = 'Pahng';

  constructor() { }

  ngOnInit() {
  }

}
