import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'png-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public title = 'Pahng';

  constructor() { }

  ngOnInit() {
  }

}
